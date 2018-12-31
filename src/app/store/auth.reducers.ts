// import * as authActions from './auth.actions';
// import { User } from './auth.models';


// export type Action = authActions.All

// export function authReducer(state, action: Action) {
//     switch(action.type) {
//         case authActions.SIGNIN:
//             return {
//                 ...state,
//                 loading: false
//             }

//         case authActions.SIGNIN_SUCCESS:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case authActions.SIGNUP:
//             return {
//                 ...state,
//                 loading: false
//             }

//         case authActions.SIGNUP_SUCCESS:
//             return {
//                 ...state,
//                 loading: true
//             }

//         case authActions.LOGOUT:
//             return {
//                 ...state,
//                 loading: false
//             }

//         case authActions.LOGOUT_SUCCESS:
//             return {
//                 ...state,
//                 loading: true
//             }


//         case authActions.AUTH_ERROR:
//             return {
//                 ...state,
//                 ...action.payload,
//                 loading: true
//             }

//         default:
//             return state
//     }
// }