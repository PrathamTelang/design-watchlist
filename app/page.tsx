import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import CategoryFilter from "@/components/CategoryFilter"
import ResourceGrid from "@/components/ResourceGrid"

export default function Home() {
  return (
    <main
      className="
      min-h-screen
      bg-black
      text-white
      "
    >
      <div
        className="
        mx-auto
        max-w-7xl
        px-6
        py-12
        "
      >
        <Header />

        <div className="space-y-8">
          <SearchBar />

          <CategoryFilter />

          <ResourceGrid />
        </div>
      </div>
    </main>
  )
}