const Button = ({ title, onClick, className, type }) => {
  return (
    <button
      className={`border-2 border-black text-lg font-medium rounded-md px-2 py-1 outline-none hover:bg-black hover:text-white min-w-32 flex items-center justify-center text-center cursor-pointer ${className}`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
