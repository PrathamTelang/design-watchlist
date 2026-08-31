"use client";

import { useMemo, useState } from "react";
import SearchBar from "./SearchBar";
import VideoCard from "./VideoCard";
import CategoryFilter from "./CategoryFilter";

type Props = {
  videos: any[];
};

export default function VideoLibrary({
  videos,
}: Props) {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
  useState("All");

  const categories = [
  "All",
  ...new Set(
    videos.map((video) => video.category)
  ),
];

  const filteredVideos = useMemo(() => {
  return videos.filter((video) => {
    const matchesSearch =
      video.title
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      video.author
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "All" ||
      video.category === activeCategory;

    return (
      matchesSearch &&
      matchesCategory
    );
  });
}, [
  search,
  activeCategory,
  videos,
]);

  return (
    <>
    <CategoryFilter
  categories={categories}
  activeCategory={activeCategory}
  onCategoryChange={
    setActiveCategory
  }
/>
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