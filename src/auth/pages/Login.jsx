import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch } from 'react-redux'
import { checkingAuthentication, startGoogleSignIn } from '../../store/auth/thunks'


export const Login = () => {

  const dispatch = useDispatch();

  const { email, password, onInputChange } = useForm({
    email: 'jarol@google.com',
    password: '12345'
  });

  const onFormSubmit = (event) => {
    event.preventDefault();
    console.log({email, password});
    dispatch(checkingAuthentication());
  }

  const onGoogleSignIn = () => {
    console.log('google sign in');
    dispatch(startGoogleSignIn());
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={ onFormSubmit }>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="Email@example.com"
              name="email"
              value={ email }
              onChange={ onInputChange }
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
              fullWidth
            />
          </Grid>
          <Grid container spacing={ 2 } sx={{ my: 2 }}>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={ 12 } sm={ 6 }>
              <Button 
                variant="contained" 
                onClick={ onGoogleSignIn }
                fullWidth
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container direction="row" justifyContent="end">
            <Link component={ RouterLink } color="inherit" to="/auth/register">
              Create an account
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}
