import React from "react";
import { Link, useParams } from "react-router-dom";

export const Customer = () => {
  const { id } = useParams();
  return (
    <>
      <h1>Customer</h1>
      <p>ID={id}</p>
      <Link to="/">Home</Link>
    </>
  );
};
