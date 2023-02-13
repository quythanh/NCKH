import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import Table from '~/components/Table';
import Section from '~/components/Section';

const cx = classNames.bind(styles);

const DAILY_TABLE = {
    heading: {
        bgColor: '#e0f2fe',
        borderColor: '#bae6fd',
        color: '#0369a1',
        data: ['Bảng sinh hoạt'],
    },
    data: [],
};

const INVESTMENT_TABLE = {
    heading: {
        bgColor: '#fef3c7',
        borderColor: '#fde68a',
        color: '#b45309',
        data: ['Bảng tiết kiệm'],
    },
    data: [],
};

const MANDATORY_TABLE = {
    heading: {
        bgColor: '#ffe4e6',
        borderColor: '#fecdd3',
        color: '#be123c',
        data: ['Bảng bắt buộc'],
    },
    data: [],
};

const Home = () => {
    return (
        <Section className={cx('wrapper')} center>
            <Table template={DAILY_TABLE} srcData="tables/daily/" />
            <Table template={INVESTMENT_TABLE} srcData="tables/investment/" />
            <Table template={MANDATORY_TABLE} srcData="tables/mandatory/" />
        </Section>
    );
};

export default Home;
