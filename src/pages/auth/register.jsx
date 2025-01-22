import CardLayout from "../../components/layouts/CardLayout";
import { CustomInput } from "../../components/ui/CustomInput";
import { registerLists } from "../../constant/auth";

const RegisterPage = () => {
  return (
    <CardLayout
      title="Register"
      link={{
        to: "/auth/login",
        subText: "Login",
        text: "Already have an account?",
      }}
    >
      <form className="space-y-4">
        {registerLists?.map((input) => (
          <CustomInput key={input.name} {...input} />
        ))}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none"
        >
          Register
        </button>
      </form>
    </CardLayout>
  );
};

export default RegisterPage;
