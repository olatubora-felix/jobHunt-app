const Navbar = () => {
  return (
    <header className="bg-blue-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-semibold">
          <a href="index.html">JobHunt</a>
        </h1>
        <nav className="space-x-4">
          <a href="login.html" className="text-white hover:underline">
            Login
          </a>
          <a href="register.html" className="text-white hover:underline">
            Register
          </a>
          <a
            href="post-job.html"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded hover:shadow-md transition duration-300"
          >
            <i className="fa fa-edit"></i> Post a Job
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
