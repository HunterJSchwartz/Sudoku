import { useEffect, useState } from "react"
import styles from '@/components/Board.module.css'
import Tile from "@/components/Tile";
import ValidSudoku from "@/scripts/SudokuChecker";

type TileType = {
    x: number;
    y: number;
    tileValue: string;
    updatable: boolean;
    valid: boolean;
}

export default function Board() {
    const BOARD_SIZE: number = 9;
    const EMPTY_BOARD = () => {
        let arr: TileType[][] = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            arr[i] = [];
            for (let j = 0; j < BOARD_SIZE; j++) {
                arr[i][j] = { x: i, y: j, tileValue: "", updatable: true, valid: true };
            }
        }
        return arr;
    }

    const [board, setBoard] = useState(EMPTY_BOARD);

    useEffect(() => {
        //InitializeBoard();
    }, []);

    useEffect(() => {
        console.log(ValidSudoku(board));
    }, [board]);

    const tileChange = (x: any, y: any, tileValue: any) => {
        let items: TileType[][] = [...board];
        let item: TileType = { ...items[x][y] };
        item.tileValue = tileValue;
        items[x][y] = item;
        setBoard(items);
    }

    const tileClick = (e: any) => {
    }

    function InitializeBoard() {
        let arr: TileType[][] = [];
        for (let i = 0; i < BOARD_SIZE; i++) {
            arr[i] = [];
            for (let j = 0; j < BOARD_SIZE; j++) {
                arr[i][j] = { tileValue: "", updatable: true, valid: true };
            }
        }
        setBoard(arr);
    }

    return (<div className={styles.board}>{board.map(function (subarray, i) {
        return subarray.map(function (value, j) {
            return <Tile key={`${i}, ${j}`} x={i} y={j} tileValue={board[i][j].tileValue} updatable={true} onClick={tileClick} onChange={tileChange} valid={true}></Tile>;
        })
    })}</div>);
}