'use client'
import { useState, useEffect } from "react";
import { Socket, io } from "socket.io-client";

const Support = ({nameConversation, firstMessage, typeUser}: any) => {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [message, setMessage] = useState<string>("")
  const [messages, setMessages] = useState<{ name: string; res: string }[]>([]);

  interface Message {
    name: string;
    res: string; 
  }

  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    
    newSocket.on("message", (response) => {
      setMessages((prevMessages: Message[]) => [...prevMessages, {name: response.name, res: response.res}]);
    });

    setSocket(newSocket);

    return () => {
      newSocket.off("message");
      newSocket.disconnect(); 
    };

  }, []);

    const sendMessage = () => {
      if(message !== "" && socket){
        socket.emit("message", {name: typeUser, res: message});
        setMessages((prevMessages: Message[]) => [ ...prevMessages, { name: typeUser, res: message }]);
        setMessage(""); 
      }}

    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in">
        <div className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-gray-700"> {nameConversation} </p>
          </div>
        </div>
        <div className="mt-2 max-h-96 overflow-y-auto">
          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]">
              <p className="text-sm text-blue-800"> {firstMessage} </p>
          </div>
          {
              messages.map((message, index) => (
                message.name === "user" ?
                  <div key={index} className="bg-green-100 border border-green-300 p-4 rounded-lg mt-2 max-w-[500px]">
                    <p className="text-sm text-green-800"> {message.res} </p>
                  </div>
                :
                  <div key={index} className="bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]">
                      <p className="text-sm text-blue-800"> {message.res} </p>
                  </div>
              ))
          }
        </div>
        <div className="mt-4">
          <textarea
            className="w-full h-16 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your message..."
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={sendMessage} className="chat-button mt-2 text-white py-2 px-4 rounded-md">
            Send
          </button>
        </div>
      </div>
    );
  };
  
export default Support;