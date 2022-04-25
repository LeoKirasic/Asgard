import { db } from '../firebase';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';

async function getMessages() {
  const messagesRef = collection(db, 'messages');
  const messagesQuery = query(
    messagesRef,
    orderBy('timestamp', 'desc'),
    limit(10)
  );
  let messages: Array<object> = [];
  return new Promise((resolve, reject) => {
    getDocs(messagesQuery).then((snapshot) => {
      snapshot.docs.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
        messages.sort((a, b) => (a as any).timestamp - (b as any).timestamp);
      });
      resolve(messages);
    });
  });
}

export default getMessages;
