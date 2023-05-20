import WebSearchResults from "@components/WebSearchResults";
import Link from "next/link";

const WebSearch = async ({ searchParams }) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_API}&q=${searchParams.searchTerm}`
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
  return <div>{results && <WebSearchResults results={data} />}</div>;
};

export default WebSearch;
