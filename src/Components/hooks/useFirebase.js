import { useEffect, useState } from "react";
import firebaseinit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

const useFirebase = () => {
    
    firebaseinit();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [error,setError] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    
    useEffect(()=>{
        const unsibscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log('User Found');
                setUser(user);
            } else {
                console.log('User Not Found');
                setUser({});
            }
            setIsLoading(false);
          });
          return () => unsibscribed;
    },[])

    const googleSignin = () => {
        setIsLoading(true);
        return signInWithPopup(auth, provider);
    }

    const emailSignin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setEmail({});
                setPassword({});
            })
            .catch((error) => {
                setError(error.message);
            });
        }

    const createUser = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setUser(user);
                setEmail({});
                setPassword({});
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    const logout = () =>{
        const auth = getAuth();
            signOut(auth).then(() => {
                setUser([]);
            }).catch((error) => {
                setError(error.message);
            })
            .finally(()=> setIsLoading(false));
        }

    return{
        user,
        googleSignin,
        setUser,
        logout,
        emailSignin,
        createUser,
        setIsLoading,
        isLoading,
        setEmail,
        setPassword,
        error
    }
}

export default useFirebase;