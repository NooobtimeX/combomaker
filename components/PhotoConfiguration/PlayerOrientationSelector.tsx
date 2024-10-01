// PlayerOrientationSelector.tsx
import React from "react";

interface PlayerOrientationSelectorProps {
  shouldSwapHorizontal: boolean;
  setShouldSwapHorizontal: (swap: boolean) => void;
  hasSwapHorizontal: boolean;
}

const PlayerOrientationSelector: React.FC<PlayerOrientationSelectorProps> = ({
  shouldSwapHorizontal,
  setShouldSwapHorizontal,
  hasSwapHorizontal,
}) => {
  if (!hasSwapHorizontal) return null;

  return (
    <label className="block text-white">
      <span className="mb-2 font-medium">Player Orientation</span>
      <div className="flex gap-3">
        <button
          onClick={() => setShouldSwapHorizontal(false)}
          className={`w-full rounded-lg py-2 font-medium transition-colors ${
            shouldSwapHorizontal === false
              ? "bg-red-500 text-white"
              : "border border-red-500 text-red-500"
          }`}
        >
          player 1
        </button>
        <button
          onClick={() => setShouldSwapHorizontal(true)}
          className={`w-full rounded-lg py-2 font-medium transition-colors ${
            shouldSwapHorizontal === true
              ? "bg-blue-500 text-white"
              : "border border-blue-500 text-blue-500"
          }`}
        >
          player 2
        </button>
      </div>
    </label>
  );
};

export default PlayerOrientationSelector;
