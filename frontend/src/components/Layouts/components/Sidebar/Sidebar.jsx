import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import Nav from '../Nav';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return <aside className={cx('wrapper', 'px-0 col-12 col-md-3 col-lg-2')}>
        <div className={cx("action")}>
            <Nav />
        </div>
    </aside>
};

export default Sidebar;
