import classNames from 'classnames/bind';
import { Link, LinkProps } from 'react-router-dom';

// import { IDefaultProps } from '~/interfaces';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);

// interface IButton extends IDefaultProps {
//     to?: string;
//     href?: string;
//     leftIcon?: string | React.FC | JSX.Element | undefined;
//     rightIcon?: string | React.FC | JSX.Element | undefined;
//     outline?: boolean;
//     rounded?: boolean;
//     noHover?: boolean;
//     large?: boolean;
// }

interface IAnchor extends React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<HTMLAnchorElement>> {}

const Button = ({
    to = '',
    href = '',
    onClick = () => {},
    className = '',
    leftIcon = undefined,
    rightIcon = undefined,
    outline = false,
    rounded = false,
    noHover = false,
    large = false,
    children = '',
    ...passProps
}) => {
    let Component: string | IAnchor = 'button';

    const classes: string = cx('wrapper', {
        [className]: className,
        outline,
        rounded,
        large,
        noHover,
    });

    const props: any = {
        onClick,
        ...passProps,
    };

    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }

    return (
        <Component className={classes} {...props}>
            {leftIcon}
            <span>{children}</span>
            {rightIcon}
        </Component>
    );
};

export default Button;
