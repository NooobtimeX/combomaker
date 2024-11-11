import React from "react";

interface SaveComboButtonSelectorProps {
  onSaveFullCombo: () => void;
  onSaveAsSequence: () => void;
}

const SaveComboButtonSelector: React.FC<SaveComboButtonSelectorProps> = ({
  onSaveFullCombo,
  onSaveAsSequence,
}) => (
  <label className="block text-white">
    <span className="mb-2 font-medium">Save Options</span>
    <div className="flex gap-3">
      <button
        onClick={onSaveFullCombo}
        className="w-full rounded-lg bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
      >
        Save Full Combo
      </button>
      <button
        onClick={onSaveAsSequence}
        className="w-full rounded-lg bg-blue-500 py-3 font-medium text-white transition-colors hover:bg-blue-600"
      >
        Save as Sequence
      </button>
    </div>
  </label>
);

export default SaveComboButtonSelector;
