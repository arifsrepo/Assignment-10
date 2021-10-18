import { useEffect, useState } from "react";
import firebaseinit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

const useFirebase = () => {
    
    firebaseinit();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const [user, setUser] = useState([]);
    const [error,setError] = useState([])
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
        setIsLoading,
        isLoading,
        error
    }
}

export default useFirebase;