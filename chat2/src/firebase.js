import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAic7ZvisRdObQLcXXiEO98FggHBYE9rN4",
  authDomain: "firefly-40364.firebaseapp.com",
  projectId: "firefly-40364",
  storageBucket: "firefly-40364.appspot.com",
  messagingSenderId: "468149851988",
  appId: "1:468149851988:web:0c486fd3eb7c2e9c3edac1",
  measurementId: "G-600S8K1LQN",
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
