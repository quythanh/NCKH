import classNames from 'classnames/bind';

import { ITableData } from '~/interfaces';

import styles from './Follow.module.scss';
import Table from '~/components/Table';

const cx = classNames.bind(styles);

const TIME_TABLE: ITableData = {
    heading: {
        color: '#38b6ff',
        data: ['Hoạt động', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ nhật'],
    },
    data: [
        ['Ăn sáng', '', '', '', '', '', '', ''],
        ['Ăn trưa', '', '', '', '', '', '', ''],
        ['Ăn tối', '', '', '', '', '', '', ''],
    ],
};

const Follow: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <Table rawData={TIME_TABLE} />
        </div>
    );
};

export default Follow;
