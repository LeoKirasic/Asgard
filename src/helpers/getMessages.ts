import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

async function getMessages() {
  const colRef = collection(db, 'messages');
  let messages: Array<object> = [];
  return new Promise((resolve, reject) => {
    getDocs(colRef).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      messages.sort((a, b) => (a as any).timestamp - (b as any).timestamp);
      resolve(messages);
    });
  });
}

export default getMessages;
