import AuthService from '../services/AuthService'


class AuthController {
    private entityService: AuthService

    constructor() {
        this.entityService = new AuthService()
    }

    auth = async (request: any, response: any) => {
        try {
            const token = await this.entityService.auth(request.body)
            response.send(token)
        } catch (error: any) {
            response.status(404).send({
                "error": error.message 
            })
        }
    }
}

export default AuthController
