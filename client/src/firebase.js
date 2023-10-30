// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: 'mern-state-615a2.firebaseapp.com',
  projectId: 'mern-state-615a2',
  storageBucket: 'mern-state-615a2.appspot.com',
  messagingSenderId: '519689801195',
  appId: '1:519689801195:web:7f2afeb91963a8f3ac1dae',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
