import { IUser } from "../IUser";

export interface AuthResponese {
    accessToken: string;
    refreshToken: string;
    user: IUser;
}