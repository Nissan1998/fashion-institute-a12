import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const CheckoutForm = ({ price, cart }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const { user, nextYear } = useContext(AuthContext);
  const [cardError, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    console.log(card);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("error", error);
      setError(error.message);
    } else {
      console.log(paymentMethod);
      setError("");
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unKnown",
            email: user?.email || "anonymous",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError.message);
    }
    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      // payment info save to the server
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        quantity: cart.length,
        status: "Enrolled",
        selectedCourse: cart.map((course) => course._id),
        coursesName: cart.map((course) => course.name),
        coursesId: cart.map((course) => course._id),
      };
      axiosSecure.post("/payments", payment).then((res) => {
        console.log(res.data);
        if (res.data.insertedResult) {
          // payment info updated
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Enrolled Successful! Trans id is : ${paymentIntent.id} `,
            showConfirmButton: false,
          });
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "black",
              backgroundColor: "white",
              "::placeholder": {
                color: "gray",
              },
            },
            invalid: {
              color: "red",
            },
          },
        }}
      />
      <p className="font-bold text-red-600 bg-white">{cardError}</p>
      <div className="flex justify-between items-center ">
        <button
          className="mt-5 hover:bg-success transform transition duration-200 text-bold bg-red-600 px-5 rounded-full hover:scale-105 hover:ease-out"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        <img
          className="object-cover w-20  mt-5"
          src="https://static.vecteezy.com/system/resources/previews/009/399/824/original/sim-card-clipart-design-illustration-free-png.png"
          alt=""
        />
      </div>
      <div className="flex items-center justify-between ">
        <div>
          <h3 className="mt-10">{user?.displayName}</h3>
          <p className="tracking-wide">{Math.random(Math.random(10))}</p>
        </div>

        <div className="mt-8 text-center">
          <h3 className="text-white font-bold text-xl">VISA</h3>
          <p>{nextYear.toLocaleDateString()}</p>
        </div>
      </div>
    </form>
  );
};

export default CheckoutForm;
