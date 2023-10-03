import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseAuth } from "../firebase"

export class AuthenticationService {

    static async login(email, password) {
        try {
            const { user } = await signInWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
            // console.log(credentials);
            
            return { 
                email: user.email, 
                displayName: user.displayName, 
                emailVerified: user.emailVerified, 
                userId: user.uid 
            }
        } catch (error) {
            console.log(error)
            throw new Error(this.parseErrors(error.code))
        }
    }

    static async register(email, password) {
        try {
            return await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );
        } catch (error) {
            throw new Error(this.parseErrors(error.code))
        }
    }

    static async logout() {
        try { 
            return signOut(firebaseAuth)    
        } catch (error) {
            throw new Error(this.parseErrors(error.code))
        } 
    }

    static sendVerificationEmail() {

    }

    static sendPasswordResetEmail() {

    }

    static parseErrors(errorCode) {
        let message = errorCode
            
        switch (errorCode) {
            case "auth/invalid-login-credentials":
                message = "Your email or password is incorrect"
                break;

            case "auth/email-already-in-use":
                message = "Email has already been taken."
                break;

            default:
                break;
        }

        return message
    }
}