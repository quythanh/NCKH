// Layouts
import { EmptyLayout } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const publicRoutes = [
    {
        path: '/',
        component: Home,
    },
    {
        path: '/follow',
        component: Follow,
    },
    {
        path: 'sign-in',
        component: SignIn,
        layout: EmptyLayout,
    },
    {
        path: 'sign-up',
        component: SignUp,
        layout: EmptyLayout,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
