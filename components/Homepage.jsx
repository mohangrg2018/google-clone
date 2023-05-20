"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { AiFillCamera } from "react-icons/ai";

const Homepage = () => {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    router.push(`/search/web?searchTerm=${input}`);
  };

  const randomSearch = async () => {
    const response = await fetch(
      `https://random-word-api.herokuapp.com/word`
    ).then((res) => res.json());
    if (!response) return;
    router.push(`${response}`);
  };

  return (
    <section className="flex flex-col items-center">
      <Image src="/google.png" height={100} width={300} />
      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-between w-[90%] sm:w-[80%] md:w-[60%] border border-gray-200 py-2 px-3 rounded-full"
      >
        <AiOutlineSearch className="text-xl text-gray-400" />
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          className="flex-1 outline-none ml-3"
        />
        <section className="flex gap-4 text-xl text-gray-500">
          <HiMicrophone />
          <AiFillCamera />
        </section>
      </form>
      <section className="flex gap-3 mt-8 text-sm">
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-[#F8F9FA] p-2 hover:ring-1 ring-gray-200 rounded-sm hover:shadow-sm"
        >
          Google Search
        </button>
        <button
          type="button"
          onClick={randomSearch}
          className="bg-[#F8F9FA] p-2 hover:ring-1 ring-gray-200 rounded-sm hover:shadow-sm"
        >
          I'm Feeling Lucky
        </button>
      </section>
    </section>
  );
};

export default Homepage;
