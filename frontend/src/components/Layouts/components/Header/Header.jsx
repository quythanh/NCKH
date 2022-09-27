import classNames from 'classnames/bind';

import styles from './Header.module.scss';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

const LIST_MENU_ITEMS = [
    {
        title: 'Đặt mục tiêu',
        page: '/',
    },
    {
        title: 'Theo dõi chi tiêu',
        page: '/follow',
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
                    <Button outline rounded onClick={SignOut}>
                        Đăng xuất
                    </Button>
                ) : (
                    <Button to="/sign-in" outline rounded>
                        Đăng nhập
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
