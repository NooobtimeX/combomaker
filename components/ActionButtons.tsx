import React from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaTrash, FaUndo, FaRedo } from "react-icons/fa";
import { ActionButtonsProps } from "@/interface/interface";

const ActionButtons: React.FC<ActionButtonsProps> = ({
  userCreation,
  undoStack,
  redoStack,
  handleDeleteLast,
  handleReset,
  handleUndo,
  handleRedo,
  setUserCreation,
  setUndoStack,
  setRedoStack,
  setComboName,
}) => {
  return (
    <div className="flex gap-2">
      <button
        aria-label="Delete last action"
        className="flex w-full items-center justify-center rounded-lg border border-red-500 px-6 py-3 shadow-lg transition duration-200 hover:bg-red-500 disabled:cursor-not-allowed"
        onClick={() =>
          handleDeleteLast(
            userCreation,
            undoStack,
            setUserCreation,
            setUndoStack,
            setRedoStack,
          )
        }
        disabled={userCreation.length === 0}
      >
        <MdOutlineKeyboardBackspace />
      </button>
      <button
        aria-label="Reset"
        className="flex w-full items-center justify-center rounded-lg border border-red-500 px-6 py-3 shadow-lg transition duration-200 hover:bg-red-500 disabled:cursor-not-allowed"
        onClick={() =>
          handleReset(
            userCreation,
            undoStack,
            setUserCreation,
            setUndoStack,
            setRedoStack,
            setComboName,
          )
        }
      >
        <FaTrash />
      </button>
      <button
        aria-label="Undo"
        className="flex w-full items-center justify-center rounded-lg border border-yellow-500 px-6 py-3 shadow-lg transition duration-200 hover:bg-yellow-500 disabled:cursor-not-allowed"
        onClick={() =>
          handleUndo(
            userCreation,
            undoStack,
            redoStack,
            setUserCreation,
            setUndoStack,
            setRedoStack,
          )
        }
        disabled={undoStack.length === 0}
      >
        <FaUndo />
      </button>
      <button
        aria-label="Redo"
        className="flex w-full items-center justify-center rounded-lg border border-yellow-500 px-6 py-3 shadow-lg transition duration-200 hover:bg-yellow-500 disabled:cursor-not-allowed"
        onClick={() =>
          handleRedo(
            userCreation,
            undoStack,
            redoStack,
            setUserCreation,
            setUndoStack,
            setRedoStack,
          )
        }
        disabled={redoStack.length === 0}
      >
        <FaRedo />
      </button>
    </div>
  );
};

export default ActionButtons;
