
export interface User {
    _id: number;
    email: string;
}

export interface AuthState {
    token: string;
    user: User | null;
    loading: boolean;
}

export const initialState: AuthState = {
    token: '',
    user: null,
    loading: false
}