import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useAuthFormValidation = ({ initialState, authSchema }) => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: initialState,
    resolver: zodResolver(authSchema),
  });

  return {
    handleSubmit,
    errors,
    control,
  };
};
