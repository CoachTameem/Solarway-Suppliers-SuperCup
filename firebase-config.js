
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD63cT9y13rvakb3YOcLTtoqpwRQ7M74Dg",
  authDomain: "solarway-suppliers-supercup.firebaseapp.com",
  projectId: "solarway-suppliers-supercup",
  storageBucket: "solarway-suppliers-supercup.firebasestorage.app",
  messagingSenderId: "238901098725",
  appId: "1:238901098725:web:129dec1700eb883be87c0c",
  measurementId: "G-HS4EJ5H51R"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
