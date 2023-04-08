import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAbpIXHHZRGNUaS6XEpHOxVfzDusjDtFpc",
  authDomain: "fblthp-lost.firebaseapp.com",
  projectId: "fblthp-lost",
  storageBucket: "fblthp-lost.appspot.com",
  messagingSenderId: "611053964720",
  appId: "1:611053964720:web:88f6758f34f2b2027d1a75",
  measurementId: "G-VK69X9JFKX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
