"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Pagination = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const startIndex = +searchParams.get("start") || 1;
  return (
    <div className="text-blue-700 flex justify-between items-center sm:justify-start sm:gap-20 py-6 mx-5">
      {startIndex >= 10 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex - 10}`}
        >
          <div>
            <AiOutlineLeft />
            <p>Previous</p>
          </div>
        </Link>
      )}
      {startIndex <= 90 && (
        <Link
          href={`${pathname}?searchTerm=${searchTerm}&start=${startIndex + 10}`}
        >
          <div>
            <AiOutlineRight />
            <p>Next</p>
          </div>
        </Link>
      )}
    </div>
  );
};

export default Pagination;
