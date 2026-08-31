"use client";

type Props = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() =>
            onCategoryChange(category)
          }
          className={`
            rounded-full
            border
            px-4
            py-2
            text-sm
            transition

            ${
              activeCategory === category
                ? "border-white text-white"
                : "border-zinc-800 text-zinc-500 hover:text-white"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}