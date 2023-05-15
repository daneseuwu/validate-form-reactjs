import { useForm, SubmitHandler } from "react-hook-form";
import Swal from "sweetalert2";

type formInput = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  check: boolean;
};

const App = () => {
  const {
    register,
    getValues,
    formState: { errors },
    handleSubmit,
  } = useForm<formInput>();

  const onSubmit: SubmitHandler<formInput> = () => {
    Swal.fire({
      title: "En hora buena todos los campos han sido validados",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
    });
  };

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

              <div className="mb-3 flex gap-2">
                <input
                  type="checkbox"
                  className="cursor-pointer"
                  {...register("check", {
                    required: "Please accept terms and conditions",
                  })}
                />

                <label className="form-label">
                  Accept terms and conditions
                </label>
              </div>
              {errors.check && (
                <span className="validate">Accept terms and conditions</span>
              )}
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
