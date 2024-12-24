const User = ({ image, name, title, admin }) => {
  return (
    <div className="flex items-center justify-center flex-col min-w-[100px]">
      <div className="h-[70px] w-[70px] rounded-full object-cover">
        <img src={image} alt="User" className="rounded-full h-full w-full" />
      </div>

      <h1
        className={`${admin ? 'font-bold' : 'font-normal'} text-black text-base`}
      >
        {name}
      </h1>

      <h4
        className={`${admin ? 'font-bold' : 'font-normal'} text-secondary text-[15px]`}
      >
        {title}
      </h4>
    </div>
  );
};

export default User;
