export interface AuthRegisterModel {
    username: string;
    email: string;
    password: string;
}

class AuthService_ {
    async login() {}
    async logout() {}
    async register(dto: AuthRegisterModel) {}
}

export const AuthService = new AuthService_();

