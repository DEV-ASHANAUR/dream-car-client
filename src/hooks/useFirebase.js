import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,updateProfile,signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFiFirebase from "../firebase/firebase.init";

initializeFiFirebase();

const useFirebase = () => {
    const [user,setUser] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);
    const [isUser, setIsUser] = useState(false);
    // const [user, setUser] = useState(false);
    //loader
    const[isLoading,setIsLoading] = useState(true);
    const auth = getAuth();
    // create user
    const createUser = (email,password) => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    //updateProfile
    const updateUserProfile = (name) =>{
        setIsLoading(true);
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: "https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
            }).then((result) => {
            // Profile updated!
            console.log('profile updated',auth.currentUser);

            }).catch((error) => {
            // An error occurred
            console.log('error while update',error);
            }).finally(()=>{
            setIsLoading(false);
        });
    }
    // email password login
    const emailPasswordSignIn = (email,password) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth,email,password); 
    }
    useEffect(()=>{
        const notUnsubscibe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                setUser(user);
            } else {
                // User is signed out
                setUser({}); 
                console.log('user is Sign out');
            }
            setIsLoading(false)
        });
        return() => notUnsubscibe;
    },[auth]);
    //fetch user role
    useEffect(() => {
        setIsLoading(true);
        fetch(`https://enigmatic-reaches-63281.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => {
                if(data?.role === 'user'){
                    setIsUser(true);
                    setIsAdmin(false);
                    setIsLoading(false);
                }else{
                    setIsAdmin(true);
                    setIsUser(false);
                    setIsLoading(false);
                }
            }).finally(()=>{
                setIsLoading(false);
            })
    }, [user.email])
    // save user to the db
    const saveUser = (name,email,method)=> {
        const user = {name:name,email:email,role:'user'};
        fetch('https://enigmatic-reaches-63281.herokuapp.com/user', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(result => {
            setIsAdmin(false);
            setIsUser(true);
        });
    }
    //logout user
    const logOut = ()=>{
        setIsLoading(true)
        signOut(auth)
        .then(res=>{
            setUser({});
            console.log('log out Success');
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setIsLoading(false);
        });
    }
    //return
    return {user,setUser,isLoading,setIsLoading,createUser,emailPasswordSignIn,saveUser,updateUserProfile,isAdmin,isUser,logOut}
};

export default useFirebase;