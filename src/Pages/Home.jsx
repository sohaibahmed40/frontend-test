import { useEffect, useState } from 'react';
import { LeftSide, Navbar, RightSide } from '../components';

const Home = () => {
  const [active, setActive] = useState('Dashboard');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <div className="mb-[75px]">
        <Navbar active={active} />
      </div>

      <div className="flex justify-between items-center">
        <LeftSide active={active} setActive={setActive} isMobile={isMobile} />

        <RightSide active={active} isMobile={isMobile} />
      </div>
    </>
  );
};

export default Home;
