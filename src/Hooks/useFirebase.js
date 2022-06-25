import { useEffect, useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();

    const signInUsingGoogle = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result.user)
                setUser(result.user)
            }).catch((err) => {
                console.log(err.message)
            })
    }

    // Observer on state change
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
            if(user){
                setUser(user)
            }else{
                setUser({})
            }
        })
        return () => unsubscribed;
    }, []);

    // logout from firebase user
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }


    return {
        user,
        signInUsingGoogle,
        logOut
    }

}

export default useFirebase;