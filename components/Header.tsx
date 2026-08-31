"use client";

import { videos } from "@/data/videos";
import { useState } from "react";
import SubmitResourceModal from "./SubmitResourceModal";

export default function Header() {

  const [open, setOpen] =
  useState(false);

  return (
    <header className="mb-2">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-serif italic">Design Watchlist</h1>

        <button
  onClick={() =>
    setOpen(true)
  }
  className="hover:underline underline-offset-4 cursor-pointer text-sm"
>
  Submit resource
</button>
      </div>

      <p
        className="
        mt-2
        max-w-xl
        text-sm
        leading-7
        text-[#8E8E8E]
        "
      >
        A curated collection of videos,
        talks, documentaries, podcasts,
        and interviews worth watching.
      </p>

<SubmitResourceModal
  open={open}
  onClose={() =>
    setOpen(false)
  }
/>


    </header>
  )
}