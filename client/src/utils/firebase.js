import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "voxkit-ai.firebaseapp.com",
  projectId: "voxkit-ai",
  storageBucket: "voxkit-ai.firebasestorage.app",
  messagingSenderId: "164864760116",
  appId: "1:164864760116:web:66784c25e92b142cd06d61",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
