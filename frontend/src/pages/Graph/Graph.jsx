import { useState } from 'react';
import { Chart } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    BarController,
    BarElement,
    CategoryScale,
    LinearScale, // bar chart
    DoughnutController,
    ArcElement, // doughnut chart
} from 'chart.js';

import classNames from 'classnames/bind';

import styles from './Graph.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import Section from '~/components/Section';

ChartJS.register(BarController, BarElement, CategoryScale, LinearScale, DoughnutController, ArcElement);

const cx = classNames.bind(styles);

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
            position: 'right', // `axis` is determined by the position as `'y'`
        },
    },
};

const Graph = () => {
    const [money] = useState(1000000);
    const [chartType, setChartType] = useState('doughnut');

    return (
        <Section className="flex-column" center>
            <div className={cx('header')}>
                <Input label="Số tiền còn lại" defaultValue={money} disabled />
            </div>
            <div className={cx('body')}>
                <div className={cx('chart_type')}>
                    <Button onClick={() => setChartType('bar')}>
                        <i className="fa-duotone fa-chart-simple"></i>
                    </Button>
                    <Button onClick={() => setChartType('doughnut')}>
                        <i className="fa-duotone fa-chart-pie"></i>
                    </Button>
                </div>
                <div style={{ width: chartType === 'doughnut' ? 350 : 500 }}>
                    <Chart type={chartType} data={chartData} options={chartType === 'bar' ? chartOptions : {}} />
                </div>
            </div>
            <div className={cx('footer')}>Biểu đồ chi tiêu từ</div>
        </Section>
    );
};

export default Graph;
