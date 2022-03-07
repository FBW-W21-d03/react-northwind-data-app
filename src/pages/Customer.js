import React from "react";
import { Link, useParams } from "react-router-dom";
import { CustomerDetail } from "../components/CustomerDetail";
import customers from "../data/customers.json";
export const Customer = () => {
  const { id } = useParams();
  return (
    <>
      <CustomerDetail
        customer={customers.find((customer) => customer.customerID === id)}
      />
    </>
  );
};
