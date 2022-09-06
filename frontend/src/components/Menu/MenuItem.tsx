import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import { IMenuItem } from '~/interfaces';

import Button from '~/components/Button';

const cx = classNames.bind(styles);

const MenuItem: React.FC<{ data: IMenuItem; onClick?: () => void }> = ({ data, ...passProps }) => {
    return (
        <Button className={cx('menu-item')} to={data.page} {...passProps}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
