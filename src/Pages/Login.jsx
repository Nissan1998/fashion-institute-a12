import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../Firebase/firebase.config";
import Swal from "sweetalert2";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";

  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setError("");
        const user = result.user;
        navigate(from, { replace: true });
        console.log(user);
      })
      .catch((error) => {});
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Login Successfully",
          showConfirmButton: false,
          timer: 2000,
        });
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        if (error.message == "Firebase: Error (auth/user-not-found).") {
          return setError("The User is Not Exist");
        } else if (error.message == "Firebase: Error (auth/invalid-email).") {
          setError("");
        } else if (
          error.message == "Firebase: Error (auth/network-request-failed)"
        ) {
          setError("NetWork-Request-Failed");
        } else {
          setError("Your Given Password is Wrong");
        }
      });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div>
      <div
        className="min-h-screen p-20 flex items-center justify-center bg-cover"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg')",
        }}
      >
        <div className="md:w-1/2  relative bg-purple-500 bg-opacity-20 text-white p-8 rounded shadow-md">
          <h2 className="text-3xl text-center font-bold mb-6">Login</h2>
          {error ? (
            <p className="text-lg text-center text-red-600 font-semibold">
              **{error}**
            </p>
          ) : (
            ""
          )}
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-white font-semibold mb-2"
              >
                Email
              </label>
              <input
                {...register("email", { required: true })}
                aria-invalid={errors.email ? "true" : "false"}
                type="email"
                id="email"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500 font-semibold" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-white font-semibold mb-2"
              >
                Password
              </label>
              <input
                {...register("password", { required: true })}
                type={showPassword ? "text" : "password"}
                id="password"
                className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <p
                className="cursor-pointer absolute right-10 bottom-[49%]"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <FaEye className="top-1/2 text-black" />
                ) : (
                  <FaEyeSlash className=" top-1/2 text-black" />
                )}
              </p>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className=" w-full bg-opacity-25  bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Login
              </button>
              <p className="text-sm btn-link text-white">
                Are you new?
                <Link to="/register"> Register.....</Link>
              </p>
            </div>
            <p className="text-center mb-4">Or login with:</p>
            <div className="flex justify-center">
              <button
                onClick={handleGoogleSignIn}
                type="button"
                className="flex items-center text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mr-2"
              >
                <img
                  className="w-10 rounded-full mr-2"
                  src="https://play-lh.googleusercontent.com/6UgEjh8Xuts4nwdWzTnWH8QtLuHqRMUB7dp24JYVE2xcYzq4HA8hFfcAbU-R-PC_9uA1"
                  alt=""
                />
                Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
