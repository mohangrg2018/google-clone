"use client";

import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { AiFillCamera, AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { BsFillGearFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import { HiMicrophone } from "react-icons/hi";
import Link from "next/link";

const layout = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const searchTerm = searchParams.get("searchTerm");
  const [input, setInput] = useState(searchTerm || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const handleClearInput = () => {
    setInput("");
  };

  return (
    <header className="m-4 flex items-center justify-between">
      <div className="flex items-center gap-10 w-full">
        <Link href="/">
          <Image src="/google.png" width={150} height={100} />
        </Link>
        <form
          onSubmit={handleSubmit}
          className="flex justify-between gap-4 border border-gray-300 p-2 rounded-full lg:w-[70%] shadow-md"
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            className="outline-none ml-5"
          />
          <div className="flex items-center gap-3">
            <span className="border-r border-gray-300 pr-2">
              <AiOutlineClose
                onClick={handleClearInput}
                className="cursor-pointer"
              />
            </span>
            <HiMicrophone className="cursor-pointer" />
            <AiFillCamera className="cursor-pointer" />
            <AiOutlineSearch
              onClick={handleSubmit}
              className="cursor-pointer"
            />
          </div>
        </form>
      </div>
      <div className="md:flex items-center gap-5 hidden">
        <BsFillGearFill />
        <BsFillGrid3X3GapFill />
        <button className="bg-blue-500 text-sm p-2 rounded-sm text-white">
          Sign In
        </button>
      </div>
    </header>
  );
};

export default layout;
