import { Chatbox } from "./chatbox";
import { UsersConnected } from "./usersConnected";

export const Session = ({ getAllUsers }) => {
  return (
    <div className="flex mt-16 justify-center text-center items-start">
      <UsersConnected getAllUsers={getAllUsers} />
      <Chatbox getAllUsers={getAllUsers} />
    </div>
  );
};
