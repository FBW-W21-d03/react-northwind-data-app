import { SearchBar } from "./SearchBar";
export const Header = ({ title, onSearchTermChanged = () => {} }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <SearchBar onSearchTermChanged={onSearchTermChanged} />
    </div>
  );
};
