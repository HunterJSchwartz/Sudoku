import styles from '@/components/Tile.module.css'

export default function Tile() {

    function HandleChange(e: any) {
        if (!/[1-9]/.test(e.target.value)) {
            e.target.value = "";
        }
    }

    return (
        <div className={styles.tile}>
            <input type='text' maxLength={1} pattern='[0-9]' onChange={HandleChange} className={styles.input} />
        </div>
    );
}