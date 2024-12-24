import { useState } from 'react';
import { USERS } from '../../mock';
import Container from '../global/Container';
import Heading from '../global/Heading';
import User from '../global/User';
import { Arrow, Send } from '../../assets/icons';

const Transfer = () => {
  const [showAllUsers, setShowAllUsers] = useState(false);
  const [amount, setAmount] = useState('');

  const handleNextClick = () => {
    setShowAllUsers(true);
  };

  return (
    <div className="w-full md:w-[45%] flex flex-wrap flex-col gap-[20px]">
      <Heading heading={'Quick Transfer'} />

      <Container className={'min-w-[300px] min-h-[290px]'}>
        <div className="flex flex-col gap-[40px] justify-center">
          <div className="flex items-center gap-2 flex-wrap relative">
            {USERS.slice(0, showAllUsers ? USERS.length : 3).map(
              (user, index) => (
                <User
                  key={index}
                  image={user.image}
                  name={user.name}
                  title={user.title}
                  admin={user.admin}
                />
              )
            )}

            {!showAllUsers && (
              <div className="absolute right-[-40px] top-[50%]">
                <img
                  src={Arrow}
                  alt="Right Arrow"
                  className="cursor-pointer"
                  onClick={handleNextClick}
                />
              </div>
            )}
          </div>

          <div className="flex items-center justify-between flex-wrap md:flex-nowrap gap-7">
            <h1 className="text-secondary text-base font-medium">
              Write Amount
            </h1>

            <div className="bg-[#EDF1F7] rounded-[50px] flex justify-between">
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="border-none outline-none bg-transparent text-secondary text-base px-3 max-w-[120px]"
              />

              <div className="flex items-center justify-center gap-3 w-[125px] h-[50px] rounded-[50px] bg-black cursor-pointer">
                <h1 className="text-white font-medium text-base">Send</h1>

                <img src={Send} alt="Send" />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Transfer;
