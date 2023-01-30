import classNames from 'classnames/bind';
import styles from './NoHeader.module.scss';
import Sidebar from '../components/Sidebar'

const cx = classNames.bind(styles);

const NoHeader = ({ children }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className={cx('wrapper', 'p-0 col-sm-12 col-md-9 offset-md-3 col-lg-10 offset-lg-2')}>
                    {children}
                </main>
            </div>
        </div>
    );
};

export default NoHeader;
