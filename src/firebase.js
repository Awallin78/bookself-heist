import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "ISI_PUNYAMU",
  authDomain: "ISI_PUNYAMU",
  projectId: "ISI_PUNYAMU",
  storageBucket: "ISI_PUNYAMU",
  messagingSenderId: "ISI_PUNYAMU",
  appId: "ISI_PUNYAMU"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);