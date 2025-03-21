"use client";

// code that sets up the authentication context

// set up for the application
import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged, // this is a listener for when the state changes
  GithubAuthProvider,
} from "firebase/auth";
import { auth } from "./firebase";

// step 1 - create the context
const AuthContext = createContext();

// component- keeps track of the user
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // github sign in
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };

    // firebase sign out
  const firebaseSignOut = () => {
    return signOut(auth);
  };

  // if user changes, we want to rerun this code
  // currentUser updates the user to the current user
  // return code is run when the component is unmounted (navigating away from the page)
  // unsubscribe is a function that will stop the listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, [user]);

  // auth context setting up what values that will be used for this context
  // user, function to sign in and function to sign out
  // setting up for who the parent will be
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// allows us to use the context
// not being called in all the children
// created a hook around the context
// allows us to use the context in the children by calling the state
export const useUserAuth = () => {
  return useContext(AuthContext); // { user, gitHubSignIn, firebaseSignOut }
};
