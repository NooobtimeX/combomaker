// PhotoConfigurationModal.tsx
import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { PhotoConfigurationModalProps } from "@/interface/interface";
import ComboNameInput from "@/components/PhotoConfiguration/ComboNameInput.tsx";
import ImageQualitySelector from "@/components/PhotoConfiguration/ImageQualitySelector";
import PlayerOrientationSelector from "@/components/PhotoConfiguration/PlayerOrientationSelector";
import BackgroundColorSelector from "@/components/PhotoConfiguration/BackgroundColorSelector";
import FileFormatSelector from "@/components/PhotoConfiguration/FileFormatSelector";
import Image from "next/image";

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
  userCreation,
  movesForGame,
}) => {
  const [fileFormat, setFileFormat] = useState("png");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 p-2">
      <div className="relative w-full max-w-lg space-y-3 rounded-lg bg-gray-900 px-4 py-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 transition-colors hover:text-white"
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-center text-lg font-semibold text-white">
          Photo Configuration
        </h2>
        <div className="m-auto flex items-center justify-center">
          <div
            style={{
              backgroundColor: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            }}
            className="flex gap-2 rounded-lg bg-opacity-80 p-3"
          >
            {["f", "natural", "d", "df", "2"].map((img, index) => (
              <Image
                key={index}
                src={`/tekken8/${
                  shouldSwapHorizontal
                    ? ["b", "natural", "d", "db", "2"][index]
                    : img
                }.webp`}
                alt="Example"
                className="aspect-square h-5 sm:h-6 md:h-7 lg:h-8 xl:h-9 2xl:h-10"
                width={50}
                height={50}
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
          className="w-full rounded-lg bg-green-500 py-3 font-semibold text-white transition-colors hover:bg-green-600"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default PhotoConfigurationModal;
