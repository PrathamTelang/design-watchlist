type Props = {
  title: string
  author: string
  thumbnail: string
  url: string
}

export default function VideoCard({
  title,
  author,
  thumbnail,
  url,
}: Props) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
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
          src={thumbnail}
          alt={title}
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
          <h3 className="font-medium">
            {title}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {author}
          </p>
        </div>
      </article>
    </a>
  )
}