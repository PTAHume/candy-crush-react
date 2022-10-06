import { useEffect, useState } from "react";
import ScoreBoard from "./components/score-board";
import useColumnOfFourCheck from "./hooks/check-for-column-of-four";
import useRowOfFourCheck from "./hooks/check-for-row-of-four";
import useColumnOfThreeCheck from "./hooks/check-for-column-of-three";
import useRowOfThreeCheck from "./hooks/check-for-row-of-three";
import useMoveIntoSquare from "./hooks/move-into-square-below";
import createBoard from "./hooks/create-board";
import useCheckDropOption from "./hooks/check-drop-option";
import CandyImage from "./components/candy-image";

const width: number = 8;
const candyColors: string[] = [
  require("./images/blue-candy.png"),
  require("./images/green-candy.png"),
  require("./images/orange-candy.png"),
  require("./images/purple-candy.png"),
  require("./images/red-candy.png"),
  require("./images/yellow-candy.png"),
];

const App = () => {
  const [currentColorArrangement, setCurrentColorArrangement]: any[] = useState(
    []
  );
  const [squareBeingDragged, setSquareBeingDragged]: any[] = useState(null);
  const [squareBeingReplaced, setSquareBeingReplaced]: any[] = useState(null);
  const [scoreDisplay, setScoreDisplay]: any = useState<number>(0);
  const checkForColumnOfFour = useColumnOfFourCheck;
  const checkForRowOfFour = useRowOfFourCheck;
  const checkForColumnOfThree = useColumnOfThreeCheck;
  const checkForRowOfThree = useRowOfThreeCheck;
  const moveIntoSquareBelow = useMoveIntoSquare;
  const checkDropOption = useCheckDropOption;

  const dragStart = (e: React.DragEvent<HTMLImageElement>) => {
    setSquareBeingDragged(e.target);
  };
  const dragDrop = (e: React.DragEvent<HTMLImageElement>) => {
    setSquareBeingReplaced(e.target);
  };
  const dragEnd = () => {
    checkDropOption(
      squareBeingDragged,
      squareBeingReplaced,
      currentColorArrangement,
      width,
      setScoreDisplay,
      setSquareBeingDragged,
      setSquareBeingReplaced,
      setCurrentColorArrangement
    );
  };

  useEffect(() => {
    createBoard(setCurrentColorArrangement, candyColors, width);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      checkForColumnOfFour(width, currentColorArrangement, setScoreDisplay);
      checkForRowOfFour(currentColorArrangement, setScoreDisplay);
      checkForColumnOfThree(width, currentColorArrangement, setScoreDisplay);
      checkForRowOfThree(currentColorArrangement, setScoreDisplay);
      moveIntoSquareBelow(currentColorArrangement, candyColors, width);
      setCurrentColorArrangement([...currentColorArrangement]);
    }, 160);
    return () => clearInterval(timer);
  }, [
    checkForColumnOfFour,
    checkForRowOfFour,
    checkForColumnOfThree,
    checkForRowOfThree,
    moveIntoSquareBelow,
    currentColorArrangement,
  ]);

  return (
    <div className="app">
      <div className="game">
        {currentColorArrangement.map((candyColor: string, index: number) => {
          return (
            <CandyImage
              key={index}
              Index={index}
              CandyColor={candyColor}
              DragStart={dragStart}
              DragDrop={dragDrop}
              DragEnd={dragEnd}
            />
          );
        })}
      </div>
      <ScoreBoard score={scoreDisplay} />
    </div>
  );
};

export default App;
