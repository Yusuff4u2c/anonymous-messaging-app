import React from "react";

const Input = React.forwardRef(({ className = "", error, ...props }, ref) => {
  return (
    <>
      <input
        className={`outline-none bg-transparent w-[400px] pb-2 border-b-2 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
        ref={ref}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
});

Input.displayName = Input;

export default Input;
