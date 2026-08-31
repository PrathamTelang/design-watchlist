"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search videos..."
      className="
        text-sm
        w-full
        border-b
        border-zinc-800
        bg-transparent
        py-2
        outline-none
        placeholder:text-zinc-600
      "
    />
  );
}