import { Grid, Typography } from "@mui/material"


export const NoteView = () => {
  return (
    <Grid container direction='row' sx={{ mb: 1 }}>
      <Grid>
        <Typography fontSize={ 39 } fontWeight="light">Aug 28, 2023</Typography>
      </Grid>
    </Grid>
  )
}
