import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCgjKutcKvf82mj_Ka4g3mWlyBOb_IcaG4',
  authDomain: 'nextfire-335fd.firebaseapp.com',
  projectId: 'nextfire-335fd',
  storageBucket: 'nextfire-335fd.appspot.com',
  messagingSenderId: '443391625823',
  appId: '1:443391625823:web:cb89e378551c8cbfb429ea',
  measurementId: 'G-S7E77CY2QJ',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
