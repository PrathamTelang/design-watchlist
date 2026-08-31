const categories = [
  "All",
  "Product Design",
  "Typography",
  "Motion",
  "Frontend",
  "Accessibility",
]

export default function CategoryFilter() {
  return (
    <div className="flex gap-2 flex-wrap">
      {categories.map((category) => (
        <button
          key={category}
          className="
          text-sm
          text-zinc-500
          hover:text-white
          transition
          "
        >
          {category}
        </button>
      ))}
    </div>
  )
}