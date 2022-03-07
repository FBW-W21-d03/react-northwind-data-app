export const ResultList = ({
  customers = [],
  city,
  onSelectItem = () => {},
}) => {
  return (
    <>
      <h1 style={{ marginBottom: 12 }}>
        Alle Kunden aus <span className="text-highlight">{city}</span>
      </h1>
      <table>
        <tr className="headline">
          <th>Kundennr.</th>
          <th>Firma</th>
          <th className="numeric">Bestellungen</th>
          <th>Kontaktperson</th>
          <th>Adresse</th>
        </tr>
        {customers.map((customer) => {
          return (
            <tr
              onClick={() => {
                onSelectItem(customer.customerID);
              }}
            >
              <td>{customer.customerID}</td>
              <td>{customer.companyName}</td>
              <td className="numeric">??</td>
              <td>{customer.contactName}</td>
              <td>
                {customer.address?.street}, {customer.address?.postalCode}{" "}
                {customer.address?.city}
              </td>
            </tr>
          );
        })}
      </table>
    </>
  );
};
