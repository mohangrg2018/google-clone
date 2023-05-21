import Link from "next/link";
import React from "react";

const ImageSearchResults = ({ results }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 py-24 gap-10 ">
      {results.items.map((result) => (
        <div key={result.link}>
          <div className="flex flex-col gap-2">
            <Link href={result.image.contextLink}>
              <img
                src={result.link}
                alt={result.title}
                className="h-60 rounded-xl"
              />
            </Link>
            <Link href={result.image.contextLink}>
              <h2 className="hover:underline truncate text-xl">
                {result.title}
              </h2>
            </Link>
            <Link href={result.image.contextLink}>
              <p className="hover:underline text-gray-600">
                {result.displayLink}
              </p>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageSearchResults;
