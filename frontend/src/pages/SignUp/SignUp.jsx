import classNames from 'classnames/bind';
import styles from './SignUp.module.scss';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const SignUp = () => {
    return (
        <div className="flex-center flex-column w-100 vh-100">
            <form
                action="/api/users/auth"
                method="POST"
                className={cx('form', 'card card--no-styled fs-3 rounded-4 overflow-hidden')}
            >
                <div className={cx('form-header', 'card-header w-100 rounded-4 text-center px-5 py-4')}>
                    Tạo tài khoản mới
                </div>
                <div className={cx('form-body', 'card-body d-flex flex-column px-5')}>
                    <TextField id="email" label="Email" type="email" variant="outlined" className="mb-4" size="large" />
                    <TextField
                        id="password"
                        label="Mật khẩu"
                        type="password"
                        variant="outlined"
                        className="mb-4"
                        size="large"
                    />
                    <TextField
                        id="password-2"
                        label="Nhập lại mật khẩu"
                        type="password"
                        variant="outlined"
                        size="large"
                    />
                </div>
                <div className="card-footer mx-auto pb-4">
                    <Button type="submit" variant="contained" className="fs-5 text-capitalize rounded-pill">
                        Tạo tài khoản
                    </Button>
                </div>
            </form>
            <div className="d-flex justify-content-between mt-4 px-3" style={{ width: '300px' }}>
                <Link to="/forgot-password">Quên mật khẩu?</Link>
                <Link to="/sign-in">Đăng nhập?</Link>
            </div>
        </div>
    );
};

export default SignUp;
