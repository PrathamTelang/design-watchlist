"use client";

import { useState } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SubmitResourceModal({
  open,
  onClose,
}: Props) {
  const [url, setUrl] = useState("");
  const [category, setCategory] =
    useState("");
  const [tags, setTags] = useState("");

  const [preview, setPreview] =
  useState<any>(null);

const [loading, setLoading] =
  useState(false);

  async function loadPreview(
  url: string
) {
  if (!url.includes("youtube")) {
    return;
  }

  setLoading(true);

  try {
    const response =
      await fetch(
        "/api/youtube",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            url,
          }),
        }
      );

    const data =
      await response.json();

    setPreview(data);
  } catch {
    setPreview(null);
  }

  setLoading(false);
}

  if (!open) return null;

  function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    console.log({
      url,
      category,
      tags,
    });

    alert(
      "Resource submitted!"
    );

    onClose();
  }

  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-black/80
      "
    >
      <div
        className="
        w-full
        max-w-xl
        rounded-3xl
        border
        border-zinc-800
        bg-black
        p-8
        "
      >
        <div className="flex items-center justify-between">
          <h2 className="text-2xl">
            Submit Resource
          </h2>

          <button
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-4"
        >
          <input
  value={url}
  className="
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-transparent
              px-4
              py-3
            "
  onChange={(e) => {
    setUrl(e.target.value);

    loadPreview(
      e.target.value
    );
  }}
  placeholder="YouTube URL"
/>

{loading && (
  <p className="text-zinc-500">
    Loading preview...
  </p>
)}

{preview && (
  <div
    className="
      overflow-hidden
      rounded-xl
      border
      border-zinc-800
    "
  >
    <img
      src={
        preview.thumbnail_url
      }
      alt={preview.title}
      className="
        w-full
      "
    />

    <div className="p-4">
      <h3>
        {preview.title}
      </h3>

      <p className="text-zinc-500">
        {
          preview.author_name
        }
      </p>
    </div>
  </div>
)}

          <input
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
            placeholder="Category"
            className="
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-transparent
              px-4
              py-3
            "
          />

          <input
            value={tags}
            onChange={(e) =>
              setTags(
                e.target.value
              )
            }
            placeholder="Tags (comma separated)"
            className="
              w-full
              rounded-xl
              border
              border-zinc-800
              bg-transparent
              px-4
              py-3
            "
          />

          <button
            type="submit"
            className="
              w-full
              rounded-xl
              bg-white
              py-3
              text-black
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}