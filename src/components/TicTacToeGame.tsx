import { useCallback, useEffect, useMemo, useState } from "react";

import {
  applyMove,
  checkVictory,
  emptyBoard,
  getComputerMove,
  getNextTurn,
  type Board,
  type GameConfig,
  type PlayerSymbol,
} from "../lib/tictactoeLogic";

export type TicTacToeLabels = {
  title: string;
  chooseSymbol: string;
  chooseMode: string;
  onePlayer: string;
  twoPlayers: string;
  settings: string;
  restart: string;
  turn: string;
  winX: string;
  winO: string;
  tie: string;
};

type TicTacToeGameProps = {
  labels: TicTacToeLabels;
};

const CORNER_BORDERS = [
  "border-r border-b border-white/80",
  "border-r border-b border-white/80",
  "border-b border-white/80",
  "border-r border-b border-white/80",
  "border-r border-b border-white/80",
  "border-b border-white/80",
  "border-r border-white/80",
  "border-r border-white/80",
  "",
] as const;

function formatStatus(
  labels: TicTacToeLabels,
  winnerMessage: string,
  turn: PlayerSymbol,
): string {
  if (winnerMessage === "X Wins!!!") {
    return labels.winX;
  }
  if (winnerMessage === "O Wins!!!") {
    return labels.winO;
  }
  if (winnerMessage === "Tie!!!") {
    return labels.tie;
  }

  return labels.turn.replace("{turn}", turn);
}

