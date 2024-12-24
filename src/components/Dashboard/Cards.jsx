import CreditCards from '../global/CreditCards';
import Heading from '../global/Heading';

const Cards = () => {
  return (
    <div className="w-full md:w-[65%] flex flex-col gap-[20px] flex-wrap">
      <div className="flex items-center justify-between">
        <Heading heading={'My Cards'} />

        <Heading heading={'See All'} className={'!text-[17px]'} />
      </div>

      <div className="flex items-center gap-3 md:gap-7 justify-between overflow-x-auto max-w-[320px] md:min-w-full overflow-y-hidden">
        <CreditCards dark={true} />

        <CreditCards dark={false} />
      </div>
    </div>
  );
};

export default Cards;
