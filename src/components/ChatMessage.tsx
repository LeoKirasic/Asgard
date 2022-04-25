import React from 'react';

interface ChatProps {
  id: string;
  timestamp: Date;
  name: string;
  text: string;
  profilePicUrl: string;
}

function ChatMessage(props: ChatProps) {
  return (
    <div>
      <img
        src={
          props.profilePicUrl ||
          'https://api.adorable.io/avatars/23/abott@adorable.png'
        }
      />
      <p>{props.text}</p>
    </div>
  );
}
export default ChatMessage;
