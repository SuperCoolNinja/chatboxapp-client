import { useState } from "react";

export const useUsersData = () => {
  const [usersData, setUsersData] = useState([
    {
      id: "", // Will contain the user unique token.
      pseudo: "", // Will contain the user pseudo from the form.
    },
  ]);

  return [usersData, setUsersData];
};
