import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import { publicRoutes } from '~/routes';

const cx = classNames.bind(styles);

const NavItem = ({ route }) => {
    const location = useLocation();
    return (
        <li className={cx('item')}>
            <Link to={route.path} className={cx('nav-link', location.pathname === route.path ? 'active' : '')}>
                <Button variant="text" startIcon={<route.icon />} size="large" className="text-capitalize">
                    {route.title}
                </Button>
            </Link>
        </li>
    );
};

const Nav = () => {
    return (
        <nav className={cx('nav')}>
            <ul className="nav--no-borders flex-column nav">
                {publicRoutes.map((route, index) => route.title && <NavItem key={index} route={route} />)}
            </ul>
        </nav>
    );
};

const Header = () => {
    const location = useLocation();

    return (
        <h2 className="flex-center py-4 border-bottom">
            <b>
                {publicRoutes
                    .map((route) => (location.pathname === route.path && route.title ? route.title : ''))
                    .join('')}
            </b>
        </h2>
    );
};

const Sidebar = () => {
    return (
        <aside className={cx('wrapper', 'px-0 col-12 col-md-3 col-lg-2')}>
            <Header />
            <Nav />
        </aside>
    );
};

export default Sidebar;
