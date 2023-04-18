import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { useDispatch, useSelector } from 'react-redux'
import { CheckingAuth } from '../ui/components/CheckingAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'
import { login, logout } from '../store/auth/authSlice'

export const AppRouter = () => {

  const {status} =useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout());
      const {uid, email, displayName, photoURL} = user
      dispatch(login({uid, email, displayName, photoURL}));
    });
  }, [])
  

  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
      {/* Login & Register */}
      <Route path="/auth/*" element={ <AuthRoutes /> } />

      {/* Journal App */}
      <Route path="/*" element={ <JournalRoutes /> } />
    </Routes>
  )
}
