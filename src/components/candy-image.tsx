import { DragEventHandler } from "react";

const CandyImage = ({
  Index,
  CandyColor,
  DragStart,
  DragDrop,
  DragEnd,
}: {
  Index: number;
  CandyColor: string;
  DragStart: DragEventHandler<HTMLImageElement>;
  DragDrop: DragEventHandler<HTMLImageElement>;
  DragEnd: DragEventHandler<HTMLImageElement>;
}) => {
  return (
    <img
      key={Index}
      src={CandyColor}
      alt={CandyColor}
      data-id={Index}
      draggable={true}
      onDragStart={DragStart}
      onDragOver={(e) => e.preventDefault()}
      onDragEnter={(e) => e.preventDefault()}
      onDragLeave={(e) => e.preventDefault()}
      onDrop={DragDrop}
      onDragEnd={DragEnd}
    />
  );
};

export default CandyImage;
