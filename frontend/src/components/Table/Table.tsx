import { useState } from 'react';
import classNames from 'classnames/bind';

import { ITableData } from '~/interfaces';

import styles from './Table.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

const Table: React.FC<{ rawData: ITableData }> = ({ rawData }) => {
    const [data, setData] = useState<string[][]>(rawData.data);
    const [heading, setHeading] = useState<string[]>(rawData.heading.data);

    const AppendData: () => void = () => {
        setData((prev) => [...prev, [...prev[0].map(() => '')]]);
    };

    const HandleUpdateData: (x: number, y: number, newValue: string) => void = (x, y, newValue) => {
        setData((prev) => {
            prev[x][y] = newValue;
            return prev;
        });
    };

    return (
        <div className={cx('wrapper')}>
            <table className={cx('table')}>
                {heading && (
                    <thead
                        className={cx('table__header')}
                        style={{ backgroundColor: rawData.heading.color || 'inherit' }}
                    >
                        <tr>
                            {heading.map((h, index) => (
                                <th key={index} colSpan={data[0].length / heading.length}>
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
                                    autoSize
                                    className={cx('input')}
                                    defaultValue={row[0]}
                                    onUpdate={(el: any) => HandleUpdateData(indexRow, 0, el.value)}
                                />
                            </th>
                            {row.slice(1).map((val, indexCol) => (
                                <td key={indexCol}>
                                    <Input
                                        autoSize
                                        min="0"
                                        type="number"
                                        className={cx('input')}
                                        defaultValue={val}
                                        onUpdate={(el: any) => HandleUpdateData(indexRow, indexCol + 1, el.value)}
                                    />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
                <tfoot className={cx('table__footer')}>
                    <tr>
                        <td colSpan={data[0].length} onClick={AppendData}>
                            <Button noHover style={{ width: '100%' }}>
                                &#8230;
                            </Button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default Table;
