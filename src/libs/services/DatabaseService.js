import { collection, addDoc, doc, getDoc, getDocs, query, where } from "firebase/firestore"
import { firebaseDb } from "../firebase";
export class DatabaseService {

    static async createUser({username,email,userId}) {
        try {
            // create user in database
            await addDoc(collection(firebaseDb, "users"), {
                uid: userId,
                email: email,
                username: username,
                created_at: Date.now()
              });
        } catch (error) {
            console.log("database error: ", error)
            throw new Error(this.parseErrors(error.code))
        }
    }

    static async userExists(username) {
        try {
            // fetch user with the userid
            const q = query(collection(firebaseDb, "users"), where('username', '==', username));

            const querySnapshot = await getDocs(q);
            return querySnapshot.size > 0;
        } catch (error) {
            console.log("database error: ", error)
            throw new Error(this.parseErrors(error.code))
        }
    }

    static parseErrors(errorCode) {
        let message = errorCode
            
        switch (errorCode) {
            default:
                break;
        }

        return message
    }

}