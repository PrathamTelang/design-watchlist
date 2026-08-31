"use client";

type Props = {
  categories: string[];
  counts: Record<string, number>;
  activeCategory: string;
  onCategoryChange: (
    category: string
  ) => void;

  totalVideos: number;
};

export default function CategoryFilter({
  categories,
  counts,
  activeCategory,
  onCategoryChange,
  totalVideos,
}: Props) {
  return (
  <>
    <div className="mb-2 flex gap-6 text-xs text-[#8E8E8E]">
      <span>
        {totalVideos} Videos
      </span>

      <span>
        {categories.length - 1} Categories
      </span>
    </div>

    <div className="mb-6 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            onCategoryChange(category)
          }
          className={`
            rounded-md
            cursor-pointer
            border
            px-4
            py-2
            text-xs
            transition

            ${
              activeCategory === category
                ? "border-gray-600 text-gray-200"
                : "border-zinc-800 text-[#8E8E8E] hover:text-white"
            }
          `}
        >
          {category} (
          {counts[category] ?? 0}
          )
        </button>
      ))}
    </div>
  </>
);
}