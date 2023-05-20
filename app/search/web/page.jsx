import React from "react";
import { BsTypeH1 } from "react-icons/bs";

const WebSearch = async ({ searchParams }) => {
  const res = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.SEARCH_API_KEY}&cx=${process.env.CONTEXT_API}&q=${searchParams.searchTerm}`
  );

  const data = await res.json();
  const results = data.items;
  return (
    <div>{results && results.map((result) => <h1>{result.title}</h1>)}</div>
  );
};

export default WebSearch;
