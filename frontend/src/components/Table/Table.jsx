import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

import Button from '@mui/material/Button';

import styles from './Table.module.scss';
import Input from '~/components/Input';
import request from '~/utils/request';

const cx = classNames.bind(styles);

const Table = ({ template, srcData = '' }) => {
    const [data, setData] = useState(template.data);
    const [heading] = useState(template.heading.data);
    const [theme] = useState(
        createTheme({
            palette: {
                primary: {
                    main: template.heading.color,
                },
            },
        }),
    );

    const AppendData = () => {
        setData((prev) => {
            if (prev.length === 0) return heading.length === 1 ? [['', '']] : [[...heading.map(() => '')]];
            return [...prev, [...prev[0].map(() => '')]];
        });
    };

    const HandleUpdateData = (x, y, newValue) => {
        setData((prev) => {
            prev[x][y] = newValue;
            return prev;
        });
    };

    useEffect(() => {
        const fetchData = async (userID) => {
            const req = await request.get(srcData + userID);
            setData(req.data['data']);
        };
        if (srcData !== '') {
            let curUser = JSON.parse(localStorage.getItem('CurUser') || '{}');
            let userID = curUser.id || '0';
            fetchData(userID);
        }
    }, [srcData]);

    return (
        <div className={cx('wrapper')}>
            <table
                className={cx('table')}
                style={{
                    '--table-border-color': template.heading.borderColor || '#ccc',
                    '--table-background-color': template.heading.bgColor || 'inherit',
                    '--table-text-color': template.heading.color || 'inherit',
                }}
            >
                {heading && (
                    <thead className={cx('table__header')}>
                        <tr>
                            {heading.map((h, index) => (
                                <th
                                    key={index}
                                    colSpan={data.length === 0 ? 1 : data[0].length / heading.length}
                                    className="text-center"
                                >
                                    {h}
                                </th>
                            ))}
                        </tr>
                    </thead>
                )}
                <tbody className={cx('table__body')}>
                    {data.map((row, indexRow) => (
                        <tr key={indexRow}>
                            <th>
                                <Input
                                    autoWidth
                                    className={cx('input')}
                                    defaultValue={row[0]}
                                    onUpdate={(el) => HandleUpdateData(indexRow, 0, el.value)}
                                />
                            </th>
                            {row.slice(1).map((val, indexCol) => (
                                <td key={indexCol}>
                                    <Input
                                        autoWidth
                                        min="0"
                                        type="number"
                                        className={cx('input')}
                                        defaultValue={val}
                                        onUpdate={(el) => HandleUpdateData(indexRow, indexCol + 1, el.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot className={cx('table__footer')}>
                    <tr>
                        <td colSpan={data.length === 0 ? heading.length : data[0].length}>
                            <ThemeProvider theme={theme}>
                                <Button onClick={AppendData} fullWidth>
                                    &#8230;
                                </Button>
                            </ThemeProvider>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;
