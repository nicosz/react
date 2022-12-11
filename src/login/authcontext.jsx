import { createContext, useState } from "react";
import {
    signOut,
    signInWithRedirect
} from "firebase/auth";
import { auth,provider } from "../Services/firestore"
import { useEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {



    const [user, setUser] = useState(() => auth.currentUser)

    useEffect(() => {
        const userChange = auth.onAuthStateChanged(async (user) => {
            setUser(user)
        })
        return userChange
    }, [])


    function SignIn() {
        signInWithRedirect(auth, provider);
    }

    function logOut() {
        signOut(auth)
    }

    return (
        <AuthContext.Provider value={{ user, SignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )

}