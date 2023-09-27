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
    </>
  );
}

export default App;
