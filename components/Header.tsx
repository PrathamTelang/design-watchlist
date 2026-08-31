"use client";

import { videos } from "@/data/videos";
import { useState } from "react";
import SubmitResourceModal from "./SubmitResourceModal";
import Link from "next/link";

export default function Header() {

  const [open, setOpen] =
  useState(false);

  return (
    <header className="mb-8">
      <div className="flex items-center justify-between">
        <Link href="/">
  <h1 className="text-2xl font-serif italic cursor-pointer">
    Design Watchlist
  </h1>
</Link>

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