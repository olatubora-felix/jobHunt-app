import CardLayout from "../../components/layouts/CardLayout";
import { Button } from "../../components/ui/Button";
import { CustomInput } from "../../components/ui/CustomInput";
import { loginLists } from "../../constant/auth";

const LoginPage = () => {
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
      <form className="space-y-4">
        {loginLists?.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}

        <Button type="submit" className="w-full ">
          Login
        </Button>
      </form>
    </CardLayout>
  );
};

export default LoginPage;
