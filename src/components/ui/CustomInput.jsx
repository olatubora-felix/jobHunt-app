/* eslint-disable react/prop-types */
export const CustomInput = ({ label, name, className, type, ...props }) => {
  return (
    <div className="space-y-2 ">
      {label && (
        <label htmlFor={name} className="text-black font-normal text-base">
          {label}
        </label>
      )}
      {type === "textarea" ? (
        <textarea
          name={name}
          type={type}
          className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
          {...props}
        ></textarea>
      ) : (
        <input
          name={name}
          type={type}
          className={`w-full px-4 py-2 border rounded focus:outline-none ${className}`}
          {...props}
        />
      )}
    </div>
  );
};
