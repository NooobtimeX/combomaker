import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";

import BackgroundColorSelector from "@/components/PhotoConfiguration/BackgroundColorSelector";
import ComboNameInput from "@/components/PhotoConfiguration/ComboNameInput.tsx";
import FileFormatSelector from "@/components/PhotoConfiguration/FileFormatSelector";
import ImageQualitySelector from "@/components/PhotoConfiguration/ImageQualitySelector";
import PlayerOrientationSelector from "@/components/PhotoConfiguration/PlayerOrientationSelector";
import SaveComboButtonSelector from "@/components/PhotoConfiguration/SaveComboButtonSelector";
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
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-center font-semibold text-red-500">
          Photo Configuration
        </h2>
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
        <ComboNameInput comboName={comboName} setComboName={setComboName} />
        <PlayerOrientationSelector
          shouldSwapHorizontal={shouldSwapHorizontal}
          setShouldSwapHorizontal={setShouldSwapHorizontal}
          hasSwapHorizontal={hasSwapHorizontal}
        />
        <BackgroundColorSelector color={color} setColor={setColor} />
        <ImageQualitySelector
          imgHeight={imgHeight}
          setImgHeight={setImgHeight}
        />
        <FileFormatSelector
          fileFormat={fileFormat}
          setFileFormat={setFileFormat}
        />
        <SaveComboButtonSelector
          onSaveFullCombo={() => {
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
          onSaveAsSequence={() => {
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
        />
      </div>
    </div>
  );
};

export default PhotoConfigurationModal;
