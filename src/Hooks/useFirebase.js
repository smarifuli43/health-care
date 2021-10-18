import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import {
  getAuth,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

initializeAuthentication();

const useFirebase = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // google sign in
  const signInUsingGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  }
//  Sign in with email and password
  const signInWithEmailAndPass = () => {
  return signInWithEmailAndPassword(auth, email, password)
  
}
  // Create New User
  const createNewUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        setError('');
        console.log(result.user);
        setUserName();
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const setUserName = () => {
    updateProfile(auth.currentUser, {
      displayName: name,
    })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  
  // observe user state changed
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
    return () => unsubscribed;
  }, []);

  const logOut = () => {
    signOut(auth).then(() => setUser({}));
  };

  return {
    user,
    setUser,
    error,
    setName,
    setEmail,
    setPassword,
    logOut,
    signInUsingGoogle,
    createNewUser,
    signInWithEmailAndPass,
  };
};

export default useFirebase;
