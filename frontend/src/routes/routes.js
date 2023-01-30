// Layouts
import { NoHeader } from '~/components/Layouts';

// Pages
import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Graph from '~/pages/Graph';
import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';

const publicRoutes = [
    {
        path: '/',
        component: Home,
        title: "Trang chủ",
        icon: DashboardIcon
    },
    {
        path: '/follow',
        component: Follow,
        title: "Theo dõi chi tiêu",
        icon: TableChartIcon
    },
    {
        path: '/graph',
        component: Graph,
        title: "Biểu đồ chi tiêu",
        icon: BarChartIcon
    },
    {
        path: '/sign-in',
        component: SignIn,
        layout: NoHeader,
    },
    {
        path: '/sign-up',
        component: SignUp,
        layout: NoHeader,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
