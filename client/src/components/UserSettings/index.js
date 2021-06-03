import React from "react";
import { useQuery } from "@apollo/client";
import { ME } from "../../queries";

const UserSettings = () => {
  const result = useQuery(ME);

  if (result.loading) {
    return <div>loading...</div>;
  }

  console.log(result.data);

  return (
    <div>
      <button>logout</button>
      <h1>Your settings</h1>
      <div>
        <div>
          <label>Name</label>
          <input />
        </div>
        <div>
          <label>Adress</label>
          <input />
        </div>
        <div>
          <label>Phone</label>
          <input />
        </div>
        <button>Save</button>
      </div>
      <h2>orders</h2>
      <div>
        <div>DATE: 22/03/2021</div>
        <div>Pizza Prosciutto x2</div>
        <div>TOTAL: 21.97€</div>
      </div>
    </div>
  );
};

export default UserSettings;
