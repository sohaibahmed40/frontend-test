import Container from '../global/Container';
import Heading from '../global/Heading';
import BarGraph from '../graphs/Bargraph';

const Activity = () => {
  return (
    <div className="w-full md:w-[65%] flex flex-col gap-[20px]">
      <Heading heading={'Weekly Activity'} />

      <Container className={'min-w-[300px] md:h-[322px]'}>
        <BarGraph />
      </Container>
    </div>
  );
};

export default Activity;
