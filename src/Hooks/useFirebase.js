import { useState } from "react";
import initializeAuthentication from "../components/Login/Firebase/firebase.init";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

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



    return {
        user,
        signInUsingGoogle
    }

}

export default useFirebase;