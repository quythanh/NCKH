import classNames from 'classnames/bind';

// import { IDefaultProps } from '~/interfaces';

import styles from './Section.module.scss';

const cx = classNames.bind(styles);

interface ISection {
    className?: string;
    center?: boolean;
    children: string | JSX.Element | JSX.Element[] | undefined;
}

const Section: React.FC<ISection> = ({ children = undefined, center = false, className = '', ...passProps }) => {
    const classes: string = cx('wrapper', {
        [className]: className,
        center,
    });

    return (
        <div className={classes} {...passProps}>
            {children}
        </div>
    );
};

export default Section;
