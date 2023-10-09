import {
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { firebaseDb } from "../firebase";
export class DatabaseService {
  static async createUser({ username, email, userId }) {
    try {
      // create user in database
      await addDoc(collection(firebaseDb, "users"), {
        uid: userId,
        email: email,
        username: username,
        created_at: Date.now(),
      });
    } catch (error) {
      console.log("database error: ", error);
      throw new Error(this.parseErrors(error.code));
    }
  }

  static async fetchUser(username) {
    try {
      // fetch user with the userid
      const q = query(
        collection(firebaseDb, "users"),
        where("username", "==", username)
      );

      const querySnapshot = await getDocs(q);
      let userData = null;

      // if the username exists, querySnapshot will only contain one element
      querySnapshot.forEach((doc) => {
        userData = doc.data();
      });
      
      return userData;
    } catch (error) {
      console.log("database error: ", error);
      throw new Error(this.parseErrors(error.code));
    }
  }

  static async fetchMessages(uid) {
    console.log(uid)
    try {
      const q = query(
        collection(firebaseDb, "messages"),
        where("uid", "==", uid)
      );
        
      const querySnapshot = await getDocs(q);
      console.log("snapshot size: ",querySnapshot.size)
      let messageDetails = [];
      querySnapshot.docs.forEach((doc) => {
        const data = doc.data();
        const timestamp = data.created_at;
        const date = timestamp.toDate();
        messageDetails.push({ ...data, created_at: date });
      });
      return messageDetails;
    } catch (error) {
      console.log("database error: ", error);
      throw new Error(this.parseErrors(error.code));
    }
  }

  static async saveMessage(message, userId) {
    try {
      await addDoc(collection(firebaseDb, "messages"), {
        message: message,
        uid: userId,
        created_at: Timestamp.now(),
      });
    } catch (error) {
      console.log("database error: ", error);
      throw new Error(this.parseErrors(error.code));
    }
  }

  static parseErrors(errorCode) {
    let message = errorCode;

    switch (errorCode) {
      default:
        break;
    }

    return message;
  }
}
