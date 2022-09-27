import classNames from 'classnames/bind';

import styles from './SignIn.module.scss';
import Section from '~/components/Section';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const SignIn = () => {
    return (
        <div className={cx('wrapper')}>
            <Section center>
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
                            {/* Sử lý đăng nhập (Kiểm tra tài khoản) */}
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
            </Section>
        </div>
    );
};

export default SignIn;
