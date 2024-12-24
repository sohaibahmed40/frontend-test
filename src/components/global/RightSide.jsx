import { Dashboard, Settings } from '../../Pages';

const RightSide = ({ active, isMobile }) => {
  return (
    <div
      className={`${isMobile ? 'mt-[103px] w-full h-[calc(100vh-181px)]' : 'mt-[26px] w-[calc(100%-250px)] h-[calc(100vh-101px)]'} overflow-y-auto px-10 py-6 bg-[#F5F7FA] border border-[#E6EFF5]`}
    >
      {active === 'Dashboard' ? (
        <Dashboard />
      ) : active === 'Setting' ? (
        <Settings />
      ) : (
        <h1 className="font-bold text-3xl">Soar Task</h1>
      )}
    </div>
  );
};

export default RightSide;
