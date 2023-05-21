import React from "react";
import Pagination from "./Pagination";

const ImageSearchResults = ({ results }) => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-16 mx-5">
        {results.items.map((result) => (
          <div key={result.link}>
            <img
              src={result.link}
              alt={result.title}
              className="max-h-40 rounded-lg cursor-pointer object-contain"
            />
            <div className="mt-4">
              <h2 className="text-xs text-gray-500">{result.displayLink}</h2>
              <p className="text-clip text-gray-600 text-sm">{result.title}</p>
            </div>
          </div>
        ))}
        {console.log(results)}
      </div>
      <Pagination />
    </div>
  );
};

export default ImageSearchResults;
