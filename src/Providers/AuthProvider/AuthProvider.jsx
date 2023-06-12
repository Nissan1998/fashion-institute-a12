import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useEffect } from "react";
import { useState } from "react";
import app from "../../Firebase/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      setUser(loggedUser);
      // set jwt
      if (loggedUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: loggedUser.email,
          })
          .then((data) => {
            localStorage.setItem("access_token", data.data);
          });
      } else {
        localStorage.removeItem("access_token");
      }

      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // darkMode Toggle
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    darkMode,
    toggleDarkMode,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
