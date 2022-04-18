import React from 'react';
import { useUser } from '../context/AuthContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  addDoc,
  collection,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore';

type Inputs = {
  example: string;
  exampleRequired: string;
};

function Chat() {
  const currentUser: any = useUser();

  function getProfilePicUrl() {
    return currentUser.photoURL || '/images/profile_placeholder.png';
  }
  function getUserName() {
    return currentUser.displayName;
  }

  async function saveMessage(messageText: string) {
    try {
      await addDoc(collection(getFirestore(), 'messages'), {
        name: getUserName(),
        text: messageText,
        profilePicUrl: getProfilePicUrl(),
        timestamp: serverTimestamp(),
      });
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="rounded-md bg-purple-400"
        {...register('exampleRequired', { required: true })}
      />
      <input className=" " type="submit" value="Send" />
    </form>
  );
}
export default Chat;
