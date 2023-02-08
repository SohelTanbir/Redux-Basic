import React from "react";
import { useSelector } from "react-redux";

function Welcome() {
  const state = useSelector((state) => state);

  return (
    <div>
      <h3>User List</h3>
      <ul>
        {state.counter.users.map((user, index) => (
          <li key={index}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
  
export default Welcome; 
