export type Operator = "+" | "-" | "x" | "/";

export type CalculatorState = {
  display: string;
  numbers: string[];
  operations: Operator[];
  numCount: number;
  firstNo: boolean;
  opPressed: boolean;
  equalPressed: boolean;
};

export function createInitialCalculatorState(): CalculatorState {
  return {
    display: "0.",
    numbers: [],
    operations: [],
    numCount: 0,
    firstNo: true,
    opPressed: true,
    equalPressed: false,
  };
}

function applyOperation(result: number, value: number, operation: Operator): number {
  switch (operation) {
    case "+":
      return result + value;
    case "-":
      return result - value;
    case "x":
      return result * value;
    case "/":
      return result / value;
  }
}

function showResult(state: CalculatorState): CalculatorState {
  let result = parseFloat(state.numbers[0]);

  for (let index = 0; index < state.numbers.length - 1; index += 1) {
    result = applyOperation(result, parseFloat(state.numbers[index + 1]), state.operations[index]);
  }

  return {
    ...state,
    display: String(result),
    firstNo: true,
  };
}

export function clearCalculator(): CalculatorState {
  return createInitialCalculatorState();
}

export function addNumber(state: CalculatorState, digit: string): CalculatorState {
  if (state.display === "0." && state.firstNo && state.opPressed) {
    return {
      ...state,
      display: digit,
      numCount: state.numCount + 1,
      firstNo: false,
      opPressed: false,
    };
  }

  if (state.firstNo && state.numCount < 19 && state.opPressed) {
    return {
      ...state,
      display: digit,
      numCount: state.numCount + 1,
      firstNo: false,
      opPressed: false,
    };
  }

  if (state.numCount < 19 && !state.firstNo) {
    return {
      ...state,
      display: state.display + digit,
      numCount: state.numCount + 1,
      opPressed: false,
    };
  }

  if (state.equalPressed) {
    return {
      ...createInitialCalculatorState(),
      display: digit,
      numCount: 1,
      firstNo: false,
      opPressed: false,
    };
  }

  return state;
}

export function pushOperator(state: CalculatorState, operator: Operator | "="): CalculatorState {
  if (state.opPressed) {
    return state;
  }

  let nextState: CalculatorState = { ...state };

  if (!nextState.equalPressed) {
    nextState.numbers = [...nextState.numbers, nextState.display];
  } else {
    nextState.equalPressed = false;
  }

  if (operator !== "=") {
    nextState.operations = [...nextState.operations, operator];
    nextState.opPressed = true;
  } else {
    nextState.equalPressed = true;
  }

  nextState.firstNo = true;

  if (nextState.numbers.length > 1) {
    return showResult(nextState);
  }

  return nextState;
}
