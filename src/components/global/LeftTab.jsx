import { LeftTabActive } from '../../assets/icons';

const LeftTab = ({ onClick, title, icon, active }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-[26px] cursor-pointer relative"
    >
      {icon}

      <h1>{title}</h1>

      {active && (
        <img
          src={LeftTabActive}
          alt="Active"
          className="absolute left-[-40px]"
        />
      )}
    </div>
  );
};

export default LeftTab;
