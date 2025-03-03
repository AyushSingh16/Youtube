import React,{useEffect} from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch,useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomName } from "../utils/helper";
import { makeRandomMessage } from "../utils/helper";



const LiveChat = () => {

  const dispatch = useDispatch();
  const chatMessages = useSelector(store => store.chat.messages);

  useEffect(()=>{
    const i = setInterval(()=>{

      //API polling

      dispatch(addMessage({
        name:generateRandomName(),
        message:makeRandomMessage(20),
      }));

    },500);

    return () => clearInterval(i);

  },[])

  return (
    <div className="ml-2 p-2 border border-black w-full h-[500px] bg-gray-200 rounded-xl overflow-y-scroll flex flex-col-reverse">
      {
        chatMessages.map((c,i)=>(<ChatMessage
         name={c.name}
         key={i}
         message={c.message} 
        />))}
    </div>
  );
};

export default LiveChat;
