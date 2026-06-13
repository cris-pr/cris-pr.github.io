export type PlayerSymbol = "X" | "O";
export type Cell = PlayerSymbol | "";
export type Board = Cell[];

export type GameOutcome = {
  winner: PlayerSymbol | "tie" | null;
  message: string;
};

export type GameConfig = {
  player: PlayerSymbol;
  computer: PlayerSymbol;
  onePlayer: boolean;
};

const WIN_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
] as const;

export function emptyBoard(): Board {
  return Array.from({ length: 9 }, () => "");
}

export function checkVictory(board: Board): GameOutcome {
  for (const [a, b, c] of WIN_LINES) {
    const symbol = board[a];
    if (symbol && symbol === board[b] && symbol === board[c]) {
      return { winner: symbol, message: `${symbol} Wins!!!` };
    }
  }

  if (board.every((cell) => cell !== "")) {
    return { winner: "tie", message: "Tie!!!" };
  }

  return { winner: null, message: "" };
}

export function applyMove(board: Board, index: number, symbol: PlayerSymbol): Board | null {
  if (board[index] !== "") {
    return null;
  }

  const nextBoard = [...board];
  nextBoard[index] = symbol;
  return nextBoard;
}

function getEmptyIndices(board: Board): number[] {
  return board.flatMap((cell, index) => (cell === "" ? [index] : []));
}

function checkFor2(board: Board, computer: PlayerSymbol): number | null {
  for (let i = 0; i < 3; i += 1) {
    if (board[i] === computer) {
      if (board[i + 3] === "" && board[i + 6] === "") {
        return i + 3;
      }
    } else if (board[i + 3] === computer) {
      if (board[i] === "" && board[i + 6] === "") {
        return i;
      }
    } else if (board[i + 6] === computer) {
      if (board[i] === "" && board[i + 3] === "") {
        return i;
      }
    }
  }

  for (let i = 0; i <= 6; i += 3) {
    if (board[i] === computer) {
      if (board[i + 1] === "" && board[i + 2] === "") {
        return i + 2;
      }
    } else if (board[i + 1] === computer) {
      if (board[i] === "" && board[i + 2] === "") {
        return i;
      }
    } else if (board[i + 2] === computer) {
      if (board[i] === "" && board[i + 1] === "") {
        return i;
      }
    }
  }

  if (computer === "O") {
    if (board[0] === computer && board[4] === "" && board[8] === "") {
      return 4;
    }
    if (board[8] === computer && board[4] === "" && board[0] === "") {
      return 4;
    }
    if (board[2] === computer && board[4] === "" && board[6] === "") {
      return 4;
    }
    if (board[6] === computer && board[4] === "" && board[2] === "") {
      return 4;
    }
  }

  return null;
}

function checkForWin(board: Board, syms: PlayerSymbol[]): number | null {
  for (const sym of syms) {
    if (board[0] === board[4] && board[0] === sym && board[8] === "") {
      return 8;
    }
    if (board[0] === board[8] && board[0] === sym && board[4] === "") {
      return 8;
    }
    if (board[8] === board[4] && board[8] === sym && board[0] === "") {
      return 0;
    }
    if (board[8] === board[4] && board[0] === "" && board[8] === sym) {
      return 0;
    }
    if (board[2] === board[4] && board[6] === "" && board[2] === sym) {
      return 6;
    }
    if (board[2] === board[6] && board[4] === "" && board[2] === sym) {
      return 4;
    }
    if (board[6] === board[4] && board[2] === "" && board[6] === sym) {
      return 2;
    }

    for (let i = 0; i <= 6; i += 3) {
      if (board[i] === board[i + 1] && board[i + 2] === "" && board[i] === sym) {
        return i + 2;
      }
      if (board[i + 1] === board[i + 2] && board[i] === "" && board[i + 1] === sym) {
        return i;
      }
      if (board[i] === board[i + 2] && board[i + 1] === "" && board[i] === sym) {
        return i + 1;
      }
    }

    for (let i = 0; i < 3; i += 1) {
      if (board[i] === board[i + 3] && board[i + 6] === "" && board[i] === sym) {
        return i + 6;
      }
      if (board[i + 3] === board[i + 6] && board[i] === "" && board[i + 3] === sym) {
        return i;
      }
      if (board[i] === board[i + 6] && board[i + 3] === "" && board[i] === sym) {
        return i + 3;
      }
    }
  }

  return null;
}

function firstMoveX(): number {
  while (true) {
    const randNo = Math.floor(Math.random() * 9);
    if ([0, 2, 6, 8].includes(randNo)) {
      return randNo;
    }
  }
}

