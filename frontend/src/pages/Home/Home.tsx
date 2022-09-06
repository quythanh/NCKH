import classNames from 'classnames/bind';

import { ITableData } from '~/interfaces';

import styles from './Home.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

const DAILY_TABLE: ITableData = {
    heading: {
        color: '#38b6ff',
        data: ['Bảng sinh hoạt'],
    },
    data: [
        ['Ăn sáng', ''],
        ['Ăn trưa', ''],
        ['Ăn tối', ''],
    ],
};

const INVESTMENT_TABLE: ITableData = {
    heading: {
        color: '#ffc700',
        data: ['Bảng đầu tư'],
    },
    data: [['Mua xe', '']],
};

const OBLIGATORY_TABLE: ITableData = {
    heading: {
        color: '#ff5757',
        data: ['Bảng bắt buộc'],
    },
    data: [['Tiền thuê nhà', '']],
};

const Home: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Table rawData={DAILY_TABLE} />
            <Table rawData={INVESTMENT_TABLE} />
            <Table rawData={OBLIGATORY_TABLE} />
        </div>
    );
};

export default Home;
