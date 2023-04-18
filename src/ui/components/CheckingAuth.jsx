import { CircularProgress, Grid } from '@mui/material'

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor:'primary.main', padding: 4 }}
    >
      <Grid 
        item
        sx={{ width: { sm: 450 } }}
      >
        <CircularProgress color='warning' />
      </Grid>
    </Grid>
  )
}
