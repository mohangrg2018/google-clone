import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { HiMicrophone } from "react-icons/hi";
import { AiFillCamera } from "react-icons/ai";

const Homepage = () => {
  return (
    <section className="flex flex-col items-center">
      <Image src="/google.png" height={100} width={300} />
      <section className="flex items-center justify-between w-[40rem] border border-gray-200 py-2 px-3 rounded-full">
        <AiOutlineSearch className="text-xl text-gray-400" />
        <input type="text" className="flex-1" />
        <section className="flex gap-4 text-xl text-gray-500">
          <HiMicrophone />
          <AiFillCamera />
        </section>
      </section>
      <section className="flex gap-3 mt-8 text-sm">
        <button
          type="button"
          className="bg-[#F8F9FA] p-2 hover:ring-1 ring-gray-200 rounded-sm hover:shadow-sm"
        >
          Google Search
        </button>
        <button
          type="button"
          className="bg-[#F8F9FA] p-2 hover:ring-1 ring-gray-200 rounded-sm hover:shadow-sm"
        >
          I'm Feeling Lucky
        </button>
      </section>
    </section>
  );
};

export default Homepage;
