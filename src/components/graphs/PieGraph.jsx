import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieGraph = () => {
  const data = {
    labels: ['Entertainment', 'Bill Expense', 'Others', 'Investment'],
    datasets: [
      {
        data: [30, 15, 35, 20],
        backgroundColor: ['#343C6A', '#FC7900', '#232323', '#396AFF'],
        borderColor: '#ffffff',
        borderWidth: 2,
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
      datalabels: {
        color: 'white',
        font: {
          weight: 'bold',
          size: 14,
        },
        // formatter: (value, context) => {
        formatter: (value) => {
          //   const label = context.chart.data.labels[context.dataIndex];
          //   return `${label}: ${value}%`;
          return `${value}%`;
        },
        anchor: 'center',
        align: 'center',
      },
    },
  };

  return <Pie data={data} options={options} />;
};

export default PieGraph;
