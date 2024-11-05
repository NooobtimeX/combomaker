"use client";

import React, { useRef, useEffect } from "react";
import { FaSave } from "react-icons/fa";
import { ComboDisplayProps, GameItem } from "@/interface/interface";

const ComboDisplay: React.FC<ComboDisplayProps> = ({
  userCreation,
  movesForGame,
  setIsModalOpen,
  handleAddItem,
  undoStack,
  setUserCreation,
  setUndoStack,
  setRedoStack,
}) => {
  const comboRef = useRef<HTMLDivElement | null>(null);

  const setImageDimensions = (img: HTMLImageElement) => {
    img.width = img.naturalWidth;
    img.height = img.naturalHeight;
  };

  useEffect(() => {
    const images = document.querySelectorAll("img[data-dynamic]");
    images.forEach((img) => {
      if (img instanceof HTMLImageElement) {
        if (img.complete) {
          setImageDimensions(img);
        } else {
          img.onload = () => setImageDimensions(img);
        }
      }
    });
  }, [userCreation, movesForGame]);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative flex min-h-[150px] flex-col rounded-lg border border-gray-700 p-4">
        {userCreation.length === 0 ? (
          <p className="text-center text-gray-400">
            Click on moves to add them to your combo
          </p>
        ) : (
          <div ref={comboRef} className="mb-4 flex flex-wrap gap-1">
            {userCreation.map((id, index) => {
              const item = movesForGame
                .flatMap((category) => category.items)
                .find((move) => move.id === id);
              return (
                item && (
                  <div
                    className="aspect-w-1 aspect-h-1 group relative"
                    key={`${id}-${index}`}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      data-dynamic
                      className="h-full max-h-5 w-full rounded-lg object-cover sm:max-h-6 md:max-h-7 lg:max-h-8 xl:max-h-9 2xl:max-h-10"
                    />
                    <span className="absolute bottom-full left-1/2 mb-1 hidden w-max -translate-x-1/2 transform rounded bg-gray-800 p-2 text-xs text-white shadow-lg group-hover:block">
                      {item.name}
                    </span>
                  </div>
                )
              );
            })}
          </div>
        )}
        <div className="absolute -bottom-5 left-1/2 flex aspect-square -translate-x-1/2 transform items-center justify-center text-gray-300">
          PREVIEW
        </div>
        <button
          className="absolute bottom-2 right-2 my-auto flex aspect-square max-h-14 w-fit items-center justify-center rounded-lg bg-green-500 p-3 text-gray-800 shadow-lg transition duration-200 disabled:cursor-not-allowed"
          onClick={() => setIsModalOpen(true)}
          disabled={userCreation.length === 0}
          aria-label="Save"
        >
          <FaSave className="m-auto" />
        </button>
      </div>
      <h2 className="text-center">Available Button</h2>
      {movesForGame.map((category) => (
        <div key={category.name} className="rounded-lg bg-gray-800 pb-2">
          <h3 className="text-center text-lg font-bold">{category.name}</h3>
          <div className="mx-auto flex flex-wrap items-center justify-center gap-1">
            {category.items.map((item: GameItem) => (
              <div key={item.id} className="group relative">
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    onClick={() =>
                      handleAddItem(
                        item,
                        userCreation,
                        undoStack,
                        setUserCreation,
                        setUndoStack,
                        setRedoStack,
                      )
                    }
                    src={item.img}
                    alt={item.name}
                    data-dynamic
                    className="h-full max-h-7 w-full cursor-pointer rounded-lg object-cover duration-300 sm:max-h-8 md:max-h-9 md:hover:brightness-50 lg:max-h-10 xl:max-h-11 2xl:max-h-12"
                  />
                </div>
                <span className="absolute bottom-full left-1/2 mb-2 hidden w-max -translate-x-1/2 transform rounded bg-gray-800 p-2 text-xs text-white shadow-lg group-hover:block">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ComboDisplay;
