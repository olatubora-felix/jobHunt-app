/* eslint-disable react/prop-types */
export const CustomTitle = ({ name, className }) => {
  return (
    <h2
      className={`text-2xl font-bold mb-6 text-center text-gray-500 ${className}`}
    >
      {name}
    </h2>
  );
};
