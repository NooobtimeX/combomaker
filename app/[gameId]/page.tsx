"use client";
import ComboMaker from "@/components/ComboMaker";

export default function GamePage(props: { params: { gameId: string } }) {
  const { gameId } = props.params;

  return (
    <div>
      <link rel="canonical" href={`https://combomaker.net/${gameId}/`} />
      <ComboMaker gameId={gameId} />
    </div>
  );
}
