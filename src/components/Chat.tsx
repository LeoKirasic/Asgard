import React, { useEffect, useState } from 'react';
import { useUser } from '../context/AuthContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';
import getMessages from '../helpers/getMessages';
import ChatMessage from './ChatMessage';
import Inputs from '../ts/interfaces/Chat.interface';

function Chat() {
  const currentUser: any = useUser();

  function getProfilePicUrl() {
    return currentUser.photoURL || '/images/profile_placeholder.png';
  }
  function getUserName() {
    return currentUser.displayName;
  }
  const [messages, setMessages] = useState<any>([]);
  const [currentMessage, setCurrentMessage] = useState<string>('');

  async function saveMessage(messageText: string) {
    try {
      await addDoc(collection(getFirestore(), 'messages'), {
        name: getUserName(),
        text: messageText,
        profilePicUrl: getProfilePicUrl(),
        timestamp: serverTimestamp(),
      });
      setCurrentMessage(messageText);
    } catch (error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) =>
    saveMessage(data.exampleRequired);

  useEffect(() => {
    const renderMessages = async () => {
      const data = await getMessages();
      setMessages(data);
    };
    console.log('useEffect Ran');

    renderMessages();
  }, [currentMessage]);

  return (
    <div>
      <div>
        {messages &&
          messages.map((message: any) => {
            return (
              <ChatMessage
                key={message.id}
                id={message.id}
                timestamp={message.timestamp}
                name={message.name}
                text={message.text}
                profilePicUrl={message.profilePicUrl}
              />
            );
          })}
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex">
        <input
          autoComplete="off"
          className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-background2"
          {...register('exampleRequired', { required: true })}
          placeholder="Message"
        />
        <input
          className="hover:text-purple-300 hover:cursor-pointer"
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
export default Chat;
