import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  sendEmailVerification,
  sendPasswordResetEmail,
  updateProfile,
  getAuth,
  updateEmail,
  reauthenticateWithCredential,
  EmailAuthCredential
} from "firebase/auth";
import { firebaseAuth } from "../firebase";
import { DatabaseService } from "./DatabaseService";

export class AuthenticationService {
  static getUser() {
    const user = getAuth().currentUser;

    return {
      email: user.email,
      displayName: user.displayName,
      emailVerified: user.emailVerified,
      userId: user.uid,
    };
  }

  static async login(email, password) {
    try {
      const { user } = await signInWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      return {
        email: user.email,
        displayName: user.displayName,
        emailVerified: user.emailVerified,
        userId: user.uid,
      };
    } catch (error) {
      console.log(error);
      throw new Error(this.parseErrors(error));
    }
  }

  static async register({ username, email, password }) {
    try {
      // check if theres a user with thesame username
      const userExist = await DatabaseService.fetchUser(username);
      if (userExist) throw new Error("Username is already taken");

      const { user } = await createUserWithEmailAndPassword(
        firebaseAuth,
        email,
        password
      );

      await updateProfile(user, {
        displayName: username,
      });

      // Save the user in our database
      await DatabaseService.createUser({ email, username, userId: user.uid });

      // Send email verification
      await this.sendVerificationEmail();

      return user;
    } catch (error) {
      console.log("auth error: ", error);
      throw new Error(this.parseErrors(error));
    }
  }

  static async logout() {
    try {
      return signOut(firebaseAuth);
    } catch (error) {
      throw new Error(this.parseErrors(error));
    }
  }

  // current_email, password, new_email
  static async updateEmail(newemail) {
    try {
        // call the function to update email
        const user = await updateEmail(firebaseAuth.currentUser, newemail);
        // update the user profile (don't do it) updateProfile
        console.log(user);
        this.sendVerificationEmail();

      // return {
      //     email: user.email,
      //     displayName: user.displayName,
      //     emailVerified: false,
      //     userId: user.uid
    } catch (error) {
        console.log("email change: ",error)
    //   throw new Error(this.parseErrors(error));
    }
  }

  static sendVerificationEmail() {
    try {
      return sendEmailVerification(firebaseAuth.currentUser);
    } catch (error) {
      throw new Error(this.parseErrors(error));
    }
  }

  static sendPasswordResetEmail($email) {
    try {
      return sendPasswordResetEmail(firebaseAuth, $email);
    } catch (error) {
      throw new Error(this.parseErrors(error.code));
    }
  }

  static parseErrors(error) {
    let errorCode;
    if (error.code) {
      errorCode = error.code;
    } else errorCode = error.message;

    let message = errorCode;

    switch (errorCode) {
      case "auth/invalid-login-credentials":
        message = "Your email or password is incorrect";
        break;

      case "auth/email-already-in-use":
        message = "Email has already been taken.";
        break;

      default:
        break;
    }

    return message;
  }
}
