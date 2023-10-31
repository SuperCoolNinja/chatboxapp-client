import { useEffect } from "react";
import { socket } from "../socket";

export const handleUserEvent = (setUsersData) => {
  useEffect(() => {
    socket.on("onConnection", (users) => {
      setUsersData(users);
    });

    // Triggered when the user update a particular data like pseudo for e.g.
    socket.on("onUpdateUserList", (users) => setUsersData(users));

    // Cleanup the events :
    return () => {
      socket.off("onConnection");
      socket.off("onUpdateUserList");
    };
  }, []);
};
