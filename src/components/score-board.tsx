const ScoreBoard = ({ score }: { score: number }) => {
  return (
    <div className="scoreboard">
      <h2>{score}</h2>
    </div>
  );
};

export default ScoreBoard;
