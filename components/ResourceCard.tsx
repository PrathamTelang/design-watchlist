import Link from "next/link"

type Props = {
  resource: any
}

export default function ResourceCard({
  resource,
}: Props) {
  return (
    <Link
      href={`/watch/${resource.slug}`}
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

        hover:border-zinc-700
        hover:-translate-y-1
        "
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={resource.thumbnail}
            alt={resource.title}
            className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500

            group-hover:scale-105
            "
          />
        </div>

        <div className="p-5">
          <h3 className="font-medium">
            {resource.title}
          </h3>

          <p className="mt-1 text-zinc-500 text-sm">
            {resource.creator}
          </p>

          <p className="mt-3 text-xs text-zinc-600">
            {resource.duration} • {resource.type}
          </p>
        </div>
      </article>
    </Link>
  )
}