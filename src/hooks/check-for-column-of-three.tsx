const blank: string = require("./../images/blank.png");
const useColumnOfThreeCheck = (
  width: number,
  currentColorArrangement: string[],
  setScoreDisplay: Function
): any => {
  for (let i: number = 0; i <= 47; i++) {
    const columnOfThree: number[] = [i, i + width, i + width * 2];
    const decidedColor: string = currentColorArrangement[i];
    const isBlank: boolean = currentColorArrangement[i] === blank;
    if (
      columnOfThree.every(
        (square: number) => currentColorArrangement[square] === decidedColor
      ) &&
      !isBlank
    ) {
      setScoreDisplay((score: number) => score + 3);
      columnOfThree.forEach(
        (square: number) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
  return false;
};

export default useColumnOfThreeCheck;
