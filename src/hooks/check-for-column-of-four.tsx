const blank: string = require("./../images/blank.png");
const useColumnOfFourCheck: any = (
  width: number,
  currentColorArrangement: string[],
  setScoreDisplay: Function
): boolean => {
  for (let i: number = 0; i <= 39; i++) {
    const columnOfFour: number[] = [i, i + width, i + width * 2, i + width * 3];
    const decidedColor: string = currentColorArrangement[i];
    const isBlank: boolean = currentColorArrangement[i] === blank;
    if (
      columnOfFour.every(
        (square: number) => currentColorArrangement[square] === decidedColor
      ) &&
      !isBlank
    ) {
      setScoreDisplay((score: number) => score + 4);
      columnOfFour.forEach(
        (square: number) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
  return false;
};

export default useColumnOfFourCheck;
