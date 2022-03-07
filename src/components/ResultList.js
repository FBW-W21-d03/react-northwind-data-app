export const ResultList = () => {
  return (
    <table>
      <tr className="headline">
        <th>Kundennr.</th>
        <th>Firma</th>
        <th className="numeric">Bestellungen</th>
        <th>Kontaktperson</th>
        <th>Adresse</th>
      </tr>
      <tr>
        <td>abcde</td>
        <td>Firma Müller</td>
        <td className="numeric">12</td>
        <td>Hans Mustermann</td>
        <td>Teststraße 12, 12345 Neustadt</td>
      </tr>
      <tr>
        <td>abcde</td>
        <td>Firma Müller</td>
        <td className="numeric">12</td>
        <td>Hans Mustermann</td>
        <td>Teststraße 12, 12345 Neustadt</td>
      </tr>
      <tr>
        <td>abcde</td>
        <td>Firma Müller</td>
        <td className="numeric">12</td>
        <td>Hans Mustermann</td>
        <td>Teststraße 12, 12345 Neustadt</td>
      </tr>
    </table>
  );
};
