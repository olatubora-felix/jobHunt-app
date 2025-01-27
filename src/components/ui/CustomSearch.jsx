import { CustomInput } from "../ui/CustomInput";
import { FaSearch } from "react-icons/fa";
export const CustomSearch = () => {
  return (
    <div className="relative w-[300px]">
      <FaSearch className=" absolute right-5 top-1/2 -translate-y-1/2 opacity-40" />
      <CustomInput
        name={"search"}
        placeholder="Search..."
        type={"text"}
        className={"w-full"}
      />
    </div>
  );
};
