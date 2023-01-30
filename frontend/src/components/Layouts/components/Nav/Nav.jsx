import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useLocation } from 'react-router-dom';

import styles from './Nav.module.scss';
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
        <nav className={cx('wrapper')}>
            <ul className="nav--no-borders flex-column nav">
                {publicRoutes.map((route, index) => route.title && <NavItem key={index} route={route} />)}
            </ul>
        </nav>
    );
};

export default Nav;
