import { firebaseConfig } from './config'
import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, getDocs
} from 'firebase/firestore'
import { getAuth, signInWithEmailAndPassword,signOut } from 'firebase/auth';
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)

export const auth = getAuth(app);
export const logInWithEmailAndPassword = async (email, password) => {
  try { await signInWithEmailAndPassword(auth, email, password); }
  catch (err) {
    console.error(err);
  }
};
const logout = () => {
  signOut(auth);
};
export const topicRef = collection(db, 'users')