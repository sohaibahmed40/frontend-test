import Container from '../global/Container';
import Heading from '../global/Heading';
import BalanceGraph from '../graphs/BalanceGraph';

const Balance = () => {
  return (
    <div className="w-full md:w-[55%] flex flex-col flex-wrap md:flex-nowrap gap-[20px]">
      <Heading heading={'Balance History'} />

      <Container className={'min-w-[300px] h-[290px]'}>
        <BalanceGraph />
      </Container>
    </div>
  );
};

export default Balance;
