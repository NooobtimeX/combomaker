import React from "react";

interface ComboNameInputProps {
  comboName: string;
  setComboName: (name: string) => void;
}

const ComboNameInput: React.FC<ComboNameInputProps> = ({
  comboName,
  setComboName,
}) => (
  <div className="block text-white">
    <span className="mb-2 font-medium">Combo Name</span>
    <input
      type="text"
      value={comboName}
      onChange={(e) => setComboName(e.target.value)}
      className="block w-full rounded-lg bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
      placeholder="Enter combo name"
    />
  </div>
);

export default ComboNameInput;
