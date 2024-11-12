import React from "react";

interface BackgroundColorSelectorProps {
  color: { r: number; g: number; b: number; a: number };
  setColor: (color: { r: number; g: number; b: number; a: number }) => void;
}

const BackgroundColorSelector: React.FC<BackgroundColorSelectorProps> = ({
  color,
  setColor,
}) => (
  <div className="flex flex-col text-white">
    <span className="mb-2 font-medium">Background Color</span>
    <div className="flex gap-3">
      <button
        onClick={() => setColor({ r: 0, g: 0, b: 0, a: 0 })}
        className={`h-10 w-1/3 rounded-lg transition-colors ${
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` ===
          "rgba(0, 0, 0, 0)"
            ? "border-2 border-red-500"
            : "border border-transparent"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
      />
      <button
        onClick={() => setColor({ r: 0, g: 0, b: 0, a: 1 })}
        className={`h-10 w-1/3 rounded-lg transition-colors ${
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` ===
          "rgba(0, 0, 0, 1)"
            ? "border-2 border-red-500"
            : "border border-transparent"
        }`}
        style={{ backgroundColor: "rgba(0, 0, 0, 1)" }}
      />
      <button
        onClick={() => setColor({ r: 255, g: 255, b: 255, a: 1 })}
        className={`h-10 w-1/3 rounded-lg transition-colors ${
          `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})` ===
          "rgba(255, 255, 255, 1)"
            ? "border-2 border-red-500"
            : "border border-transparent"
        }`}
        style={{ backgroundColor: "rgba(255, 255, 255, 1)" }}
      />
    </div>
  </div>
);

export default BackgroundColorSelector;
