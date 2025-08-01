import { Box } from '@chakra-ui/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: 'ARtrack sensors events',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

const data = {
  labels,
  datasets: [
    {
      label: 'Включен',
      data: [12,54,76,34,65,76,34,12,54,76,34,65,76,34],
      backgroundColor: 'rgba(24, 0, 210, 1)',
    },
    {
      label: 'Выключен',
      data: [0,0,1,2,0,5,0,0,0,1,2,0,5,0],
      backgroundColor: 'rgba(165, 0, 0, 1)',
    },
  ],
};

const Diagram = () => {
    return (
        <Box height={'190px'}>
            <Bar options={options} data={data} />
        </Box>
    );
}

export default Diagram