"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";

interface SearchInputProps {
  onSearch: (e: string) => void;
}

export default function searchInput({ onSearch }: SearchInputProps) {
  const [search, setSearch] = useState("");
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      onSearch(search);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [search, onSearch]);
  return (
    <div className="relative mx-auto max-w-md">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search />
      </div>
      <input
        type="text"
        placeholder="Search Pokemen..."
        className="block w-full pl-10 pr-3 py-2 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:text-amber-950 focus:ring-1 focus:ring-red-500  focus:border-red-500 sm:text-sm"
        //   onChange={onSearch}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}
