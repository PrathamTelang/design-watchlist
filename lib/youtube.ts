export async function getYoutubeMetadata(
  url: string
) {
  const response = await fetch(
    `https://www.youtube.com/oembed?url=${encodeURIComponent(
      url
    )}&format=json`,
    {
      next: {
        revalidate: 86400,
      },
    }
  )

  if (!response.ok) {
    throw new Error("Failed to fetch")
  }

  return response.json()
}