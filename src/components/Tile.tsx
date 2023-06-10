import styles from '@/components/Tile.module.css'
import { type } from 'os';
import { useEffect } from 'react';

type TileProps = {
    x: number;
    y: number;
    tileValue: string;
    updatable: boolean;
    onClick: (e: any) => void;
    onChange: (x: any, y: any, tileValue: any) => void;
    valid: boolean;
}

export default function Tile({ x, y, tileValue, updatable, onClick, onChange, valid }: TileProps) {

    function HandleChange(e: any) {
        if (/[1-9]/.test(e.target.value) || e.target.value === "") {
            onChange(x, y, e.target.value);
        }
    }

    return (
        <div className={styles.tile}>
            <input type='text' maxLength={1} onChange={HandleChange} onClick={onClick} className={styles.input} value={tileValue} />
        </div>
    );
}