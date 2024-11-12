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
        onClick={() => setImgHeight(100)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 100
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-500"
        }`}
      >
        1
      </button>
      <button
        onClick={() => setImgHeight(200)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 200
            ? "bg-lime-500 text-white"
            : "border border-lime-500 text-lime-500"
        }`}
      >
        2
      </button>
      <button
        onClick={() => setImgHeight(300)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 300
            ? "bg-yellow-500 text-white"
            : "border border-yellow-500 text-yellow-500"
        }`}
      >
        3
      </button>
      <button
        onClick={() => setImgHeight(400)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 400
            ? "bg-orange-500 text-white"
            : "border border-orange-500 text-orange-500"
        }`}
      >
        4
      </button>
      <button
        onClick={() => setImgHeight(500)}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          imgHeight === 500
            ? "bg-red-500 text-white"
            : "border border-red-500 text-red-500"
        }`}
      >
        5
      </button>
    </div>
  </label>
);

export default ImageQualitySelector;
