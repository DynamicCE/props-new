import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import User from "./components/User";
import Welcome from "./components/Welcome";
import ToDo from "./components/ToDo";
import UserProfile from "./User/UserProfile";
import Settings from "./User/Settings";
import UserDetails from "./User/UserDetails";

function App() {
  return (
    <Router>
      <div>
        <User
          name="erkan"
          surname="murat"
          isLoggedIn={true}
          age={23}
          section="react"
        />
        {/* ... diğer componentler */}
        <UserProfile />
        <Routes>
          <Route path="/settings" element={<Settings />} />
          <Route path="/userdetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
