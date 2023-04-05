import { Link as RouterLink } from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Button, Grid, Link, TextField, Typography, useFormControl } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'

const formData = {
  email: 'jarol@google.com',
  password: '12345',
  displayName: 'Jarol Riera'
}

const formValidations = {
  email: ''
}

export const Register = () => {

  const {displayName, email, password, onInputChange, formState } = useForm(formData);

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
  }

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={ 12 } sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Enter full name"
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ true }
              helperText="Name is required"        
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
            <Grid item xs={ 12 }>
              <Button 
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
