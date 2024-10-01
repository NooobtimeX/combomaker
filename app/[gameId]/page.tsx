"use client";
import { use } from "react";
import ComboMaker from "@/components/ComboMaker";

export default function GamePage(props: {
  params: Promise<{ gameId: string }>;
}) {
  const params = use(props.params);
  return (
    <div>
      <link rel="canonical" href={`https://combomaker.net/${params.gameId}/`} />
      <ComboMaker gameId={params.gameId} />
    </div>
  );
}
