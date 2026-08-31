import Header from "@/components/Header"
import SearchBar from "@/components/SearchBar"
import VideoGrid from "@/components/VideoGrid"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">

        <Header />

        <div className="space-y-8">

          <VideoGrid />

        </div>

      </div>
    </main>
  )
}