import { Fragment } from "react";
import CardLayout from "../../components/layouts/CardLayout";
import { Button } from "../../components/ui/Button";
import { CustomInput } from "../../components/ui/CustomInput";
import { loginLists } from "../../constant/auth";
import { Controller } from "react-hook-form";
import { loginSchema } from "../../utils/schema/authSchema";
import { useAuthFormValidation } from "../../hooks/useAuthFormValidation";

const LoginPage = () => {
  const { handleSubmit, control, errors } = useAuthFormValidation({
    initialState: {
      email: "",
      password: "",
    },
    authSchema: loginSchema,
  });
  const onSubmit = (data) => console.log(data);
  return (
    <CardLayout
      title="Login"
      subTitle="Don't have an account?"
      link={{
        to: "/auth/register",
        subText: "Register",
        text: "Don't have an account?",
      }}
    >
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        {loginLists?.map((input) => (
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

        <Button type="submit" className="w-full ">
          Login
        </Button>
      </form>
    </CardLayout>
  );
};

export default LoginPage;
