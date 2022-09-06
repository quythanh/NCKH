export interface ITableData {
    heading: {
        color: string;
        data: string[];
    };
    data: string[][];
}

export interface IRoute {
    path: string;
    component: React.FC;
    layout?: React.FC;
}

export interface IDefaultProps {
    children?: any;
    id?: string;
    className?: string;
}

export interface IMenuItem {
    title: string;
    page: string;
}
