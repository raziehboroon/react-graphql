import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_USERS = gql`
  query {
    users {
      data {
        id
        name
        email
      }
    }
  }
`;
const Users = () => {
  const { data, error, loading } = useQuery(GET_USERS);
  console.log(data);
  console.log(error);
  console.log(loading);

  if (loading) {
    return <h3>loading...</h3>;
  }
  if (error) {
    return "something went wronge...";
  }
  return (
    <div>
      {data.users.data.map((user) => (
        <div key={user.id}>
          <h3>{user.name} </h3>
        </div>
      ))}
    </div>
  );
};

export default Users;
