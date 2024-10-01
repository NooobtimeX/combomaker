// ImageQualitySelector.tsx
import React from "react";

interface ImageQualitySelectorProps {
  imgHeight: number;
  setImgHeight: (height: number) => void;
}

const ImageQualitySelector: React.FC<ImageQualitySelectorProps> = ({
  imgHeight,
  setImgHeight,
}) => (
  <label className="block text-white">
    <span className="mb-2 font-medium">Image Quality</span>
    <div className="flex gap-3">
      <button
        onClick={() => setImgHeight(250)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 250
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-500"
        }`}
      >
        low
      </button>
      <button
        onClick={() => setImgHeight(500)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 500
            ? "bg-yellow-500 text-white"
            : "border border-yellow-500 text-yellow-500"
        }`}
      >
        mid
      </button>
      <button
        onClick={() => setImgHeight(750)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 750
            ? "bg-red-500 text-white"
            : "border border-red-500 text-red-500"
        }`}
      >
        high
      </button>
    </div>
  </label>
);

export default ImageQualitySelector;
