import React from "react";
import { Link, useSearchParams } from "react-router-dom";

export const Home = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q");
  return (
    <>
      <h1>Home</h1>
      <p>Query={query}</p>
      <Link to="/customers/abc">Customer abc</Link>
    </>
  );
};
