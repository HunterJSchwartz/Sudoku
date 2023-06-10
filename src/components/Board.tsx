import { useEffect, useState } from "react"
import styles from '@/components/Board.module.css'
import Tile from "@/components/Tile";

export default function Board() {
    const BOARD_SIZE = 9;
    const EMPTY_BOARD = Array.from({ length: BOARD_SIZE }, () => Array.from({ length: BOARD_SIZE }, () => ""));

    const [board, setBoard] = useState(EMPTY_BOARD);
    const [tiles, setTiles] = useState([[]]);

    useEffect(() => {
        InitializeBoard();
    }, []);

    const tileChange = (x: any, y: any, tileValue: any) => {
        let items: any = [...board];
        items[x][y] = tileValue;
        setBoard(items);
    }

    const tileClick = (e: any) => {
    }

    function InitializeBoard() {
        let arr: any = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            arr[i] = [];
            for (let j = 0; j < BOARD_SIZE; j++) {
                arr[i][j] = "";
            }
        }
        setBoard(arr);
    }

    return (<div className={styles.board}>{board.map(function (subarray, i) {
        return subarray.map(function (value, j) {
            return <Tile key={`${i}, ${j}`} x={i} y={j} tileValue={board[i][j]} updatable={true} onClick={tileClick} onChange={tileChange} valid={true}></Tile>;
        })
    })}</div>);
}