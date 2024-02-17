import { useEffect, useRef } from "react";

const ChatMessage = ({ pseudo, client, content }) => {
  const userStyle = {
    target: {
      text: "text-start",
      bgColor: "bg-[#f7f7f7]",
      textColor: "text-[#000000dc]",
      arrowColor: "text-[#f7f7f7]",
    },
    me: {
      text: "text-end",
      bgColor: "bg-[#4c7dfe]",
      textColor: "text-[#fff]",
      arrowColor: "text-[#4c7dfe]",
    },
  };

  const containerStyle = {
    target: "justify-start",
    me: "justify-end",
  };

  return (
    <div className={`flex items-center ${containerStyle[client]} m-2 mx-4`}>
      <div className={`flex flex-col ${userStyle[client].text}`}>
        <p className="px-2">{pseudo}</p>
        <div className="flex flex-col">
          <div className={`px-2 ${userStyle[client].arrowColor} `}>▲</div>
          <p
            className={`${userStyle[client].textColor} ${userStyle[client].bgColor} p-4 mt-[-0.5rem] rounded-xl font-semibold`}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export const Chat = ({ pseudo, client, content }) => {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [content]); // Scroll to bottom when content changes

  return (
    <>
      <ChatMessage pseudo={pseudo} client={client} content={content} />
      <div ref={messagesEndRef} />
    </>
  );
};
