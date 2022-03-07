import orders from "../data/orders.json";

export const CustomerDetail = ({ customer }) => {
  return (
    <>
      <h1 style={{ marginBottom: 4 }}>
        {customer.companyName} (
        <span className="text-highlight">{customer.customerID}</span>)
      </h1>
      <div style={{ marginBottom: 12 }}>
        <p className="caption">{customer.address?.street}</p>
        <p className="caption">
          {customer.address?.postalCode} {customer.address?.city}{" "}
          {customer.address?.country}
        </p>
        <p className="caption"></p>
        <p className="caption">Tel: {customer.address?.phone}</p>
        <p className="caption">
          Ansprechpartner: {customer.contactName} ({customer.contactTitle})
        </p>
      </div>
      <h1 style={{ marginBottom: 12 }}>Bestellungen</h1>
      <table>
        <tr className="headline">
          <th>Bestellnummer</th>
          <th>Bestelldatum</th>
          <th>Lieferadresse</th>
        </tr>
        {orders
          .filter((m) => m.customerID === customer.customerID)
          .sort((a, b) => (a.orderDate < b.orderDate ? -1 : 1))
          .map((order) => {
            return (
              <tr>
                <td>{order.orderID}</td>
                <td>{order.orderDate.substring(0, 10)}</td>
                <td>
                  {order.shipAddress?.street} {order.shipAddress?.postalCode}{" "}
                  {order.shipAddress?.city} {order.shipAddress?.country}
                </td>
              </tr>
            );
          })}
      </table>
    </>
  );
};
