import { collection, addDoc } from "firebase/firestore"
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

    static parseErrors(errorCode) {
        let message = errorCode
            
        switch (errorCode) {
            default:
                break;
        }

        return message
    }

}