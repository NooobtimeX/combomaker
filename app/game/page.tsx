"use client";

import { useState } from "react";

import DisplayGames from "@/components/section/DisplayGames";
import { games } from "@/data/games";

const GAMES_PER_PAGE = 16;

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter games based on search term
  const filteredGames = games.filter((game) =>
    game.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredGames.length / GAMES_PER_PAGE);

  const startIndex = (currentPage - 1) * GAMES_PER_PAGE;
  const endIndex = startIndex + GAMES_PER_PAGE;
  const currentGames = filteredGames.slice(startIndex, endIndex);

  const handlePageClick = (page: number) => {
    setCurrentPage(page);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Reset to first page on new search
  };

  // Logic to show page numbers with ellipsis
  const paginationRange = () => {
    const range: (number | string)[] = [];
    const showEllipsisThreshold = 2;
    const minPage = Math.max(1, currentPage - showEllipsisThreshold);
    const maxPage = Math.min(totalPages, currentPage + showEllipsisThreshold);

    if (minPage > 1) range.push(1);
    if (minPage > 2) range.push("...");

    for (let i = minPage; i <= maxPage; i++) {
      range.push(i);
    }

    if (maxPage < totalPages - 1) range.push("...");
    if (maxPage < totalPages) range.push(totalPages);

    return range;
  };

  return (
    <div className="min-h-screen">
      <link rel="canonical" href="https://combomaker.net/game/" />
      <div>
        <h1 className="mb-4 text-center text-red-500">All Games</h1>

        {/* Search input */}
        <div className="mb-4 flex justify-center">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            placeholder="Search games..."
            className="w-full max-w-md rounded-xl border border-gray-700 bg-transparent px-4 py-2"
          />
        </div>

        <DisplayGames games={currentGames} />

        {/* Pagination controls */}
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center space-x-2">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`rounded-xl px-3 py-1 ${
                currentPage === 1
                  ? "cursor-not-allowed text-gray-400"
                  : "text-red-600"
              }`}
            >
              &lt;
            </button>

            {/* Page number buttons */}
            {paginationRange().map((page, index) =>
              page === "..." ? (
                <span key={index} className="px-3 py-1 text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageClick(page as number)}
                  className={`rounded-xl px-3 py-1 ${
                    currentPage === page
                      ? "bg-red-600 text-white"
                      : "text-red-600"
                  }`}
                >
                  {page}
                </button>
              ),
            )}

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`rounded-xl px-3 py-1 ${
                currentPage === totalPages
                  ? "cursor-not-allowed text-gray-400"
                  : "text-red-600"
              }`}
            >
              &gt;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
