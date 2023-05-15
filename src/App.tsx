import { useForm } from "react-hook-form";

type formInput = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  message: string;
  check: boolean;
};

const App = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<formInput>();

  const onSubmit = (data: unknown) => console.log(data);

  return (
    <>
      <div className="container mx-auto">
        <div className="mt-40 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8 px-6 shadow rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="validate">The name field is required</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="text"
                  className="form-control"
                  {...register("email", {
                    required: true,
                    pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  })}
                />
                {errors.email && (
                  <span className="validate">The email field is required</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label ">Password</label>
                <input
                  type="password"
                  className="form-control "
                  {...register("password", {
                    required: "Password is required",
                  })}
                />
                {errors.password && (
                  <span className="validate">
                    The password field is required
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label ">Confirm Password</label>
                <input
                  type="password"
                  className="form-control "
                  {...register("passwordConfirmation", {
                    required: " Please confirm password",
                    validate: {
                      matchesPreviousPassword: (value) => {
                        const { password } = getValues();
                        return password === value || "Passwords should match";
                      },
                    },
                  })}
                />
                {errors.passwordConfirmation && (
                  <span className="validate">
                    {errors.passwordConfirmation.message}
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label">Message</label>
                <textarea
                  name="message"
                  rows={3}
                  className="form-control"
                ></textarea>
              </div>

              <div className="mb-3 flex gap-2">
                <input
                  type="checkbox"
                  name="check"
                  className="cursor-pointer"
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
