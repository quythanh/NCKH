import classNames from 'classnames/bind';
import styles from './Default.module.scss';
import Header from '~/components/Layouts/components/Header';
import Sidebar from '../components/Sidebar'

const cx = classNames.bind(styles);

const Default = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className={cx('wrapper', 'p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2')}>
                    <Header />
                    <div className={cx("inner")}>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Default;
