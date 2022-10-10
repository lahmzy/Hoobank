import React from "react";

const Button = ({ style }) => {
  return (
    <button
      type="button"
      className={`py-4 ${style} px-6 bg-blue-gradient font-poppins text-medium text-primary outline-none rounded-[10px]`}
    >
      GetStarted
    </button>
  );
};

export default Button;
