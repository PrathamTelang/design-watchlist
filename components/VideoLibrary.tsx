"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import VideoCard from "./VideoCard";

type Props = {
  videos: any[];
};

export default function VideoLibrary({
  videos,
}: Props) {
  const [search, setSearch] = useState("");

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const query = search.toLowerCase();

      return (
        video.title.toLowerCase().includes(query) ||
        video.author.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query)
      );
    });
  }, [search, videos]);

  return (
    <>
      <SearchBar
        value={search}
        onChange={setSearch}
      />

      <div
        className="
        mt-8
        grid
        gap-6
        md:grid-cols-2
        lg:grid-cols-3
        "
      >
        {filteredVideos.map((video) => (
          <VideoCard
            key={video.id}
            video={video}
          />
        ))}
      </div>
    </>
  );
}