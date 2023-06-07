import { useEffect, useState } from "react"
import styles from '@/components/Board.module.css'
import Tile from "@/components/Tile";

export default function Board() {
    const [board, setBoard] = useState([[]]);
    const BOARD_SIZE = 9;

    useEffect(() => {
        InitializeBoard();
    }, []);

    function InitializeBoard() {
        let arr: any = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            arr[i] = [];
            for (let j = 0; j < BOARD_SIZE; j++) {
                arr[i][j] = <Tile key={`${i}, ${j}`}></Tile>;
            }
        }
        console.log(arr);
        setBoard(arr);
    }

    return (<div className={styles.board}>{board}</div>);
}