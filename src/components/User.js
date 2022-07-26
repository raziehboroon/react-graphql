import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

function User() {
  const [id, setId] = useState(2);

  const handleInput = (event) => {
    setId(event.target.value);
  };
  const GET_USER = gql`
    query getUser($id: ID!) {
      user(id: $id) {
        id
        name
        email
        phone
      }
    }
  `;
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id: id },
  });
  console.log({ loading, error, data });
  return (
    <div>
      <input value={id} onChange={handleInput} />
    </div>
  );
}

export default User;
