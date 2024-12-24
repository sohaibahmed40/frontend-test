import Container from '../global/Container';
import Heading from '../global/Heading';
import PieGraph from '../graphs/PieGraph';

const Statistics = () => {
  return (
    <div className="w-full md:w-[35%] flex flex-col gap-[20px]">
      <Heading heading={'Expense Statistics'} />

      <Container
        className={'min-w-[300px] h-[322px] flex items-center justify-center'}
      >
        <PieGraph />
      </Container>
    </div>
  );
};

export default Statistics;
