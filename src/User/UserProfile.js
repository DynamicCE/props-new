import UserDetails from "./UserDetails";
import UserAction from "./UserAction";

export default function UserProfile(props) {
  const userDetailsProps = {
    // Burada UserDetails bileşenine geçirmek istediğiniz props'ları tanımlayın
    name: "erkan",
    surname: "murat",
    age: 23,
    // ...
  };

  return (
    <>
      <UserDetails {...userDetailsProps} />
      <br />
      <UserAction />
    </>
  );
}
