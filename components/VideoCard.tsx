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
        rounded-2xl
        border
        border-zinc-900

        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-zinc-700
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

          group-hover:scale-105
          "
        />

        <div className="p-4">

          <div
            className="
            mb-3
            text-xs
            text-zinc-500
            uppercase
            "
          >
            {video.category}
          </div>

          <h3 className="font-medium">
            {video.title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {video.author}
          </p>

        </div>
      </article>
    </Link>
  )
}