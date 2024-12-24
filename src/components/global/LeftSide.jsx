import { MENU } from '../../mock';
import LeftTab from './LeftTab';

const LeftSide = ({ isMobile, active, setActive }) => {
  return (
    <div
      className={`${isMobile ? 'hidden' : 'flex'} min-w-[250px] flex-col gap-10 h-[calc(100vh-101px)] overflow-y-auto mt-[26px] p-10 bg-white`}
    >
      {MENU.map(({ id, title, Icon }) => (
        <LeftTab
          key={id}
          onClick={() => setActive(id)}
          title={title}
          icon={<Icon active={active === id} />}
          active={active === id}
        />
      ))}
    </div>
  );
};

export default LeftSide;
