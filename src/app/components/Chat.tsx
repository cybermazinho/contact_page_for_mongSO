'use client'

import { useState } from "react";
import axios from 'axios';

const Chat = ({ setModalSuport, setModalGPT, setTypeUser, setNameConversation, setFirstMessage}: any) => {

    const [message, setMessage] = useState<string>("")
    const [messages, setMessages] = useState<{ name: string; res: string }[]>([]);
    const [typing, setTyping] = useState(false);

    const updateUser = () => {
      setNameConversation("Human support")
      setFirstMessage("Please wait a moment and you will be assisted by human support")
      setTypeUser("user")
      setModalGPT(false)
      setModalSuport(true)
    }

    const sendMessage = () => {
      setMessages((prevMessages: any) => [...prevMessages, {name: "user", res: message}]);
      gptResponse()
      setTyping(true)
      setMessage(""); 
    }
    
    const gptResponse = () => {
      axios.request({
        method: "POST",
        url: "https://api.edenai.run/v2/text/question_answer",
        headers: {
          authorization: "Bearer token",
        },
        data: {
          texts: [
            "Linux is a family of open-source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17.",
          ],
          temperature: 0.8,
          examples: [
            ["What is human life expectancy in the United States?", "78 years."],
          ],
          providers: "openai",
          question: message,
          examples_context: "In 2017, U.S. life expectancy was 78.6 years.",
          fallback_providers: "",
        },
      })
      .then((response: any) => {
        response.data.openai.answers.map( (message: any) => {
          setMessages((prevMessages: any) => [...prevMessages, {name: "gpt", res: message}]);
        })
        setTyping(false)
      })
      .catch(() => {
          setMessages((prevMessages: any) => [...prevMessages, {name: "gpt", res: "An internal error has occurred, please re-ask your question or wait a few moments"}]);
      });
    }
      
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in">
        <div className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-gray-700">Support aritificial intelligence (GPT 3.5)</p>
            <p className="text-xs text-gray-500"> { typing ? "Typing..." : "Online"} </p>
          </div>
        </div>
        <div className="mt-2 max-h-96 overflow-y-auto">
          <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg mt-2 max-w-[500px]">
              <p className="text-sm text-blue-800"> Hello, how can I help you today? </p>
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
            className="input-clear w-full h-16 p-2 border border-gray-300 rounded-md"
            placeholder="Enter your message..."
            value={message}
            onChange={(e: any) => setMessage(e.target.value)}
          ></textarea>
          <button onClick={sendMessage} className="chat-button mt-2 text-white py-2 px-4 rounded-md">
            Send
          </button>
          <a href="#" onClick={updateUser}  className="ml-2 text-sm text-gray-500 hover:underline">Talk to support</a>
        </div>
      </div>
    );
  };
  
export default Chat;