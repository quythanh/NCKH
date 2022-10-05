import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

const DAILY_TABLE = {
    heading: {
        color: '#90e9ff',
        data: ['Bảng sinh hoạt'],
    },
    data: [],
};

const INVESTMENT_TABLE = {
    heading: {
        color: '#ffe990',
        data: ['Bảng đầu tư'],
    },
    data: [],
};

const MANDATORY_TABLE = {
    heading: {
        color: '#ff5a5a',
        data: ['Bảng bắt buộc'],
    },
    data: [],
};

const Home = () => {
    return (
        <div className={cx('wrapper')}>
            <Table template={DAILY_TABLE} srcData="tables/daily/" />
            <Table template={INVESTMENT_TABLE} srcData="tables/investment/" />
            <Table template={MANDATORY_TABLE} srcData="tables/mandatory/" />
        </div>
    );
};

export default Home;
