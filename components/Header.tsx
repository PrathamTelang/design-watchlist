"use client";

import { videos } from "@/data/videos";
import { useState } from "react";
import SubmitResourceModal from "./SubmitResourceModal";

export default function Header() {

  const [open, setOpen] =
  useState(false);

  const categories = new Set(
  videos.map((video) => video.category)
);

  return (
    <header className="mb-14">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          Design Watchlist
        </h1>

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
        mt-8
        max-w-xl
        text-sm
        leading-7
        text-zinc-500
        "
      >
        A curated collection of videos,
        talks, documentaries, podcasts,
        and interviews worth watching.
      </p>
      <div className="mt-4 flex gap-6 text-sm text-zinc-500">
  <span>
    {videos.length} Videos
  </span>

  <span>
    {categories.size} Categories
  </span>
</div>

<SubmitResourceModal
  open={open}
  onClose={() =>
    setOpen(false)
  }
/>


    </header>
  )
}