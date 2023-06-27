import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

// const {
//     VITE_VERCEL_API_KEY,
//     VITE_VERCEL_AUTH_DOMAIN,
//     VITE_VERCEL_PROJECT_ID,
//     VITE_VERCEL_STORAGE_BUCKET,
//     VITE_VERCEL_MESSAGING_SENDDER_ID,
//     VITE_VERCEL_APP_ID,
//     VITE_VERCEL_MEASUREMENT_ID,
//   } = import.meta.env;

export const firebaseConfig = {
  apiKey: "AIzaSyDjaop_dMf76XIw9kE5rAx6GS8iB2xIGFI",
  authDomain: "telegram-bot-d339c.firebaseapp.com",
  projectId: "telegram-bot-d339c",
  storageBucket: "telegram-bot-d339c.appspot.com",
  messagingSenderId: "1063834393786",
  appId: "1:1063834393786:web:f3a8d12d6afa1f8d713683",
  measurementId: "G-2S51PS053E"
};


export const app = initializeApp(firebaseConfig);
export const myStorage = getStorage(app);
export const db = getFirestore(app);
