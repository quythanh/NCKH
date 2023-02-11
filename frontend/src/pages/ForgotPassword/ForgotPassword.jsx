import classNames from 'classnames/bind';
import styles from './ForgotPassword.module.scss';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const ForgotPassword = () => {
    return (
        <div className="flex-center flex-column w-100 vh-100">
            <form
                action="/api/users/auth"
                method="POST"
                className={cx('form', 'card card--no-styled fs-3 rounded-4 overflow-hidden')}
            >
                <div className={cx('form-header', 'card-header w-100 rounded-4 text-center px-5 py-4')}>
                    Đặt lại mật khẩu
                </div>
                <div className={cx('form-body', 'card-body d-flex flex-column px-5')}>
                    <TextField
                        id="email"
                        label="Email"
                        type="email"
                        variant="outlined"
                        className={cx('form-text', 'mb-4')}
                        size="large"
                        helperText="Bạn sẽ nhận được email với liên kết đặt lại mật khẩu"
                    />
                </div>
                <div className="card-footer mx-auto pb-4">
                    <Button type="submit" variant="contained" className="fs-5 text-capitalize rounded-pill">
                        Đặt lại mật khẩu
                    </Button>
                </div>
            </form>
            <div className="flex-center mt-4 px-3" style={{ width: '300px' }}>
                <Link to="/sign-in">Quay lại đăng nhập</Link>
            </div>
        </div>
    );
};

export default ForgotPassword;
