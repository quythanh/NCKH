import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

const cx = classNames.bind(styles);

const SignIn = () => {
    return (
        <div className="flex-center flex-column w-100 vh-100">
            <form
                action="/api/users/auth"
                method="POST"
                className={cx('form', 'card card--no-styled fs-3 rounded-4 overflow-hidden')}
            >
                <div className={cx('form-header', 'card-header w-100 rounded-4 text-center')}>Truy cập tài khoản</div>
                <div className={cx('form-body', 'card-body d-flex flex-column')}>
                    <TextField
                        id="username"
                        label="Tên đăng nhập"
                        type="text"
                        variant="outlined"
                        className="mb-4"
                        size="large"
                    />
                    <TextField id="password" label="Mật khẩu" type="password" variant="outlined" size="large" />
                    <FormControlLabel control={<Checkbox size="large" />} label="Ghi nhớ mật khẩu trong 30 ngày" />
                </div>
                <div className="card-footer mx-auto pb-4">
                    <Button type="submit" variant="contained" className="fs-5 text-capitalize rounded-pill">
                        Đăng nhập
                    </Button>
                </div>
            </form>
            <div className="d-flex">
                
            </div>
        </div>
    );
};

export default SignIn;
