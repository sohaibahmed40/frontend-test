import { useState } from 'react';
import {
  Alert,
  Hamburger,
  Logo,
  Nav_Settings,
  Search,
  User,
} from '../../assets/icons';

const Navbar = ({ active }) => {
  const [search, setSearch] = useState('');

  return (
    <div className="bg-white min-h-[101px] top-0 fixed w-full flex items-center z-20">
      {/* Mobile Navbar */}

      <div className="md:hidden flex items-center flex-col gap-5 px-[25px] w-full py-5">
        <div className="flex justify-between items-center w-full">
          <img src={Hamburger} alt="Hamburger" className="cursor-pointer" />

          <h1 className="text-primary font-Inter font-semibold text-[20px]">
            {active === 'Setting' ? 'Settings' : 'Overview'}
          </h1>

          <div className="min-h-[35px] min-w-[35px] rounded-full">
            <img
              src={User}
              alt="User"
              className="h-full w-full rounded-full cursor-pointer"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-[40px] bg-[#F5F7FA] w-full px-[25px] py-4">
          <img src={Search} alt="Search bar" className="cursor-pointer" />

          <input
            type="text"
            value={search}
            placeholder="Search for something"
            onChange={(e) => setSearch(e.target.value)}
            className="border-none outline-none bg-transparent"
          />
        </div>
      </div>

      <div className="hidden min-h-[101px] min-w-[251px] md:flex items-center justify-center gap-[10px] cursor-pointer h-full border-r border-[#E6EFF5]">
        <img src={Logo} alt="Logo" />

        <h1 className="text-primary font-Inter text-[25px] font-extrabold select-none">
          Soar Task
        </h1>
      </div>

      <div className="hidden md:flex items-center justify-between w-full px-10">
        <div>
          <h1 className="text-primary font-Inter font-semibold text-[28px]">
            {active === 'Setting' ? 'Setting' : 'Overview'}
          </h1>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="flex items-center gap-4 rounded-[40px] bg-[#F5F7FA] w-full px-[25px] py-4 max-w-[255px]">
            <img src={Search} alt="Search bar" className="cursor-pointer" />

            <input
              type="text"
              value={search}
              placeholder="Search for something"
              onChange={(e) => setSearch(e.target.value)}
              className="border-none outline-none bg-transparent"
            />
          </div>

          <img src={Nav_Settings} alt="Settings" className="cursor-pointer" />

          <img src={Alert} alt="Alter" className="cursor-pointer" />

          <div className="min-h-[60px] min-w-[60px] rounded-full">
            <img
              src={User}
              alt="User"
              className="h-full w-full rounded-full cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
