import React from "react";
const UserDetails = ({ email, phnNo, city }) => {
  return (
    <div>
      <p>
        <b>Email: </b>
        {email}
      </p>
      <p>
        <b>Phone no.:</b> 
        {phnNo}
      </p>
      <p>
        <b>City: </b>
        {city}
      </p>
    </div>
  );
};

export default UserDetails;
