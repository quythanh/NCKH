import classNames from 'classnames/bind';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const Header = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('CurUser')) || {});

    const checkUser = () => user.hasOwnProperty('id') && user.hasOwnProperty('username');

    const SignOut = () => {
        setUser({});
        localStorage.setItem('CurUser', JSON.stringify({}));
    };

    return (
        <header className={cx('wrapper', 'd-flex')}>
            <div className={cx('inner', 'flex-center justify-content-between h-100 mx-auto')}>
                <div className={cx('alert')}></div>

                {/* user || login */}
                {checkUser() ? (
                    <Button variant="outlined" size="small" className={cx('btn', 'rounded-pill')} onClick={SignOut}>
                        Sign out
                    </Button>
                ) : (
                    <Link to="/sign-in">
                        <Button variant="outlined" size="small" className={cx('btn', 'rounded-pill')}>
                            Sign in
                        </Button>
                    </Link>
                )}
            </div>
        </header>
    );
};

export default Header;
