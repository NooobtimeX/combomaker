// FileFormatSelector.tsx
import React from "react";

interface FileFormatSelectorProps {
  fileFormat: string;
  setFileFormat: (format: string) => void;
}

const FileFormatSelector: React.FC<FileFormatSelectorProps> = ({
  fileFormat,
  setFileFormat,
}) => (
  <div className="block text-white">
    <div className="flex gap-3">
      <button
        onClick={() => setFileFormat("png")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "png"
            ? "bg-red-500 text-white"
            : "border border-red-500 text-red-500"
        }`}
      >
        PNG
      </button>
      <button
        onClick={() => setFileFormat("webp")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "webp"
            ? "bg-red-500 text-white"
            : "border border-red-500 text-red-500"
        }`}
      >
        WEBP
      </button>
      <button
        onClick={() => setFileFormat("jpg")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "jpg"
            ? "bg-red-500 text-white"
            : "border border-red-500 text-red-500"
        }`}
      >
        JPG
      </button>
    </div>
  </div>
);

export default FileFormatSelector;
