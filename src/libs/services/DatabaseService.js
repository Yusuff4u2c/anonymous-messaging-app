
export class DatabaseService {

    static async createUser({username,email}) {
        try {
            // create user in database
        } catch (error) {
            console.log(error)
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