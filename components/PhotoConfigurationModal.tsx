import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import { PhotoConfigurationModalProps } from "@/interface/interface";

const PhotoConfigurationModal: React.FC<PhotoConfigurationModalProps> = ({
  isOpen,
  onClose,
  comboName,
  setComboName,
  imgHeight,
  setImgHeight,
  shouldSwapHorizontal,
  setShouldSwapHorizontal,
  color,
  setColor,
  hasSwapHorizontal,
  handleSaveAsPNG,
  handleSaveAsSequence,
  userCreation,
  movesForGame,
}) => {
  const [fileFormat, setFileFormat] = useState("png");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-2">
      <div className="relative w-full max-w-lg space-y-3 rounded-xl bg-gray-900 p-4 shadow-lg">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-center font-semibold text-red-500">
          Photo Configuration
        </h2>
        {/* Preview */}
        <div className="m-auto flex items-center justify-center">
          <div
            style={{
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            }}
            className="flex gap-2 rounded-xl bg-opacity-80 p-1"
          >
            {["f", "natural", "d", "df", "2"].map((img, index) => (
              <img
                key={index}
                src={`/game/tekken8/${
                  shouldSwapHorizontal
                    ? ["b", "natural", "d", "db", "2"][index]
                    : img
                }.webp`}
                alt="Example"
                className="aspect-square h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10"
              />
            ))}
          </div>
        </div>
        {/* Combo Name */}
        <div className="block text-white">
          <span className="font-medium">Combo Name</span>
          <input
            type="text"
            value={comboName}
            onChange={(e) => setComboName(e.target.value)}
            className="block w-full rounded-xl bg-gray-800 p-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter combo name"
          />
        </div>
        {/* Player Orientation */}
        {hasSwapHorizontal && (
          <div className="block text-white">
            <span className="font-medium">Orientation</span>
            <div className="flex gap-2">
              <button
                onClick={() => setShouldSwapHorizontal(false)}
                className={`w-full rounded-xl py-2 font-medium transition-colors ${
                  shouldSwapHorizontal === false
                    ? "bg-red-500 text-white"
                    : "border border-red-500 text-red-500"
                }`}
              >
                Player 1
              </button>
              <button
                onClick={() => setShouldSwapHorizontal(true)}
                className={`w-full rounded-xl py-2 font-medium transition-colors ${
                  shouldSwapHorizontal === true
                    ? "bg-blue-500 text-white"
                    : "border border-blue-500 text-blue-500"
                }`}
              >
                Player 2
              </button>
            </div>
          </div>
        )}
        {/* Background Color */}
        <div className="block text-white">
          <span className="font-medium">Background Color</span>
          <div className="flex gap-2">
            {[
              { r: 0, g: 0, b: 0, a: 0 },
              { r: 0, g: 0, b: 0, a: 1 },
              { r: 255, g: 255, b: 255, a: 1 },
            ].map((bgColor, index) => (
              <button
                key={index}
                onClick={() => setColor(bgColor)}
                className={`h-10 w-1/3 rounded-xl transition-colors ${
                  `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` ===
                  `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`
                    ? "border-2 border-red-500"
                    : "border border-transparent"
                }`}
                style={{
                  backgroundColor: `rgba(${bgColor.r}, ${bgColor.g}, ${bgColor.b}, ${bgColor.a})`,
                }}
              />
            ))}
          </div>
        </div>
        {/* Image Quality */}
        <div className="block text-white">
          <span className="font-medium">Image Quality</span>
          <div className="flex gap-2">
            <button
              onClick={() => setImgHeight(100)}
              className={`w-full rounded-xl py-2 font-medium transition-colors ${
                imgHeight === 100
                  ? "bg-green-500 text-white"
                  : "border border-green-500 text-green-500"
              }`}
            >
              low
            </button>
            <button
              onClick={() => setImgHeight(300)}
              className={`w-full rounded-xl py-2 font-medium transition-colors ${
                imgHeight === 300
                  ? "bg-yellow-500 text-white"
                  : "border border-yellow-500 text-yellow-500"
              }`}
            >
              mid
            </button>
            <button
              onClick={() => setImgHeight(500)}
              className={`w-full rounded-xl py-2 font-medium transition-colors ${
                imgHeight === 500
                  ? "bg-red-500 text-white"
                  : "border border-red-500 text-red-500"
              }`}
            >
              high
            </button>
          </div>
        </div>
        {/* File Format */}
        <div className="block text-white">
          <div className="flex gap-2">
            {["png", "webp", "jpg"].map((format) => (
              <button
                key={format}
                onClick={() => setFileFormat(format)}
                className={`w-full rounded-xl py-2 font-medium transition-colors ${
                  fileFormat === format
                    ? "bg-red-500 text-white"
                    : "border border-red-500 text-red-500"
                }`}
              >
                {format.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        {/* Save Buttons */}
        <div className="block text-white">
          <div className="flex gap-2">
            <button
              onClick={() => {
                onClose();
                handleSaveAsPNG(
                  shouldSwapHorizontal,
                  imgHeight,
                  userCreation,
                  comboName,
                  movesForGame,
                  `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  fileFormat,
                );
              }}
              className="w-full rounded-xl bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
            >
              Save Full Combo
            </button>
            <button
              onClick={() => {
                onClose();
                handleSaveAsSequence(
                  shouldSwapHorizontal,
                  imgHeight,
                  userCreation,
                  comboName,
                  movesForGame,
                  `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
                  fileFormat,
                );
              }}
              className="w-full rounded-xl bg-green-500 py-3 font-medium text-white transition-colors hover:bg-green-600"
            >
              Save as Sequence
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoConfigurationModal;
