import { useState } from "react";
import { MdSearch } from "react-icons/md";
export const SearchBar = () => {
  const [text, setText] = useState("");
  return (
    <div className="search-bar">
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <button
        onClick={() => {
          alert(text);
        }}
      >
        <div>
          <MdSearch className="icon" />
        </div>
      </button>
    </div>
  );
};
