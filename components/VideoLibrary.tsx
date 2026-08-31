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
      videos.map(
        (video) => video.category
      )
    ),
  ];

  const counts: Record<
    string,
    number
  > = {
    All: videos.length,
  };

  videos.forEach((video) => {
    counts[video.category] =
      (counts[video.category] || 0) + 1;
  });

  const filteredVideos = useMemo(() => {
    return videos.filter((video) => {
      const query =
        search.toLowerCase();

      const matchesSearch =
        video.title
          .toLowerCase()
          .includes(query) ||

        video.author
          .toLowerCase()
          .includes(query) ||

        video.category
          .toLowerCase()
          .includes(query) ||

        video.whyWatch
          .toLowerCase()
          .includes(query) ||

        video.tags.some(
          (tag: string) =>
            tag
              .toLowerCase()
              .includes(query)
        );

      const matchesCategory =
        activeCategory === "All" ||
        video.category ===
          activeCategory;

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
        counts={counts}
        activeCategory={
          activeCategory
        }
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
        {filteredVideos.map(
          (video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          )
        )}
      </div>
    </>
  );
}