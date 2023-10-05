import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendEmailVerification, sendPasswordResetEmail, updateProfile } from "firebase/auth";
import { firebaseAuth } from "../firebase"
import { DatabaseService } from "./DatabaseService";

export class AuthenticationService {

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
                userId: user.uid 
            }
        } catch (error) {
            console.log(error)
            throw new Error(this.parseErrors(error.code))
        }
    }

    static async register({username, email, password}) {
        try {
            const {user} = await createUserWithEmailAndPassword(
                firebaseAuth,
                email,
                password
            );

            await updateProfile(user, {
                displayName: username
            })

            // Save the user in our database
            await DatabaseService.createUser({email, username, userId: user.uid});

            return user;
        } catch (error) {
            console.log("auth error: ", error)
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
        try { 
            return sendEmailVerification(firebaseAuth.currentUser)    
        } catch (error) {
            throw new Error(this.parseErrors(error.code))
        } 
    }

    static sendPasswordResetEmail($email) {
        try { 
            return sendPasswordResetEmail(firebaseAuth, $email)    
        } catch (error) {
            throw new Error(this.parseErrors(error.code))
        } 
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