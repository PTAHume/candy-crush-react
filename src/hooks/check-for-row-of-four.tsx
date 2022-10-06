const blank: string = require("./../images/blank.png");
const notValid: number[] = [
  5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54,
  55, 62, 63, 64,
];
const useRowOfFourCheck = (
  currentColorArrangement: string[],
  setScoreDisplay: Function
): boolean => {
  for (let i: number = 0; i < 64; i++) {
    const rowOfFour: number[] = [i, i + 1, i + 2, i + 3];
    const decidedColor: string = currentColorArrangement[i];
    const isBlank: boolean = currentColorArrangement[i] === blank;
    if (notValid.includes(i)) continue;
    if (
      rowOfFour.every(
        (square: number) => currentColorArrangement[square] === decidedColor
      ) &&
      !isBlank
    ) {
      setScoreDisplay((score: number) => score + 4);
      rowOfFour.forEach(
        (square: number) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
  return false;
};
export default useRowOfFourCheck;
