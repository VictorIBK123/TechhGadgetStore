import { arrayRemove, arrayUnion, doc, DocumentData, DocumentReference, updateDoc } from "firebase/firestore";
import { db } from "../firebase-config";
import { Dispatch, SetStateAction, useContext, useRef } from "react";
import { UserDetails } from "../contexts/myContext";
var usersRef: any

const UseRemoveFromCart =async(productName: string, userEmail:string='', setRemovingFromCart: Dispatch<SetStateAction<boolean>>)=>{
    setRemovingFromCart(true)
    usersRef = doc(db, "users", userEmail);
    try {
        // Adding new products to cart using their name
        await updateDoc(usersRef, {
            cart: arrayRemove(productName)
        });
        setRemovingFromCart(false)
    } catch (error) {
        setRemovingFromCart(false)
        alert(error)
    }
    

}

export default UseRemoveFromCart