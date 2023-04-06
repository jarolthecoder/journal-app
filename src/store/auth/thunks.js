import { registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  }
}

export const startCreatingUserWithPassword = ({email, password, displayName}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());

    const resp = await registerUserWithEmailPassword({email, password, displayName});
    console.log(resp)
  }
}