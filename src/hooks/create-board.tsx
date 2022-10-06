const createBoard = (
  setCurrentColorArrangement: Function,
  candyColors: string[],
  width: number
): void => {
  const randomColorArrangement: string[] = [];
  for (let i: number = 0; i < width * width; i++) {
    const randomColor: string =
      candyColors[Math.floor(Math.random() * candyColors.length)];
    randomColorArrangement.push(randomColor);
  }
  setCurrentColorArrangement(randomColorArrangement);
};

export default createBoard;
