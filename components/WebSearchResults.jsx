import Link from "next/link";
import React from "react";

const WebSearchResults = ({ results }) => {
  return (
    <div className="max-w-xs mx-auto sm:max-w-sm lg:max-w-6xl">
      <p className="text-gray-500 text-sm">
        About {results.searchInformation?.formattedTotalResults} results (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>
      {results.items?.map((result) => (
        <div className="flex flex-col my-8" key={result.link}>
          <div className="flex flex-col">
            <Link href={result.link} className="text-sm text-gray-800">
              {result.formattedUrl}
            </Link>
            <Link href={result.link} className="text-lg text-blue-800">
              {result.title}
            </Link>
          </div>
          <p className="text-sm text-gray-800 mt-2">{result.snippet}</p>
        </div>
      ))}
    </div>
  );
};

export default WebSearchResults;
