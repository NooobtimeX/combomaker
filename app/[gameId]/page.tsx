"use client";
import { use } from "react";
import ComboMaker from "@/components/ComboMaker";

type Params = Promise<{ gameId: string }>;

export default function GamePage(props: { params: Params }) {
  const params = use(props.params);
  const { gameId } = params;

  return (
    <div>
      <link rel="canonical" href={`https://combomaker.net/${gameId}/`} />
      <ComboMaker gameId={gameId} />
    </div>
  );
}
