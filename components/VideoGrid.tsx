import { videos } from "@/data/videos"
import { getYoutubeMetadata } from "@/lib/youtube"
import VideoCard from "./VideoCard"

export default async function VideoGrid() {
  const resources = await Promise.all(
    videos.map(async (video) => {
      const metadata =
        await getYoutubeMetadata(video.url)

      return {
        url: video.url,
        title: metadata.title,
        author: metadata.author_name,
        thumbnail:
          metadata.thumbnail_url,
      }
    })
  )

  return (
    <div
      className="
      grid
      gap-6
      md:grid-cols-2
      lg:grid-cols-3
      "
    >
      {resources.map((video) => (
        <VideoCard
          key={video.url}
          title={video.title}
          author={video.author}
          thumbnail={video.thumbnail}
          url={video.url}
        />
      ))}
    </div>
  )
}