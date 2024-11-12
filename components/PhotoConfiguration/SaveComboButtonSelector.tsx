import React from "react";

interface SaveComboButtonSelectorProps {
  onSaveFullCombo: () => void;
  onSaveAsSequence: () => void;
}

const SaveComboButtonSelector: React.FC<SaveComboButtonSelectorProps> = ({
  onSaveFullCombo,
  onSaveAsSequence,
}) => (
  <div className="block text-white">
    <div className="flex gap-2">
      <button
        onClick={onSaveFullCombo}
        className="w-full rounded-xl bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
      >
        Save Full Combo
      </button>
      <button
        onClick={onSaveAsSequence}
        className="w-full rounded-xl bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
      >
        Save as Sequence
      </button>
    </div>
  </div>
);

export default SaveComboButtonSelector;
