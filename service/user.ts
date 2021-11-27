import {UserDAO} from "../dao/user"
import User from "../interface/user"

export class UserService {
    
    private userDAO = new UserDAO()

    async getAllUsers() {
        return await this.userDAO.list()
    }

    async signUp (user: any) {
        return await this.userDAO.signUp(user)
    }

    async signIn (password: String, email: String ) {
        return await this.userDAO.signIn(password, email)
    }
}