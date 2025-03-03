import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();
  const chatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      //API polling

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20),
        })
      );
    }, 1500);

    return () => clearInterval(i);
  }, []);

  return (
    <>
    <div className="ml-2 p-2 border border-black w-full h-[500px] bg-gray-200 rounded-xl overflow-y-scroll flex flex-col-reverse">
      <div>
        {chatMessages.map((c, i) => (
          <ChatMessage name={c.name} key={i} message={c.message} />
        ))}
      </div>
    </div>
        <form className="w-full p-2 ml-2 border border-black flex" onSubmit={(e)=>{
          e.preventDefault();
          console.log("On form submit", liveMessage);
          dispatch(addMessage({
            name:"Ayush",
            message:liveMessage,
          }));
          setLiveMessage("");
        }}>
          <input className="w-80 px-2" type="text" value={liveMessage} onChange={(e)=>setLiveMessage(e.target.value)} />
          <button className="px-2 mx-2 bg-green-100">Send</button>
        </form>
    </>
  );
};

export default LiveChat;
