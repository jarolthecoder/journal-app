import { signInWithGoogle } from "../../firebase/providers"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
  return async(dispatch) => {

    dispatch(checkingCredentials())
  }
}

export const startGoogleSignIn = (email, password) => {
  return async(dispatch) => {

    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result) return dispatch(logout(result.errorMessage));

    dispatch(login())
  }
}