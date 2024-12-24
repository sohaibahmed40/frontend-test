import {
  Activity,
  Balance,
  Cards,
  Statistics,
  Transactions,
  Transfer,
} from '../components';

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-7 flex-wrap md:flex-nowrap">
        <Cards />

        <Transactions />
      </div>

      <div className="flex flex-wrap md:flex-nowrap gap-6">
        <Activity />

        <Statistics />
      </div>

      <div className="flex justify-between gap-6 flex-wrap md:flex-nowrap">
        <Transfer />

        <Balance />
      </div>
    </div>
  );
};

export default Dashboard;
