import "@app/globals.css";
import SearchHeader from "@components/SearchHeader";
import SearchOptions from "@components/SearchOptions";

export default function SearchLayout({ children }) {
  return (
    <div>
      <div className="pb-4 border-b">
        <SearchHeader />
        <SearchOptions />
      </div>
      {children}
    </div>
  );
}
