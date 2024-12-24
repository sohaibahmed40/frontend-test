import { useState } from 'react';
import { Container, Profile } from '../components/';
import { ProfileBottom } from '../assets/icons';
import { TABS } from '../mock';

const Settings = () => {
  const [active, setActive] = useState('Profile');

  const handleChange = (tab) => {
    setActive(tab);
  };

  return (
    <Container>
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-[74px] overflow-x-auto">
          {TABS?.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center min-w-[100px] min-h-[40px]"
              >
                <h1
                  className={`${active === item?.tab ? 'text-black' : ''} text-secondary text-base font-medium cursor-pointer text-center`}
                  onClick={() => handleChange(item?.tab)}
                >
                  {item?.title}
                </h1>

                {active === item?.tab && (
                  <img src={ProfileBottom} alt="Border" />
                )}
              </div>
            );
          })}
        </div>

        {active === 'Profile' ? (
          <Profile />
        ) : active === 'Preferences' ? (
          'Preferences form'
        ) : active === 'Security' ? (
          'Security'
        ) : (
          ''
        )}
      </div>
    </Container>
  );
};

export default Settings;
