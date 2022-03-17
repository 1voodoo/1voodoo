import $api from "../http";
import { AxiosResponse } from "axios";
import { AuthResponese } from "../models/response/AuthResponse";

export default class AuthService {
    static async login(email: string, password:string): Promise<AxiosResponse<AuthResponese>> {
        return $api.post<AuthResponese>('/login', {email, password})
          
    }

    static async registration(email: string, password:string): Promise<AxiosResponse<AuthResponese>> {
        return $api.post<AuthResponese>('/registration', {email, password})
          
    }
    static async logout(): Promise<void> {
        return $api.post('/logout')
          
    }
}

