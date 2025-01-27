import { Fragment } from "react";
import CardLayout from "../../components/layouts/CardLayout";
import { CustomInput } from "../../components/ui/CustomInput";
import { registerLists } from "../../constant/auth";
import { Controller } from "react-hook-form";
import { registerSchema } from "../../utils/schema/authSchema";
import { Button } from "../../components/ui/Button";
import { useAuthFormValidation } from "../../hooks/useAuthFormValidation";

const RegisterPage = () => {
  const { handleSubmit, control, errors } = useAuthFormValidation({
    initialState: {
      email: "",
      password: "",
      name: "",
      password_confirmation: "",
    },
    authSchema: registerSchema,
  });

  const onSubmit = (data) => console.log(data);
  return (
    <CardLayout
      title="Register"
      link={{
        to: "/auth/login",
        subText: "Login",
        text: "Already have an account?",
      }}
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {registerLists?.map((input) => (
          <Fragment key={input.name}>
            <Controller
              name={input.name}
              control={control}
              render={({ field }) => (
                <CustomInput
                  label={input.label}
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  {...field}
                />
              )}
            />
            {errors[input.name] && (
              <span className="text-red-500">
                {errors[input.name]?.message}
              </span>
            )}
          </Fragment>
        ))}
        <Button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Register
        </Button>
      </form>
    </CardLayout>
  );
};

export default RegisterPage;
