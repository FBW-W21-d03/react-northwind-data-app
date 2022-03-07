import { MdSearch } from "react-icons/md";
export const SearchBar = ({ title }) => {
  return (
    <div className="search-bar">
      <input type="text" />
      <button>
        <div>
          <MdSearch className="icon" />
        </div>
      </button>
    </div>
  );
};
