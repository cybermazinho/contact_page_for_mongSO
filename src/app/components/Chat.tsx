'use client'

import { useState } from "react";
import axios from 'axios';

const Chat = ({ setModalSuport, setModalGPT, setTypeUser, setNameConversation, setFirstMessage}: any) => {

    const [message, setMessage] = useState<string>("")
    const [messages, setMessages] = useState<{ name: string; res: string }[]>([]);
    const [typing, setTyping] = useState(false);

    interface Message {
      name: string;
      res: string; 
    }

    const updateUser = () => {
      setNameConversation("Human support")
      setFirstMessage("Please wait a moment and you will be assisted by human support")
      setTypeUser("user")
      setModalGPT(false)
      setModalSuport(true)
    }

    const sendMessage = () => {
      if(message !== ""){
        setMessages((prevMessages: any) => [...prevMessages, {name: "user", res: message}]);
        gptResponse()
        setTyping(true)
        setMessage(""); 
      }
    }
    
    const gptResponse = () => {
      axios.request({
        method: "POST",
        url: "https://api.edenai.run/v2/text/question_answer",
        headers: {
          authorization:`Bearer ${process.env.KEY}`,
        },
        data: {
          texts: [
            "MongSo Inc is an innovative technology company that has been at the forefront of transformative solutions since its establishment.",
          ],
          temperature: 0.8,
          examples: [
            ["Tell me about MongSo Inc's origin?", "MongSo Inc was founded in 2010 by the dynamic duo, Alice Smith and Brian Chen. Their vision was to create a company that blends cutting-edge technology with a commitment to customer success."],
            ["How many employees does MongSo Inc have?", "MongSo Inc takes pride in its diverse and talented team, consisting of more than 1000 professionals. The team includes experts in software development, data science, cybersecurity, and more."],
            ["What are MongSo Inc's business hours?", "MongSo Inc's dedicated team operates from 8:00 AM to 7:00 PM, Monday to Friday, ensuring availability for clients across different time zones. Emergency support is available 24/7."],
            ["Can you provide information about MongSo Inc's services?", "MongSo Inc is a one-stop solution for all your technology needs. Services range from custom software development, cloud architecture, and AI integration to cybersecurity, ensuring comprehensive solutions for clients."],
            ["Tell me about MongSo Inc's commitment to innovation?", "Innovation is at the core of MongSo Inc's values. The company invests heavily in research and development, staying ahead of industry trends and providing clients with state-of-the-art solutions."],
            ["Does MongSo Inc have global offices?", "Yes, MongSo Inc has a global presence with offices in key locations around the world, including New York, London, Tokyo, and Sydney. This allows the company to cater to an international clientele."],
            ["What awards has MongSo Inc won?", "MongSo Inc has been recognized with numerous industry awards for its excellence in technology and business. Awards include 'Innovator of the Year' and 'Best Technology Solution Provider.'"],
            ["Tell me about MongSo Inc's employee culture?", "MongSo Inc fosters a collaborative and inclusive culture. The company values employee well-being, offering flexible work schedules, professional development opportunities, and a vibrant workplace environment."],
            ["What philanthropic initiatives is MongSo Inc involved in?", "MongSo Inc is committed to giving back to the community. The company supports various philanthropic initiatives, including education programs, environmental conservation, and technology access in underserved communities."],
          ],
          providers: "openai",
          question: message,
          examples_context: "MongSo Inc is synonymous with innovation, excellence, and a commitment to making a positive impact on a global scale.",
          fallback_providers: "",
        },
      })
      .then((response: any) => {
        response.data.openai.answers.map( (message: any) => {
          setMessages((prevMessages: Message[]) => [...prevMessages, {name: "gpt", res: message}]);
        })
        setTyping(false)
      })
      .catch(() => {
          setMessages((prevMessages: Message[]) => [...prevMessages, {name: "gpt", res: "An internal error has occurred, please re-ask your question or wait a few moments"}]);
      });
    }
      
    return (
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-md rounded-md animate-fade-in">
        <div className="flex items-center">
          <div>
            <p className="text-sm font-semibold text-gray-700">Support IA (GPT 3.5)</p>
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