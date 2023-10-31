import { SignIn } from "../signin";
import { useUsersData } from "../../hooks/hookUsersData.js";
import { handleUserEvent } from "../../events/userEvent";
import { Session } from "../session";
import { UserService } from "../../services/userService";

export const App = () => {
  const [usersData, setUsersData] = useUsersData();

  // Handle userEvents (useEffect):
  handleUserEvent(setUsersData);

  const pseudo = UserService.GetUserPseudo(usersData);

  const isUserRegistred = pseudo && pseudo !== "unknown";

  return (
    <div>
      {isUserRegistred ? (
        <Session getAllUsers={usersData}/>
      ) : (
        <SignIn usersData={usersData} setUsersData={setUsersData} />
      )}
    </div>
  );
};
