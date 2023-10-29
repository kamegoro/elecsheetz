const IndexPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-6 bg-white  rounded-xl shadow-md">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900 ">Welcome to Elecsheetz</h2>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Please login to continue</p>
        </div>
        <form className="mt-8 space-y-6">
          <div className="mx-auto max-w-xs">
            <label htmlFor="example1" className="mb-1 block text-sm font-medium text-gray-700">
              Upload file
            </label>
            <input
              id="example1"
              type="file"
              className="block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-primary-500 file:py-2.5 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-primary-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
            />
          </div>
          <button
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-gray-600 hover:bg-dark-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-gray-500"
            type="submit"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
