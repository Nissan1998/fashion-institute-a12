import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log("login page location", location);
  const from = location.state?.from?.pathname || "/";
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // create user.....
    createUser(data.email, data.password)
      .then((result) => {
        const newUser = result.user;
        handleUserData(newUser, data.name, data.photo);

        navigate(from, { replace: true });
        setError("");
      })
      .catch((error) => {
        console.log(error);
        if (error.message) {
          setError("The User Already Exist");
        }
      });
  };
  const handleUserData = (user, name, photoURL) => {
    updateProfile(user, {
      displayName: name,
      photoURL: photoURL,
    })
      .then(() => {
        console.log("user name updated");
      })
      .catch((error) => {
        console.log(error.message);
        setError(error.message);
      });
  };
  return (
    <div>
      <div>
        <div
          className="min-h-max p-24 md:flex md:flex-row items-center justify-center bg-cover"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg')",
          }}
        >
          <div className="md:w-1/2 relative bg-purple-500 bg-opacity-20 text-white p-8 rounded shadow-md">
            <h2 className="text-3xl text-center font-bold mb-6">Register</h2>
            <p className="text-xl text-center font-bold text-red-600">
              {error}
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Photo URL
                </label>
                <input
                  {...register("photo", { required: true })}
                  aria-invalid={errors.photo ? "true" : "false"}
                  type="text"
                  id="name"
                  name="photo"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Photo URL"
                />
                {errors.photo?.type === "required" && (
                  <p className="text-red-500 font-semibold" role="alert">
                    Photo URL is required
                  </p>
                )}
                <label
                  htmlFor="email"
                  className="block text-white font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: true })}
                  aria-invalid={errors.name ? "true" : "false"}
                  type="text"
                  id="name"
                  name="name"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Name"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500 font-semibold" role="alert">
                    Name is required
                  </p>
                )}
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
                  {...register("password", {
                    required: "Password is required",

                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                      message:
                        "Password must contain at least one uppercase, one lowercase ,one number and a special Character",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                <p
                  className="cursor-pointer  absolute right-10 bottom-[44%]"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <FaEye className="top-1/2 text-black" />
                  ) : (
                    <FaEyeSlash className=" top-1/2 text-black" />
                  )}
                </p>
                {errors.password && (
                  <p className="text-red-500 font-semibold">
                    {errors.password.message}
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="block text-white font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", {
                    required: "Confirm Password is required",
                    validate: (value) =>
                      value === watch("password") || "Passwords do not match",
                  })}
                  type="password"
                  id="password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Confirm password"
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 font-semibold">
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
              <div className="mb-4">
                <button
                  type="submit"
                  className=" w-full bg-blue-500 bg-opacity-25 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Register
                </button>
                <p className="text-sm btn-link text-white">
                  Already have an account?
                  <Link to="/login"> Login.....</Link>
                </p>
              </div>
              <p className="text-center mb-4">Or Continue With:</p>
              <div className="flex justify-center">
                <button
                  type="button"
                  className="flex items-center  text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none mr-2"
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
    </div>
  );
};

export default Register;
