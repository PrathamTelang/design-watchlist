import { videos } from "@/data/videos"
import { getYoutubeMetadata } from "@/lib/youtube"
import VideoLibrary from "./VideoLibrary"

export default async function VideoGrid() {
  const resources = await Promise.all(
    videos.map(async (video) => {
      const metadata =
        await getYoutubeMetadata(video.url)

      return {
        ...video,

        id: video.id,

        title: metadata.title,

        author: metadata.author_name,

        thumbnail:
          metadata.thumbnail_url,
      }
    })
  )

  return (
    <VideoLibrary videos={resources} />
  )
}