function secondMoveX(board: Board, computer: PlayerSymbol, player: PlayerSymbol): number | null {
  if (board[4] === player) {
    if (board[0] === computer) {
      return 2;
    }
    if (board[2] === computer) {
      return 0;
    }
    if (board[6] === computer) {
      return 0;
    }
    if (board[8] === computer) {
      return 2;
    }
  } else if (board[1] === player || board[3] === player || board[5] === player || board[7] === player) {
    return 4;
  } else if (
    board[0] === player ||
    board[2] === player ||
    board[6] === player ||
    board[8] === player
  ) {
    if (board[0] === computer && board[2] === "") {
      return 2;
    }
    if (board[0] === computer && board[6] === "") {
      return 6;
    }
    if (board[2] === computer && board[0] === "") {
      return 0;
    }
    if (board[2] === computer && board[8] === "") {
      return 8;
    }
    if (board[6] === computer && board[0] === "") {
      return 0;
    }
    if (board[6] === computer && board[8] === "") {
      return 8;
    }
    if (board[8] === computer && board[6] === "") {
      return 6;
    }
    if (board[8] === computer && board[2] === "") {
      return 2;
    }
  }

  return null;
}

function thirdMoveX(board: Board, computer: PlayerSymbol): number | null {
  if (board[0] === computer && board[4] === computer) {
    if (board[2] === "" && board[1] === "") {
      return 2;
    }
    if (board[6] === "") {
      return 6;
    }
  } else if (board[2] === computer && board[4] === computer) {
    if (board[0] === "" && board[1] === "") {
      return 0;
    }
    if (board[8] === "") {
      return 8;
    }
  } else if (board[6] === computer && board[4] === computer) {
    if (board[0] === "" && board[3] === "") {
      return 0;
    }
    if (board[8] === "") {
      return 8;
    }
  } else if (board[8] === computer && board[4] === computer) {
    if (board[2] === "" && board[5] === "") {
      return 2;
    }
    if (board[6] === "") {
      return 6;
    }
  } else if (board[4] === "") {
    return 4;
  }

  return null;
}

function ninthMoveX(board: Board): number | null {
  return getEmptyIndices(board)[0] ?? null;
}

function firstMoveO(board: Board): number {
  if ([board[0], board[2], board[6], board[8]].includes("X")) {
    return 4;
  }

  while (true) {
    const randNo = Math.floor(Math.random() * 9);
    if ([0, 2, 6, 8].includes(randNo) && board[randNo] === "") {
      return randNo;
    }
  }
}

function fourthMoveO(board: Board): number | null {
  return getEmptyIndices(board)[0] ?? null;
}

function getComputerMoveX(
  board: Board,
  turnNo: number,
  config: GameConfig,
): number | null {
  const { computer, player } = config;
  const syms: PlayerSymbol[] = [computer, player];

  if (turnNo === 0) {
    return firstMoveX();
  }
  if (turnNo === 2) {
    return secondMoveX(board, computer, player);
  }
  if (turnNo === 4) {
    return checkForWin(board, syms) ?? thirdMoveX(board, computer);
  }
  if (turnNo === 6) {
    return checkForWin(board, syms) ?? checkFor2(board, computer) ?? ninthMoveX(board);
  }
  if (turnNo === 8) {
    return checkForWin(board, syms) ?? ninthMoveX(board);
  }

  return null;
}

function getComputerMoveO(
  board: Board,
  turnNo: number,
  config: GameConfig,
): number | null {
  const { computer, player } = config;
  const syms: PlayerSymbol[] = [computer, player];

  if (turnNo === 1) {
    return firstMoveO(board);
  }
  if (turnNo === 3) {
    return checkForWin(board, syms) ?? checkFor2(board, computer);
  }
  if (turnNo === 5) {
    return checkForWin(board, syms) ?? checkFor2(board, computer) ?? fourthMoveO(board);
  }
  if (turnNo === 7) {
    return (
      checkForWin(board, syms) ?? checkFor2(board, computer) ?? fourthMoveO(board) ?? null
    );
  }

  return null;
}

export function getComputerMove(
  board: Board,
  turnNo: number,
  turn: PlayerSymbol,
  config: GameConfig,
): number | null {
  if (!config.onePlayer || turn !== config.computer) {
    return null;
  }

  if (config.computer === "X") {
    return getComputerMoveX(board, turnNo, config);
  }

  return getComputerMoveO(board, turnNo, config);
}

export function getNextTurn(turn: PlayerSymbol): PlayerSymbol {
  return turn === "X" ? "O" : "X";
}
