const Input = ({ className = "", error, ...props }) => {
  return (
    <>
      <input
        className={`outline-none bg-transparent w-[400px] pb-2 border-b-2 ${
          error ? "border-red-500" : ""
        }`}
        {...props}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </>
  );
};

export default Input;
