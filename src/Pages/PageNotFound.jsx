import { useNavigate } from 'react-router-dom';
import Button from '../components/global/Button';

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center items-center flex-col gap-5 h-[calc(100vh-75px)]">
      <h1 className="text-2xl font-bold">Page Not Found</h1>

      <Button title={'Home'} onClick={() => navigate('/')} />
    </div>
  );
};

export default PageNotFound;
