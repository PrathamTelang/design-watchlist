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
  const [category, setCategory] = useState("");
  const [tags, setTags] = useState("");

  const [preview, setPreview] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  async function loadPreview(url: string) {
    if (!url.includes("youtube")) {
      setPreview(null);
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/youtube", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();
      setPreview(data);
    } catch {
      setPreview(null);
    }

    setLoading(false);
  }

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    console.log({
      url,
      category,
      tags,
    });

    alert("Resource submitted!");
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-950 p-8">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-lg font-semibold text-white">
              Submit a resource
            </h2>

            <p className="mt-1 text-sm text-[#8E8E8E]">
              Recommend a useful resource for the community.
            </p>
          </div>

          <button
            onClick={onClose}
            className="text-[#8E8E8E] transition hover:text-zinc-300 cursor-pointer"
          >
            Close
          </button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-8 space-y-6"
        >
          {/* Link */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Link
            </label>

            <input
              value={url}
              onChange={(e) => {
                setUrl(e.target.value);
                loadPreview(e.target.value);
              }}
              placeholder="https://..."
              className="
                w-full
                rounded-lg
                bg-zinc-900
                px-3
                py-2
                text-white
                placeholder:text-[#8E8E8E]
                placeholder:text-sm
                focus:border-none
                focus:outline-none
              "
            />
          </div>

          {loading && (
            <p className="text-sm text-[#8E8E8E]">
              Loading preview...
            </p>
          )}

          {preview && (
            <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900">
              <img
                src={preview.thumbnail_url}
                alt={preview.title}
                className="w-full"
              />

              <div className="p-4">
                <h3 className="font-medium text-white">
                  {preview.title}
                </h3>

                <p className="mt-1 text-sm text-[#8E8E8E]">
                  {preview.author_name}
                </p>
              </div>
            </div>
          )}

          {/* Category */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Category
            </label>

            <input
              value={category}
              onChange={(e) =>
                setCategory(e.target.value)
              }
              placeholder="Product Design, Typography, Motion..."
              className="
                w-full
                rounded-lg
                bg-zinc-900
                px-3
                py-2
                text-white
                placeholder:text-[#8E8E8E]
                placeholder:text-sm
                focus:border-none
                focus:outline-none
              "
            />
          </div>

          {/* Tags */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Tags
            </label>

            <input
              value={tags}
              onChange={(e) =>
                setTags(e.target.value)
              }
              placeholder="Design Thinking, UX, Interaction"
              className="
                w-full
                rounded-lg
                bg-zinc-900
                px-3
                py-2
                text-white
                placeholder:text-[#8E8E8E]
                placeholder:text-sm
                focus:border-none
                focus:outline-none
              "
            />
          </div>

          {/* Notes */}
          <div>
            <label className="mb-2 block text-sm text-zinc-300">
              Why should it be included?
            </label>

            <textarea
              rows={6}
              placeholder="Tell us why this resource is valuable..."
              className="
                w-full
                rounded-lg
                bg-zinc-900
                px-3
                py-2
                text-white
                placeholder:text-[#8E8E8E]
                placeholder:text-sm
                focus:border-none
                focus:outline-none
              "
            />
          </div>

          <button
            type="submit"
            className="
              w-full
              rounded-lg
              bg-white
              py-2
              cursor-pointer
              font-medium
              text-black
              transition
              hover:bg-zinc-200
            "
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}