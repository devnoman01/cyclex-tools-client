import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  //   apiKey: process.env.REACT_APP_API_KEY,
  //   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  //   projectId: process.env.REACT_APP_PROJECT_ID,
  //   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  //   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  //   appId: process.env.REACT_APP_APP_ID,

  apiKey: "AIzaSyD8zYglpb3yMUFPeoXbYCcyD51Roa-b8oI",
  authDomain: "manufacturer-portal-5a42e.firebaseapp.com",
  projectId: "manufacturer-portal-5a42e",
  storageBucket: "manufacturer-portal-5a42e.appspot.com",
  messagingSenderId: "900272853467",
  appId: "1:900272853467:web:e5a68ab038f070d67797fe",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
