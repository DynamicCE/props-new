export default function User(props) {
  console.log(props);
  return (
    <div className="user">
      {props.isLoggedIn
        ? `${props.name} ${props.surname} ${props.age}`
        : "Giriş yapmadınız"}
      <h1>selam,{`alanınız: ${props.section}`}</h1>
    </div>
  );
}

{
  /*export default function User({name,surname,isLoggedIn}) {
  console.log(props);
  return (
    <div className="user">
      {props.isLoggedIn ? `${name} ${surname}` : "Giriş yapmadınız"}
    </div>
  );
}
 */
}
