import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography, useFormControl } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithPassword } from '../../store/auth/thunks'

const formData = {
  email: '',
  password: '',
  displayName: ''
}

const formValidations = {
  email: [(value) => value.includes('@'), `Email must contain '@'`],
  password: [(value) => value.length >= 6, 'Password must be 6 or more characters'],
  displayName: [(value) => value.length > 1, 'Name is required']
}

export const Register = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {status, errorMessage} = useSelector(state => state.auth);
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status]);

  const {
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid
  } = useForm(formData, formValidations);

  const onSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);

    if(!isFormValid) return;

    dispatch(startCreatingUserWithPassword(formState));
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={ onSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Enter full name"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }       
              fullWidth
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email@example.com"
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted  }
              helperText={ emailValid }  
              fullWidth
            />
          </Grid>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid && formSubmitted }
              helperText={ passwordValid }  
              fullWidth
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ my: 2 }}>
            <Grid 
              item 
              xs={ 12 }
              display={!!errorMessage ? '' : 'none'}
            >
              <Alert severity='error'>
                {errorMessage}
              </Alert>
            </Grid>
            <Grid item xs={ 12 }>
              <Button 
                disabled={isCheckingAuthentication}
                type="submit"
                variant="contained" 
                fullWidth
              >
                Create account
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Have an account?</Typography>
            <Link component={ RouterLink } color="inherit" to="/auth/login">
              Login
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
