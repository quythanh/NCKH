import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarController, // bar chart
    BarElement,
    CategoryScale,
    LinearScale,
    DoughnutController, // doughnut chart
    ArcElement,
} from 'chart.js';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import Section from '~/components/Section';

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement);

const chartData = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: 'Chi tiết chi tiêu',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderWidth: 1,
        },
    ],
};

const chartOptions = {
    scales: {
        myScale: {
            position: 'right',
        },
    },
};

const Graph = () => {
    const [money] = useState(1000000);
    const [chartType, setChartType] = useState('doughnut');

    return (
        <Section className="flex-column g-4" center>
            <div className="flex-center justify-content-around">
                <TextField
                    label="Số tiền còn lại"
                    defaultValue={money}
                    InputProps={{
                        readOnly: true,
                    }}
                    variant="standard"
                />

                <div className="date">Biểu đồ chi tiêu từ</div>
            </div>
            <div className="d-flex g-4">
                <div className="flex-center flex-column g-4" style={{ minWidth: '50px' }}>
                    <IconButton onClick={() => setChartType('bar')}>
                        <i style={{ fontSize: '28px' }} className="fa-duotone fa-chart-simple"></i>
                    </IconButton>
                    <IconButton onClick={() => setChartType('doughnut')}>
                        <i style={{ fontSize: '28px' }} className="fa-duotone fa-chart-pie"></i>
                    </IconButton>
                </div>
                <div style={{ width: chartType === 'doughnut' ? 350 : 500 }}>
                    <Chart type={chartType} data={chartData} options={chartType === 'bar' ? chartOptions : {}} />
                </div>
            </div>
        </Section>
    );
};

export default Graph;
