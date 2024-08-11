import {getApps ,initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAIC0bwUrt4qBdAYDBDywQdYIGrh6yA4-A",
    authDomain: "chat-with-pdf-52e0e.firebaseapp.com",
    projectId: "chat-with-pdf-52e0e",
    storageBucket: "chat-with-pdf-52e0e.appspot.com",
    messagingSenderId: "458981594946",
    appId: "1:458981594946:web:385ab1160825954c059adb"
  };

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const db = getFirestore(app);
const storage = getStorage(app);

export {db ,storage};