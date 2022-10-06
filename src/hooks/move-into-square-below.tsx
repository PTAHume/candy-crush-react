const blank: string = require("./../images/blank.png");
const firstRow: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
const useMoveIntoSquare = (
  currentColorArrangement: string[],
  candyColors: string[],
  width: number
): boolean => {
  let moveComplete: boolean = true;
  for (let i: number = 0; i <= 55; i++) {
    const isFirstRow: boolean = firstRow.includes(i);
    if (isFirstRow && currentColorArrangement[i] === blank) {
      const randomNumber: number = Math.floor(
        Math.random() * candyColors.length
      );
      currentColorArrangement[i] = candyColors[randomNumber];
      moveComplete = false;
    }
    if (currentColorArrangement[i + width] === blank) {
      currentColorArrangement[i + width] = currentColorArrangement[i];
      currentColorArrangement[i] = blank;
      moveComplete = false;
    }
  }
  return moveComplete;
};
export default useMoveIntoSquare;
