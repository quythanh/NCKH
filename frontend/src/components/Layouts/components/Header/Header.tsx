import classNames from 'classnames/bind';

import { IMenuItem } from '~/interfaces';

import styles from './Header.module.scss';
import Menu from '~/components/Menu';
import Button from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);

const LIST_MENU_ITEMS: IMenuItem[] = [
    {
        title: 'Đặt mục tiêu',
        page: '/',
    },
    {
        title: 'Theo dõi chi tiêu',
        page: '/follow',
    },
];

const Header: React.FC = () => {
    const [user, setUser] = useState<boolean>(false);

    const handleSetUser: () => void = () => {
        setUser((prev) => !prev);
    };

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('shopName')}>Trang chủ</div>

                <Menu items={LIST_MENU_ITEMS} />

                {/* user || login */}
                {user ? (
                    <Button outline rounded onClick={handleSetUser}>
                        Sign out
                    </Button>
                ) : (
                    <Button outline rounded onClick={handleSetUser}>
                        Sign in
                    </Button>
                )}
            </div>
        </header>
    );
};

export default Header;
