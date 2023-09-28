import { signInWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth } from "../firebase"

export class AuthenticationService {

    static async login(email, password) {
        try {
            return await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
        } catch (error) {
            const errorCode = error.code
            let message = error.code
            
            switch (errorCode) {
                case "auth/invalid-login-credentials":
                    message = "Your email or password is incorrect"
                    break;
                default:
                    break;
            }
            
            throw new Error(message)
        }
    }

    static register() {

    }

    static logout() {

    }

    static sendVerificationEmail() {

    }

    static sendPasswordResetEmail() {

    }
}