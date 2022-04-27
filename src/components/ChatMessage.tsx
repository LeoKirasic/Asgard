import React from 'react';
import convertUnixTime from '../helpers/convertUnixTime';

interface DateProperties {
  seconds: number;
  nanoseconds: number;
}

interface ChatProps {
  id: string;
  timestamp: DateProperties;
  name: string;
  text: string;
  profilePicUrl: string;
}

function ChatMessage(props: ChatProps) {
  const time = convertUnixTime(props.timestamp.seconds);
  return (
    <div className="flex flex-row items-start border-y border-stone-800 pt-2 pb-2 text-lg 2xl:text-2xl">
      <div className="flex flex-col mr-2">
        <p>{props.name}</p>
        <img
          className=" w-14 rounded-xl 2xl:w-20"
          src={
            props.profilePicUrl ||
            'https://api.adorable.io/avatars/23/abott@adorable.png'
          }
        />
      </div>
      <div className="flex flex-col">
        <div className="text-white text-opacity-50">{time}</div>
        <p>{props.text}</p>
      </div>
    </div>
  );
}
export default ChatMessage;
