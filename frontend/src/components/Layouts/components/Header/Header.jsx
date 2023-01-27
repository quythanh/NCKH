import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import Menu from '~/components/Menu';
import { useState } from 'react';

const cx = classNames.bind(styles);

const LIST_MENU_ITEMS = [
    {
        title: 'Dashboard',
        page: '/',
    },
    {
        title: 'Theo dõi chi tiêu',
        page: '/follow',
    },
    {
        title: 'Biểu đồ chi tiêu',
        page: '/graph',
    },
];

const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('CurUser')) || {});

    const checkUser = () => user.hasOwnProperty('id') && user.hasOwnProperty('username');

    const SignOut = () => {
        setUser({});
        localStorage.setItem('CurUser', JSON.stringify({}));
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('shopName')}>Trang chủ</div>

                <Menu items={LIST_MENU_ITEMS} />

                {/* user || login */}
                {checkUser() ? (
                    <Button
                        variant="outlined"
                        size="small"
                        className={cx('btn', 'round')}
                        onClick={SignOut}
                    >
                        Đăng xuất
                    </Button>
                ) : (
                   <Link to="/sign-in">
                        <Button
                            variant="outlined"
                            size="small"
                            className={cx('btn', 'round')}
                        >
                            Đăng nhập
                        </Button>
                   </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
