import { Chatbox } from "./chatbox";
import { UsersConnected } from "./usersConnected";

export const Session = ({ getAllUsers }) => {
  return (
    <div className="flex w-96 xl:w-full xl:flex-row flex-col mt-16 mx-auto xl:mx-0 justify-start xl:justify-center text-center items-center xl:items-start">
      <UsersConnected getAllUsers={getAllUsers} />
      <Chatbox getAllUsers={getAllUsers} />
    </div>
  );
};
