export async function getYoutubeMetadata(
  url: string
) {
  try {
    const response = await fetch(
      `https://www.youtube.com/oembed?url=${encodeURIComponent(
        url
      )}&format=json`,
      {
        next: {
          revalidate: 86400,
        },
      }
    );

    if (!response.ok) {
      console.log(
        "Failed:",
        url
      );

      return null;
    }

    return response.json();
  } catch {
    return null;
  }
}