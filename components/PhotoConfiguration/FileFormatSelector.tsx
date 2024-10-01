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
  <label className="block text-white">
    <span className="mb-2 font-medium">File Format</span>
    <div className="flex gap-3">
      <button
        onClick={() => setFileFormat("png")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "png"
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-500"
        }`}
      >
        PNG
      </button>
      <button
        onClick={() => setFileFormat("webp")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "webp"
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-500"
        }`}
      >
        WEBP
      </button>
      <button
        onClick={() => setFileFormat("jpg")}
        className={`w-full rounded-lg py-2 font-medium transition-colors ${
          fileFormat === "jpg"
            ? "bg-green-500 text-white"
            : "border border-green-500 text-green-500"
        }`}
      >
        JPG
      </button>
    </div>
  </label>
);

export default FileFormatSelector;
