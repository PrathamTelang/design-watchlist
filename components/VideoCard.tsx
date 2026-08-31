import Link from "next/link"

type VideoCardProps = {
  video: {
    id: string

    title: string
    author: string
    thumbnail: string
    url: string

    category: string

    tags: string[]

    whyWatch: string

    takeaways: string[]
  }
}

export default function VideoCard({
  video,
}: VideoCardProps) {
  return (
    <Link
  href={`/video/${video.id}`}
  className="group block"
>
      <article
        className="
        overflow-hidden
        rounded-sm
        border
        border-zinc-900

        transition-all
        duration-300

        hover:bg-zinc-900
        "
      >
        <img
          src={video.thumbnail}
          alt={video.title}
          className="
          aspect-video
          w-full
          object-cover

          transition-transform
          duration-500

          "
        />

        <div className="p-2">

          <div
            className="
            mb-1
            text-xs
            text-[#8E8E8E]
            uppercase
            "
          >
            {video.category}
          </div>

          <h3 className="font-medium">
            {video.title}
          </h3>

          <p className="mt-1 text-sm text-[#8E8E8E]">
            {video.author}
          </p>

        </div>
      </article>
    </Link>
  )
}