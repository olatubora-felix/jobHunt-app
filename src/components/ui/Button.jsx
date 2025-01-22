/* eslint-disable react/prop-types */
export const Button = ({ className, variant, children, ...props }) => {
  if (variant === "outline") {
    return (
      <button
        className={` bg-white border border-blue-500 hover:bg-blue-600 text-blue-500 px-4 
          py-2 rounded focus:outline-none hover:text-white transition-all ease-in-out ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  }
  return (
    <button
      className={` bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded focus:outline-none ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
