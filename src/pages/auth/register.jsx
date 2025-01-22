import { Link } from "react-router";

const RegisterPage = () => {
  return (
    <div className="flex justify-center items-center mt-20">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-500 mx-6">
        <h2 className="text-4xl text-center font-bold mb-4">Register</h2>
        {/* <!-- <div className="message bg-red-100 p-3 my-3">This is an error message.</div>
        <div className="message bg-green-100 p-3 my-3">
          This is a success message.
        </div> --> */}
        <form>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="state"
              placeholder="State"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password_confirmation"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 border rounded focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
          >
            Register
          </button>

          <p className="mt-4 text-gray-500">
            Already have an account?
            <Link to={"/auth/login"} className="text-blue-900">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
