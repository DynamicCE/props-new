import React from "react";
import { Link } from "react-router-dom";
export default function UserAction(props) {
  return (
    <>
      <br />
      {<button>LogOut</button>}
      <br />
      <button>
        <Link to="/settings">Settings</Link>
      </button>
      ;
      <br />
      {<button>Edit Profile</button>}
    </>
  );
}
