import ImageSearchResults from "@components/ImageSearchResults";
import React from "react";

const page = async ({ searchParams }) => {
  const startIndex = searchParams.start || "1";
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_API}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
  );
  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  const data = await res.json();
  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center gap-4">
        <h1>No Results Found</h1>
        <p>Try searching for something else or go back to the homepage.</p>
        <Link href="/" className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }
  return <div>{results && <ImageSearchResults results={data} />}</div>;
};

export default page;
