import classNames from 'classnames/bind';

import { IDefaultProps } from '~/interfaces';

import styles from './Popper.module.scss';

const cx = classNames.bind(styles);

const Wrapper: React.FC<IDefaultProps> = ({ children, className = '' }) => {
    return <div className={cx('wrapper', className)}>{children}</div>;
};

export default Wrapper;
