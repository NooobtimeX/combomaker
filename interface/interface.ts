export interface Character {
  id: number;
  name: string;
  img: string;
}

export interface GameItem {
  id: number;
  name: string;
  img: string;
  isSwapHorizontal?: boolean;
}

export interface GameCategory {
  name: string;
  items: GameItem[];
}

export interface PhotoConfigurationModalProps {
  isOpen: boolean;
  onClose: () => void;
  comboName: string;
  setComboName: (name: string) => void;
  imgHeight: number;
  setImgHeight: (height: number) => void;
  shouldSwapHorizontal: boolean;
  setShouldSwapHorizontal: (swap: boolean) => void;
  color: { r: number; g: number; b: number; a: number };
  setColor: (color: { r: number; g: number; b: number; a: number }) => void;
  hasSwapHorizontal: boolean;
  handleSaveAsPNG: (
    shouldSwapHorizontal: boolean,
    imgHeight: number,
    userCreation: number[],
    comboName: string,
    movesForGame: GameCategory[],
    bgColor: string,
    fileFormat: string,
  ) => void;
  handleSaveAsSequence: (
    shouldSwapHorizontal: boolean,
    imgHeight: number,
    userCreation: number[],
    comboName: string,
    movesForGame: GameCategory[],
    bgColor: string,
    fileFormat: string,
  ) => void; // Added this line
  userCreation: number[];
  movesForGame: GameCategory[];
}

export interface ComboMakerProps {
  gameId: string;
}

export interface ComboDisplayProps {
  userCreation: number[];
  movesForGame: GameCategory[];
  setIsModalOpen: (isOpen: boolean) => void;
  handleAddItem: (
    item: GameItem,
    userCreation: number[],
    undoStack: number[][],
    setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
    setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  ) => void;
  undoStack: number[][];
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>;
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>;
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>;
  redoStack: number[][];
  handleDeleteLast: (
    userCreation: number[],
    undoStack: number[][],
    setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
    setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  ) => void;
  handleReset: (
    userCreation: number[],
    undoStack: number[][],
    setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
    setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setComboName: React.Dispatch<React.SetStateAction<string>>,
  ) => void;
  handleUndo: (
    userCreation: number[],
    undoStack: number[][],
    redoStack: number[][],
    setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
    setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  ) => void;
  handleRedo: (
    userCreation: number[],
    undoStack: number[][],
    redoStack: number[][],
    setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
    setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
    setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  ) => void;
  setComboName: React.Dispatch<React.SetStateAction<string>>;
}
