import { useState } from "react";
import { MdSearch } from "react-icons/md";
export const SearchBar = ({ onSearchTermChanged = () => {} }) => {
  const [text, setText] = useState("");
  return (
    <div className="search-bar">
      <input
        type="text"
        value={text}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            onSearchTermChanged(text);
          }
        }}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSearchTermChanged(text);
        }}
      >
        <div>
          <MdSearch className="icon" />
        </div>
      </button>
    </div>
  );
};
