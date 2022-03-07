export const ResultList = ({ customers = [] }) => {
  return (
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
          <tr>
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
  );
};
