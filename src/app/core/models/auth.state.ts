import { UserModel } from "./user.interface";

export interface AuthState {
    loading: boolean;
    isLoggedIn: boolean;
    user: UserModel | null
}