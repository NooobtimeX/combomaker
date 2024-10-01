import { Item } from "@/interface/interface";

export const getSavedState = (key: string) => {
  const savedState = localStorage.getItem(key);
  return savedState ? JSON.parse(savedState) : null;
};

export const saveState = (key: string, state: any) => {
  localStorage.setItem(key, JSON.stringify(state));
};

export const handleAddItem = (
  item: Item,
  userCreation: number[],
  undoStack: number[][],
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  setUndoStack([...undoStack, userCreation]);
  setRedoStack([]);
  setUserCreation([...userCreation, item.id]);
};

export const handleDeleteLast = (
  userCreation: number[],
  undoStack: number[][],
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  if (userCreation.length > 0) {
    setUndoStack([...undoStack, userCreation]);
    setRedoStack([]);
    setUserCreation(userCreation.slice(0, userCreation.length - 1));
  }
};

export const handleReset = (
  userCreation: number[],
  undoStack: number[][],
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setComboName: React.Dispatch<React.SetStateAction<string>>,
) => {
  setUndoStack([...undoStack, userCreation]);
  setRedoStack([]);
  setUserCreation([]);
  setComboName("");
};

export const handleUndo = (
  userCreation: number[],
  undoStack: number[][],
  redoStack: number[][],
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  if (undoStack.length > 0) {
    const previousState = undoStack.pop();
    setRedoStack([...redoStack, userCreation]);
    setUserCreation(previousState || []);
    setUndoStack([...undoStack]);
  }
};

export const handleRedo = (
  userCreation: number[],
  undoStack: number[][],
  redoStack: number[][],
  setUserCreation: React.Dispatch<React.SetStateAction<number[]>>,
  setUndoStack: React.Dispatch<React.SetStateAction<number[][]>>,
  setRedoStack: React.Dispatch<React.SetStateAction<number[][]>>,
) => {
  if (redoStack.length > 0) {
    const nextState = redoStack.pop();
    setUndoStack([...undoStack, userCreation]);
    setUserCreation(nextState || []);
    setRedoStack([...redoStack]);
  }
};

export const handleSaveAsPNG = (
  shouldSwapHorizontal: boolean,
  imgHeight: number,
  userCreation: number[],
  comboName: string,
  movesForGame: any[],
  bgColor: string | null,
  fileFormat: string,
) => {
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const selectedMoves = userCreation
    .map((id) =>
      movesForGame
        .flatMap((category) => category.items)
        .find((move) => move.id === id),
    )
    .filter(Boolean);
  const spacing = 10;
  let totalWidth = 0;
  const images = selectedMoves.map((item: any) => {
    return new Promise<{
      img: HTMLImageElement;
      imgWidth: number;
      isSwapHorizontal?: boolean;
    }>((resolve) => {
      const img = new Image();
      if (item) {
        img.src = item.img;
        img.onload = () => {
          const imgWidth = (imgHeight / img.naturalHeight) * img.naturalWidth;
          totalWidth += imgWidth + spacing;
          resolve({ img, imgWidth, isSwapHorizontal: item.isSwapHorizontal });
        };
      }
    });
  });
  Promise.all(images).then((loadedImages) => {
    const totalHeight = imgHeight;
    canvas.width = totalWidth - spacing;
    canvas.height = totalHeight;
    if (context) {
      if (bgColor) {
        context.fillStyle = bgColor;
        context.fillRect(0, 0, canvas.width, canvas.height);
      }
      let currentX = 0;
      loadedImages.forEach(({ img, imgWidth, isSwapHorizontal }) => {
        context.save();
        context.beginPath();
        context.rect(currentX, 0, imgWidth, imgHeight);
        context.clip();
        if (shouldSwapHorizontal && isSwapHorizontal) {
          context.scale(-1, 1);
          context.drawImage(img, -currentX - imgWidth, 0, imgWidth, imgHeight);
          context.scale(-1, 1);
        } else {
          context.drawImage(img, currentX, 0, imgWidth, imgHeight);
        }
        context.restore();
        currentX += imgWidth + spacing;
      });
    }
    const dataUrl = canvas.toDataURL(`image/${fileFormat}`);
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `${comboName || "combo"}.${fileFormat}`;
    link.click();
  });
};
