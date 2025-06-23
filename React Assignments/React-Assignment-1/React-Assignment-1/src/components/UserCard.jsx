import React from "react";
import UserDetails from "./UserDetails";
import "./UserCard.css";
const UserCard = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <UserDetails email={user.email} phnNo={user.phnNo} city={user.city} />
    </div>
  );
};

export default UserCard;
