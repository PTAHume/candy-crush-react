const blank: string = require("./../images/blank.png");
const notValid: number[] = [
  6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64,
];
const useRowOfThreeCheck = (
  currentColorArrangement: string[],
  setScoreDisplay: Function
): boolean => {
  for (let i: number = 0; i < 64; i++) {
    const rowOfThree: number[] = [i, i + 1, i + 2];
    const decidedColor: string = currentColorArrangement[i];
    const isBlank: boolean = currentColorArrangement[i] === blank;
    if (notValid.includes(i)) continue;
    if (
      rowOfThree.every(
        (square: number) => currentColorArrangement[square] === decidedColor
      ) &&
      !isBlank
    ) {
      setScoreDisplay((score: number) => score + 3);
      rowOfThree.forEach(
        (square: number) => (currentColorArrangement[square] = blank)
      );
      return true;
    }
  }
  return false;
};
export default useRowOfThreeCheck;
