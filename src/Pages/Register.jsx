import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div>
        <div
          className="min-h-max md:flex md:flex-row items-center justify-center bg-cover"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/free-vector/realistic-style-technology-particle-background_23-2148426704.jpg')",
          }}
        >
          <div className="md:w-1/2 relative bg-purple-500 bg-opacity-20 text-white p-8 rounded shadow-md">
            <h2 className="text-3xl text-center font-bold mb-6">Register</h2>
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
                  {...register("password", { required: true })}
                  aria-invalid={errors.password ? "true" : "false"}
                  type="password"
                  id="password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500 font-semibold" role="alert">
                    Password is required
                  </p>
                )}
                <label
                  htmlFor="password"
                  className="block text-white font-semibold mb-2"
                >
                  Confirm Password
                </label>
                <input
                  {...register("confirmPassword", { required: true })}
                  aria-invalid={errors.confirmPassword ? "true" : "false"}
                  type="password"
                  id="password"
                  className="w-full text-black px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your Confirm password"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-500 font-semibold" role="alert">
                    Confirm Password is required
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
