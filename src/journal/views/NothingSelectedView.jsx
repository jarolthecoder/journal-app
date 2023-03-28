import { StarOutline } from "@mui/icons-material"
import { Grid, Typography } from "@mui/material"


export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={ 0 }
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{ minHeight: '100vh', backgroundColor:'primary.main', borderRadius: 3 }}
    >
      <Grid item xs={ 12 }>
        <StarOutline sx={{ fontSize: 100, color: '#fff' }} />
      </Grid>
      <Grid item xs={ 12 }>
        <Typography variant='h5' color='#fff'>
          Selecciona o crea una entrada
        </Typography>
      </Grid>
      
    </Grid>
  )
}
