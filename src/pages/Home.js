import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ResultList } from "../components/ResultList";
import customers from "../data/customers.json";

export const Home = () => {
  let [searchParams] = useSearchParams();
  const query = searchParams.get("q");
  const navigate = useNavigate();

  if (query.length === 0) {
    return <h1>Bitte geben Sie eine Stadt ein</h1>;
  }

  return (
    <>
      <ResultList
        customers={customers.filter(
          (customer) => customer.address.city === query
        )}
        city={query}
        onSelectItem={(id) => {
          navigate(`/customers/${id}`);
        }}
      />
    </>
  );
};
