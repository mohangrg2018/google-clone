"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchOptions = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");

  const selectTab = (tab) => {
    router.push(
      `/search/${tab === "Images" ? "images" : "web"}?searchTerm=${searchTerm}`
    );
  };
  return (
    <div className="flex gap-8 max-w-xs lg:max-w-6xl mx-auto">
      <div
        onClick={() => selectTab("All")}
        className={`flex gap-2 items-center cursor-pointer active:text-blue-500 ${
          pathname === "/search/web" && "text-blue-500 "
        }
        }`}
      >
        <AiOutlineSearch />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`cursor-pointer active:text-blue-500 ${
          pathname === "/search/images" && "text-blue-500"
        }`}
      >
        <p>Images</p>
      </div>
    </div>
  );
};

export default SearchOptions;
