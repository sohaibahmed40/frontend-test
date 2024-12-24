import { CardCircle, Chip_Black, Chip_White } from '../../assets/icons';

const CreditCards = ({ dark }) => {
  return (
    <div
      className={`${dark ? 'bg-dark-gradient' : 'bg-white'} rounded-[25px] min-w-[312px] md:min-w-[355px] h-[235px] py-[24px] flex flex-col gap-8`}
    >
      <div className="flex items-center justify-between px-[26px]">
        <div className="flex flex-col gap-[2px]">
          <span className={`${dark ? 'text-white' : 'text-secondary'} text-xs`}>
            Balance
          </span>

          <span
            className={`${dark ? 'text-white' : 'text-primary'} font-semibold text-xl`}
          >
            $5,756
          </span>
        </div>

        <img src={dark ? Chip_White : Chip_Black} alt="Chip" />
      </div>

      <div className="flex items-center gap-[60px] px-[26px]">
        <div className="flex flex-col gap-[2px]">
          <span className={`${dark ? 'text-white' : 'text-secondary'} text-xs`}>
            CARD HOLDER
          </span>

          <span
            className={`${dark ? 'text-white' : 'text-primary'} font-semibold text-[15px]`}
          >
            Eddy Cusuma
          </span>
        </div>

        <div className="flex flex-col gap-[2px]">
          <span className={`${dark ? 'text-white' : 'text-secondary'} text-xs`}>
            VALID THRU
          </span>

          <span
            className={`${dark ? 'text-white' : 'text-primary'} font-semibold text-[15px]`}
          >
            12/22
          </span>
        </div>
      </div>

      <div
        className={`${dark ? 'bg-white-gradient' : 'border-t border-[#DFEAF2]'} flex justify-between items-center py-5 px-[26px]`}
      >
        <h1
          className={`${dark ? 'text-white' : 'text-primary'} text-[22px] font-semibold`}
        >
          3778 **** **** 1234
        </h1>

        <img src={CardCircle} alt="Circle" />
      </div>
    </div>
  );
};

export default CreditCards;
