import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializeFiFirebase = () => {
    initializeApp(firebaseConfig);
}
export default initializeFiFirebase;