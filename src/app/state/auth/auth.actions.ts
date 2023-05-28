import { createActionGroup, emptyProps, props } from "@ngrx/store";
import { User } from "./auth.state";


export const AuthActions = createActionGroup({
    source: 'Auth',
    events: {
        'Set Token': props<{ token: string }>(),
        'Set User' : props<{ user: User }>(),
        'Remove Token' : emptyProps(),
        'Login': props<{ email: string; password: string }>(),
        'Login Success' : props<{ token: string, user: User }>(),
        'Login Error' :  emptyProps(),
        'Logout': emptyProps(),
    }
})