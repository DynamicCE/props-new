import "./App.css";
import User from "./components/User";
import Welcome from "./components/Welcome";
import ToDo from "./components/ToDo";
import UserDetails from "./User/UserDetails";
import UserAction from "./User/UserAction";
import UserProfile from "./User/UserProfile";
function App() {
  return (
    <>
      <div>
        <User
          name="erkan"
          surname="murat"
          isLoggedIn={true}
          age={23}
          section="react"
        />
        <User
          name="ali"
          surname="veli"
          isLoggedIn={false}
          age={25}
          section="angular"
        />
        <Welcome name="erkan" />
        <br />
        <ToDo todo="react çalışılacak" />
        <br />
        <ToDo todo="react tekrar edilecek" />
        <br />
        <ToDo todo="react okunacak" />
        <br />
        <ToDo todo="grafik çizilecek" />
        <br />
        <ToDo todo="Zeytin(kedim) sevilecek" />
      </div>
      <hr />
      {`User Informations`}

      <UserProfile />
    </>
  );
}

export default App;
{
  /*comment lines *
  
App ana (parent) componenttir. User, Welcome, ToDo ve UserProfile componentlerini içerir.
UserProfile da bir parent componenttir çünkü UserDetails ve UserAction componentlerini içerir.
UserDetails ve UserAction ise UserProfile'ın child (çocuk) componentleridir.
Yani, App en üst seviyede bir parent, UserProfile hem parent hem de child, UserDetails ve UserAction ise sadece child componentlerdir./

*/
}
