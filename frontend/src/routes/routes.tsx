import { IRoute } from '~/interfaces';

// Layouts
// import { HeaderOnly } from '~/components/Layouts';
// import { DefaultLayout } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';

const publicRoutes: IRoute[] = [
    {
        path: '/',
        component: Home,
    },
    { path: '/follow', component: Follow },
    // { path: '/upload', component: Upload, layout: HeaderOnly },
];

const privateRoutes: IRoute[] = [];

export { publicRoutes, privateRoutes };
