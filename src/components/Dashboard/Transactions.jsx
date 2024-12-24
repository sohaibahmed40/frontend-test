import { Deposit, Dollar, Paypal } from '../../assets/icons';
import Container from '../global/Container';
import Heading from '../global/Heading';

const Transactions = () => {
  return (
    <div className="w-full md:w-[35%] flex flex-col flex-wrap gap-[20px]">
      <Heading heading={'Recent Transaction'} />

      <Container className={'min-w-[300px] min-h-[235px]'}>
        <div className="flex flex-col gap-[14px] w-full">
          <div className="flex items-center gap-[18px]">
            <img src={Deposit} alt="Deposit" />

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-medium text-[16px]">
                  Deposit from my Card
                </span>
                <span className="text-[15px] text-secondary">
                  28 January 2021
                </span>
              </div>

              <div>
                <span className="text-[16px] font-semibold text-[#FF4B4A]">
                  -$850
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[18px]">
            <img src={Paypal} alt="Deposit" />

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-medium text-[16px]">Deposit Paypal</span>
                <span className="text-[15px] text-secondary">
                  25 January 2021
                </span>
              </div>

              <div>
                <span className="text-[16px] font-semibold text-[#41D4A8]">
                  +$2,500
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[18px]">
            <img src={Dollar} alt="Deposit" />

            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col">
                <span className="font-medium text-[16px]">Jemi Wilson</span>
                <span className="text-[15px] text-secondary">
                  21 January 2021
                </span>
              </div>

              <div>
                <span className="text-[16px] font-semibold text-[#41D4A8]">
                  -$850
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Transactions;
