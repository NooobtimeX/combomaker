import React, { useState, useEffect } from "react";
import {
  getSavedState,
  saveState,
  handleAddItem,
  handleDeleteLast,
  handleReset,
  handleUndo,
  handleRedo,
  handleSaveAsPNG,
  handleSaveAsSequence,
} from "@/utils/logics";
import { games } from "@/data/games";
import PhotoConfigurationModal from "@/components/PhotoConfigurationModal";
import ComboDisplay from "@/components/ComboDisplay";
import { ComboMakerProps } from "@/interface/interface";
const ComboMaker: React.FC<ComboMakerProps> = ({ gameId }) => {
  const [userCreation, setUserCreation] = useState<number[]>([]);
  const [undoStack, setUndoStack] = useState<number[][]>([]);
  const [redoStack, setRedoStack] = useState<number[][]>([]);
  const [comboName, setComboName] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imgHeight, setImgHeight] = useState(600);
  const [shouldSwapHorizontal, setShouldSwapHorizontal] = useState(false);
  const [color, setColor] = useState({ r: 0, g: 0, b: 0, a: 0 });

  useEffect(() => {
    const savedUserCreation = getSavedState(gameId + "_userCreation");
    const savedUndoStack = getSavedState(gameId + "_undoStack");
    const savedRedoStack = getSavedState(gameId + "_redoStack");
    if (savedUserCreation) setUserCreation(savedUserCreation);
    if (savedUndoStack) setUndoStack(savedUndoStack);
    if (savedRedoStack) setRedoStack(savedRedoStack);
  }, [gameId]);

  useEffect(() => {
    saveState(gameId + "_userCreation", userCreation);
    saveState(gameId + "_undoStack", undoStack);
    saveState(gameId + "_redoStack", redoStack);
  }, [userCreation, undoStack, redoStack, gameId]);

  const movesForGame = gameId
    ? games.find((game) => game.id === gameId)?.items || []
    : [];

  const hasSwapHorizontal = movesForGame.some((category) =>
    category.items.some((item) => item.hasOwnProperty("isSwapHorizontal")),
  );

  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex flex-col gap-2 p-2">
        <div className="space-y-2">
          <PhotoConfigurationModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            comboName={comboName}
            setComboName={setComboName}
            imgHeight={imgHeight}
            setImgHeight={setImgHeight}
            shouldSwapHorizontal={shouldSwapHorizontal}
            setShouldSwapHorizontal={setShouldSwapHorizontal}
            color={color}
            setColor={setColor}
            hasSwapHorizontal={hasSwapHorizontal}
            handleSaveAsPNG={handleSaveAsPNG}
            handleSaveAsSequence={handleSaveAsSequence} // Add this line
            userCreation={userCreation}
            movesForGame={movesForGame}
          />
          <ComboDisplay
            userCreation={userCreation}
            movesForGame={movesForGame}
            setIsModalOpen={setIsModalOpen}
            handleAddItem={handleAddItem}
            undoStack={undoStack}
            setUserCreation={setUserCreation}
            setUndoStack={setUndoStack}
            setRedoStack={setRedoStack}
            redoStack={redoStack}
            handleDeleteLast={handleDeleteLast}
            handleReset={handleReset}
            handleUndo={handleUndo}
            handleRedo={handleRedo}
            setComboName={setComboName}
          />
        </div>
      </div>
    </div>
  );
};

export default ComboMaker;
