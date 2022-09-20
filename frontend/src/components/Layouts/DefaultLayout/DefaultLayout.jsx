import classNames from 'classnames/bind';

import styles from './DefaultLayout.module.scss';
import Input from '~/components/Input';
import Header from '~/components/Layouts/components/Header';
import Section from '~/components/Section';

const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <div className={cx('inner')}>
                    <Section center>
                        <form className={cx('form')}>
                            <div>
                                <Input label="Thu nhập tháng" type="number" id="form__inp-income" min="0" underline />
                            </div>

                            <div>
                                <Input label="Thời gian thực hiện từ" type="date" id="form__inp-from" underline />
                                <Input label="đến" type="date" id="form__inp-to" underline />
                            </div>
                        </form>
                    </Section>

                    <Section center>{children}</Section>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
