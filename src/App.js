import "./App.css";
import User from "./components/User";

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
