import useColumnOfFourCheck from "./check-for-column-of-four";
import useRowOfFourCheck from "./check-for-row-of-four";
import useColumnOfThreeCheck from "./check-for-column-of-three";
import useRowOfThreeCheck from "./check-for-row-of-three";

const checkForColumnOfFour = useColumnOfFourCheck;
const checkForRowOfFour = useRowOfFourCheck;
const checkForColumnOfThree = useColumnOfThreeCheck;
const checkForRowOfThree = useRowOfThreeCheck;

const useCheckDropOption = (
  squareBeingDragged: Element,
  squareBeingReplaced: Element,
  currentColorArrangement: string[],
  width: number,
  setScoreDisplay: Function,
  setSquareBeingDragged: Function,
  setSquareBeingReplaced: Function,
  setCurrentColorArrangement: Function
) => {
  const squareBeingDraggedId = parseInt(
    squareBeingDragged.getAttribute("data-id")!
  );

  const squareBeingReplacedId = parseInt(
    squareBeingReplaced.getAttribute("data-id")!
  );

  currentColorArrangement[squareBeingReplacedId] =
    squareBeingDragged.getAttribute("src")!;

  currentColorArrangement[squareBeingDraggedId] =
    squareBeingReplaced.getAttribute("src")!;

  const validMoves = [
    squareBeingDraggedId - 1,
    squareBeingDraggedId - width,
    squareBeingDraggedId + 1,
    squareBeingDraggedId + width,
  ];

  const validMove = validMoves.includes(squareBeingReplacedId);

  if (
    squareBeingReplacedId &&
    validMove &&
    (checkForColumnOfFour(width, currentColorArrangement, setScoreDisplay) ||
      checkForRowOfFour(currentColorArrangement, setScoreDisplay) ||
      checkForColumnOfThree(width, currentColorArrangement, setScoreDisplay) ||
      checkForRowOfThree(currentColorArrangement, setScoreDisplay))
  ) {
    setSquareBeingDragged(null);
    setSquareBeingReplaced(null);
  } else {
    currentColorArrangement[squareBeingReplacedId] =
      squareBeingReplaced.getAttribute("src")!;

    currentColorArrangement[squareBeingDraggedId] =
      squareBeingDragged.getAttribute("src")!;

    setCurrentColorArrangement([...currentColorArrangement]);
  }
};
export default useCheckDropOption;