export function TicTacToeGame({ labels }: TicTacToeGameProps) {
  const [showSettings, setShowSettings] = useState(true);
  const [board, setBoard] = useState<Board>(() => emptyBoard());
  const [turn, setTurn] = useState<PlayerSymbol>("X");
  const [turnNo, setTurnNo] = useState(0);
  const [winnerMessage, setWinnerMessage] = useState("");
  const [playerSymbol, setPlayerSymbol] = useState<PlayerSymbol | null>(null);
  const [onePlayer, setOnePlayer] = useState<boolean | null>(null);

  const config = useMemo<GameConfig | null>(() => {
    if (playerSymbol === null || onePlayer === null) {
      return null;
    }

    return {
      player: playerSymbol,
      computer: playerSymbol === "X" ? "O" : "X",
      onePlayer,
    };
  }, [onePlayer, playerSymbol]);

  const gameOver = winnerMessage !== "";

  const resetBoard = useCallback(() => {
    setBoard(emptyBoard());
    setTurn("X");
    setTurnNo(0);
    setWinnerMessage("");
  }, []);

  const startGame = useCallback(() => {
    if (!config) {
      return;
    }

    resetBoard();
    setShowSettings(false);
  }, [config, resetBoard]);

  const openSettings = useCallback(() => {
    setShowSettings(true);
    setPlayerSymbol(null);
    setOnePlayer(null);
    resetBoard();
  }, [resetBoard]);

  const performMove = useCallback(
    (index: number, symbol: PlayerSymbol, currentTurnNo: number, currentBoard: Board) => {
      const nextBoard = applyMove(currentBoard, index, symbol);
      if (!nextBoard) {
        return;
      }

      const outcome = checkVictory(nextBoard);
      const nextTurnNo = currentTurnNo + 1;
      const nextTurn = getNextTurn(symbol);

      setBoard(nextBoard);
      setTurnNo(nextTurnNo);

      if (outcome.winner) {
        setWinnerMessage(outcome.message);
        return;
      }

      setTurn(nextTurn);

      if (config?.onePlayer) {
        const computerMove = getComputerMove(nextBoard, nextTurnNo, nextTurn, config);
        if (computerMove !== null) {
          const computerBoard = applyMove(nextBoard, computerMove, nextTurn);
          if (!computerBoard) {
            return;
          }

          const computerOutcome = checkVictory(computerBoard);
          const afterComputerTurnNo = nextTurnNo + 1;
          const afterComputerTurn = getNextTurn(nextTurn);

          setBoard(computerBoard);
          setTurnNo(afterComputerTurnNo);

          if (computerOutcome.winner) {
            setWinnerMessage(computerOutcome.message);
            return;
          }

          setTurn(afterComputerTurn);
        }
      }
    },
    [config],
  );

  useEffect(() => {
    if (!config || showSettings || gameOver || !config.onePlayer || turnNo !== 0 || turn !== "X") {
      return;
    }

    if (config.computer === "X") {
      const computerMove = getComputerMove(board, turnNo, turn, config);
      if (computerMove !== null) {
        performMove(computerMove, "X", turnNo, board);
      }
    }
  }, [board, config, gameOver, performMove, showSettings, turn, turnNo]);

  const handleCellClick = (index: number) => {
    if (showSettings || gameOver || board[index] !== "") {
      return;
    }

    if (config?.onePlayer && turn === config.computer) {
      return;
    }

    performMove(index, turn, turnNo, board);
  };

  const handleSymbolSelect = (symbol: PlayerSymbol) => {
    setPlayerSymbol(symbol);
  };

  const handleModeSelect = (modeOnePlayer: boolean) => {
    setOnePlayer(modeOnePlayer);
  };

  useEffect(() => {
    if (playerSymbol === null || onePlayer === null || !showSettings) {
      return;
    }

    resetBoard();
    setShowSettings(false);
  }, [onePlayer, playerSymbol, resetBoard, showSettings]);

  const status = formatStatus(labels, winnerMessage, turn);

  return (
    <div className="tictactoe-game mx-auto w-full max-w-md">
      <h3 className="tictactoe-title mb-5 text-center text-2xl font-bold text-slate-900">{status}</h3>

      <div className="tictactoe-board mx-auto w-[300px] overflow-hidden rounded-lg bg-sky-400 p-0 shadow-lg shadow-sky-950/20">
        <div className="grid grid-cols-3">
          {board.map((cell, index) => (
            <button
              key={index}
              type="button"
              className={`tictactoe-cell flex h-[100px] items-center justify-center bg-sky-400 text-5xl font-semibold text-white transition hover:bg-sky-300 disabled:cursor-default disabled:hover:bg-sky-400 ${CORNER_BORDERS[index]}`}
              disabled={showSettings || gameOver || cell !== ""}
              onClick={() => handleCellClick(index)}
            >
              {cell}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 px-2 py-3">
          <button
            type="button"
            className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-sky-500 transition hover:bg-sky-50"
            onClick={openSettings}
          >
            {labels.settings}
          </button>
          <button
            type="button"
            className="rounded-md bg-white px-3 py-1 text-sm font-semibold text-sky-500 transition hover:bg-sky-50"
            onClick={startGame}
          >
            {labels.restart}
          </button>
        </div>
      </div>

      {showSettings ? (
        <div className="tictactoe-settings-overlay absolute inset-0 z-10 flex items-start justify-center bg-white/95 p-6 pt-10">
          <div className="w-full max-w-sm rounded-2xl border border-sky-200 bg-white p-6 text-center shadow-xl">
            <p className="text-lg font-semibold text-slate-800">{labels.chooseSymbol}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {(["X", "O"] as const).map((symbol) => (
                <button
                  key={symbol}
                  type="button"
                  className={`rounded-lg py-6 text-5xl font-bold text-white transition ${
                    playerSymbol === symbol
                      ? "border-2 border-green-600 bg-green-500"
                      : "bg-sky-400 hover:bg-sky-300"
                  }`}
                  onClick={() => handleSymbolSelect(symbol)}
                >
                  {symbol}
                </button>
              ))}
            </div>

            <p className="mt-6 text-lg font-semibold text-slate-800">{labels.chooseMode}</p>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button
                type="button"
                className={`rounded-lg px-3 py-4 text-sm font-semibold text-slate-800 transition ${
                  onePlayer === true
                    ? "border-2 border-green-600 bg-green-100"
                    : "bg-sky-100 hover:bg-sky-200"
                }`}
                onClick={() => handleModeSelect(true)}
              >
                {labels.onePlayer}
              </button>
              <button
                type="button"
                className={`rounded-lg px-3 py-4 text-sm font-semibold text-slate-800 transition ${
                  onePlayer === false
                    ? "border-2 border-green-600 bg-green-100"
                    : "bg-sky-100 hover:bg-sky-200"
                }`}
                onClick={() => handleModeSelect(false)}
              >
                {labels.twoPlayers}
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
