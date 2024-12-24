const Container = ({ children, className }) => {
  return (
    <div className={`bg-white p-[30px] rounded-[25px] w-full ${className}`}>
      {children}
    </div>
  );
};

export default Container;
