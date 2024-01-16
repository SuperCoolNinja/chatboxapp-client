import {UserService} from "../../services/userService";
import {socket} from "../../socket";
import {Chat} from "../chat";
import React, {useEffect, useState} from "react";

export const Chatbox = ({getAllUsers}) => {
  /**
   * messages will contain a list of object :
   * client : string
   * content : string
   */
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const user_pseudo = UserService.GetUserPseudo(getAllUsers);

  // Handle messages event :
  useEffect(() => {
    socket.on("send_message", (message, pseudo) => {
      const updatedMessages = [
        ...messages,
        {pseudo, client: "target", content: message},
      ];
      setMessages(updatedMessages);
    });

    return () => socket.off("send_message");
  });

  // OnSubmit handle message :
  const handleSubmit = () => {
    if (newMessage.trim() !== "") {
      const updatedMessages = [
        ...messages,
        {pseudo: user_pseudo, client: "me", content: newMessage},
      ];
      setMessages(updatedMessages);
      setNewMessage("");

      socket.emit("chat_message", newMessage, user_pseudo);
    }
  };

  return (
    <div className="w-full xl:w-1/2 bg-[#fff] text-[#464545b9] xl:rounded-r-2xl p-2 h-[30rem] xl:h-[35rem] shadow-xl rounded">
      <h3 className="font-bold text-[1.7rem] text-[#658fff]">Chat</h3>
      <div className="w-full h-[.1rem] bg-[#0000001c] rounded-full my-2"></div>

      <div className="flex flex-col ">
        {/* Chat */}
        <section className="h-[21rem] xl:h-[25rem] overflow-auto pb-10 ">
          {messages.map((message, index) => (
            <Chat
              pseudo={message.pseudo}
              key={index}
              client={message.client}
              content={message.content}
            />
          ))}
        </section>
        <div className="w-full h-[.1rem] bg-[#0000001c] rounded-full my-2"></div>

        {/* Chat input */}
        <section className="flex w-full justify-center items-center pt-1 gap-4">
          <input
            className="p-2 pl-10 text-start font-semibold text-[#252424] bg-[#d3d3d359] rounded-full w-10/12 focus:outline-[#fff]"
            placeholder="Write Something"
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button
            className="bg-[#658fff] text-[#fff] p-2 px-4 rounded-full font-semibold"
            onClick={handleSubmit}
          >
            Send
          </button>
        </section>
      </div>
    </div>
  );
};
