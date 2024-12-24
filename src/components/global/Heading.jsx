const Heading = ({ heading, className }) => {
  return (
    <h1
      className={`font-Inter font-semibold text-[22px] text-primary ${className}`}
    >
      {heading}
    </h1>
  );
};

export default Heading;
