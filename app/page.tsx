import Header from "@/components/Header"
import VideoGrid from "@/components/VideoGrid"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
      <div className="mx-auto max-w-4xl px-6 py-12">

        <Header />

<VideoGrid />

      </div>
    </main>
  )
}