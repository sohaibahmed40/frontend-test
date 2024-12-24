import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarGraph = () => {
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [12, 19, 3, 5, 2, 3, 10],
        borderRadius: 20,
        barThickness: 15,
        backgroundColor: '#232323',
      },
      {
        label: 'Dataset 2',
        data: [5, 8, 13, 10, 6, 4, 12],
        backgroundColor: '#396AFF',
        borderRadius: 30,
        barThickness: 15,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          beginAtZero: true,
        },
        categoryPercentage: 0.7,
        barPercentage: 0.9,
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(200, 200, 200, 0.5)',
        },
      },
    },
  };

  return (
    <Bar
      style={{ width: '100%', height: '100%' }}
      data={data}
      options={options}
    />
  );
};

export default BarGraph;
