import {UserDAO} from "../dao/user"

export class UserService {
    
    private userDAO = new UserDAO()

    async getAllUsers() {
        return await this.userDAO.list()
    }
}