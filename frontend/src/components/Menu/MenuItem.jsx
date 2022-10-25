import Button from '~/components/Button';

const MenuItem = ({ data, ...passProps }) => {
    return (
        <Button maxWidth to={data.page} {...passProps}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
