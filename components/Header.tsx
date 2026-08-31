export default function Header() {
  return (
    <header className="mb-14">
      <div className="flex items-center justify-between">
        <h1 className="text-xl">
          Design Watchlist
        </h1>

        <button
          className="
          text-sm
          text-zinc-500
          hover:text-white
          transition
          "
        >
          Submit resource
        </button>
      </div>

      <p
        className="
        mt-8
        max-w-xl
        text-sm
        leading-7
        text-zinc-500
        "
      >
        A curated collection of videos,
        talks, documentaries, podcasts,
        and interviews worth watching.
      </p>
    </header>
  )
}