const App = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="mt-40 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="space-y-6">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  autoComplete="email"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <label className="form-label ">Password</label>
                <input
                  type="password"
                  autoComplete="password"
                  className="form-control "
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name=""
                  id=""
                  rows={3}
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3 flex gap-2">
                <input
                  type="checkbox"
                  name=""
                  id=""
                  className="border border-gray-300 outline-none"
                />
                <label className="form-label">
                  Accept terms and conditions
                </label>
              </div>

              <div className="mb-3">
                <button type="submit" className="btn-primary">
                  Enter
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
