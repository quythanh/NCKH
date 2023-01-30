import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

const cx = classNames.bind(styles);

const SignIn = () => {
    return (
        <div className="flex-center w-100 vh-100">
            {/* <Section center>
                <div className={cx('card')}>
                    <div className={cx('card-header')}>Đăng nhập</div>
                    <div className={cx('card-body')}>
                        <form action="/api/users/auth" method="POST">
                            <Input
                                type="text"
                                placeholder="Tên đăng nhập hoặc email"
                                id="username"
                                name="username"
                                className={cx('input')}
                                border
                                maxWidth
                            />
                            <Input
                                type="password"
                                placeholder="Mật khẩu"
                                id="password"
                                name="password"
                                className={cx('input')}
                                border
                                maxWidth
                            />
                            <Button
                                maxWidth
                                style={{
                                    backgroundColor: '#1877f2',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    marginTop: '5px',
                                }}
                            >
                                Đăng nhập
                            </Button>
                            
                            <Button center noHover href="#" className={cx('forget-password')}>
                                Quên mật khẩu?
                            </Button>
                        </form>
                    </div>
                    <div className={cx('card-footer')}>
                        <Button
                            center
                            to="/sign-up"
                            style={{ backgroundColor: '#42b72a', color: '#fff', fontWeight: 'bold' }}
                        >
                            Tạo tài khoản mới
                        </Button>
                    </div>
                </div>
            </Section> */}
            <form action="/api/users/auth" method="POST" className="card card--no-border fs-3">
                <div className="card-header mx-auto">Access Your Account</div>
                <div className="card-body">
                    <TextField id="email" label="Email" type="email" variant="outlined" fullWidth />
                    <TextField id="password" label="Password" type="password" variant="outlined" fullWidth />
                </div>
                <div className="card-footer mx-auto">
                    <Button variant="contained" className='rounded-pill'>Sign In</Button>
                </div>
            </form>
        </div>
    );
};

export default SignIn;
