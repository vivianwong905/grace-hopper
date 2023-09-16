
export default function ContactRow({ name, email, phone, setSelectedContactId, id }) {
  return (
    <tr onClick={() => {setSelectedContactId(id)}}>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
}
