import React from "react";
import { CustomInput } from "../../components/ui/CustomInput";
import { FaSearch } from "react-icons/fa";
import { Button } from "../../components/ui/Button";
import { searchJobInput } from "../../constant/jobs/searchJobInput";
export const SearchJob = () => {
  return (
    <form className="flex items-center justify-center  md:mx-auto space-x-2">
      {searchJobInput.map((input) => (
        <CustomInput
          className="w-full md:w-auto  px-4 py-2 focus:outline-none"
          label={""}
          key={input.name}
          {...input}
          type={"search"}
        />
      ))}
      <Button variant={"contain"} className="flex items-center gap-2">
        <FaSearch /> Search
      </Button>
    </form>
  );
};
