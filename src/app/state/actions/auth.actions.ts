import { props, createAction } from "@ngrx/store";
import { UserModel } from "src/app/core/models/user.interface";


export const AUTHENTICATE_USER              = '[Auth] Authenticate User';
export const USER_AUTHENTICATED             = '[Auth] User Authenticated';
export const USER_NOT_AUTHENTICATED         = '[Auth] User Not Authenticated';
export const LOGOUT                         = '[Auth] Logout';


export const authenticateUser = createAction(
    AUTHENTICATE_USER,
)

export const userAuthenticated = createAction(
    USER_AUTHENTICATED,
    props<{ user: UserModel }>()
)

export const userHasLoggout = createAction(
    LOGOUT,
    props<{ userId?: string }>()
)
