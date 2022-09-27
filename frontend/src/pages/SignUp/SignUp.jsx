import classNames from 'classnames/bind';

import styles from './SignUp.module.scss';
import Section from '~/components/Section';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const SignUp = () => {
    return (
        <div className={cx('wrapper')}>
            <Section center>
                <div className={cx('card')}>
                    <div className={cx('card-header')}>Đăng ký</div>
                    <form action="api/users/register" method="POST">
                        <div className={cx('card-body')}>
                            <Input
                                type="text"
                                placeholder="Tên đăng nhập"
                                id="username"
                                name="username"
                                className={cx('input')}
                                border
                                maxWidth
                                required
                            />
                            <Input
                                type="email"
                                placeholder="Email"
                                id="email"
                                name="email"
                                className={cx('input')}
                                border
                                maxWidth
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Mật khẩu"
                                id="password"
                                name="password"
                                className={cx('input')}
                                border
                                maxWidth
                                required
                            />
                            <Input
                                type="password"
                                placeholder="Nhập lại mật khẩu"
                                id="password2"
                                name="password2"
                                className={cx('input')}
                                border
                                maxWidth
                                required
                            />
                        </div>
                        <div className={cx('card-footer')}>
                            <Button style={{ backgroundColor: '#42b72a', color: '#fff', fontWeight: 'bold' }}>
                                Đăng ký
                            </Button>
                            <Button
                                to="/sign-in"
                                style={{ backgroundColor: '#1877f2', color: '#fff', fontWeight: 'bold' }}
                            >
                                Đăng nhập
                            </Button>
                        </div>
                    </form>
                </div>
            </Section>
        </div>
    );
};

export default SignUp;
