import BottomBanner from "../../../components/BottomBanner";

const CreateJobPage = () => {
  return (
    <>
      <section className="flex justify-center items-center mt-20">
        <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-600 mx-6">
          <h2 className="text-4xl text-center font-bold mb-4">
            Create Job Listing
          </h2>
          {/* <!-- <div className="message bg-red-100 p-3 my-3">This is an error message.</div>
        <div className="message bg-green-100 p-3 my-3">
          This is a success message.
        </div> --> */}
          <form method="POST">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
              Job Info
            </h2>
            <div className="mb-4">
              <input
                type="text"
                name="title"
                placeholder="Job Title"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <textarea
                name="description"
                placeholder="Job Description"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              ></textarea>
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="salary"
                placeholder="Annual Salary"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="requirements"
                placeholder="Requirements"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="benefits"
                placeholder="Benefits"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-500">
              Company Info & Location
            </h2>
            <div className="mb-4">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="address"
                placeholder="Address"
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
                type="text"
                name="phone"
                placeholder="Phone"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                placeholder="Email Address For Applications"
                className="w-full px-4 py-2 border rounded focus:outline-none"
              />
            </div>
            <button className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-2 my-3 rounded focus:outline-none">
              Save
            </button>
            <a
              href="/"
              className="block text-center w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded focus:outline-none"
            >
              Cancel
            </a>
          </form>
        </div>
      </section>
      <BottomBanner />
    </>
  );
};

export default CreateJobPage;
