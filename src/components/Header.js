import { SearchBar } from "./SearchBar";
export const Header = ({ title }) => {
  return (
    <div className="header">
      <h1 className="title">{title}</h1>
      <SearchBar />
    </div>
  );
};
