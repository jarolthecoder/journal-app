import { loginWithEmailAndPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
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

    const {ok, uid, photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});
    
    if(!ok) return dispatch(logout({errorMessage}));

    dispatch(login({uid, displayName, email, photoURL}));
  }
}

export const startLoginWithEmailAndPassword = ({email, password}) => {
  return async(dispatch) => {
    dispatch(checkingCredentials());

    const result = await loginWithEmailAndPassword({email, password});
    if(!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  }
}

export const startLogout = () => {
  return async(dispatch) => {
    await logoutFirebase();

    dispatch(logout());
  }
}