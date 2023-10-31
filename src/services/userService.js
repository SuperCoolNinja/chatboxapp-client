import { socket } from "../socket";

export const UserService = {
  /**
   * return the actual user pseudo.
   * @param {usersData[]} users[]
   * @returns {user{id : string, pseudo : string}}
   */
  GetUserPseudo(users) {
    const user = users.find((v) => v.id == socket.id);
    return user?.pseudo;
  },
};
