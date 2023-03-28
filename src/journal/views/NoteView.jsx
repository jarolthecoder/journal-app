import { SaveOutlined } from "@mui/icons-material"
import { Button, Grid, TextField, Typography } from "@mui/material"
import { ImageGallery } from "../components"

export const NoteView = () => {
  return (
    <Grid container direction='row' justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
      <Grid item>
        <Typography fontSize={ 39 } fontWeight="light">Aug 28, 2023</Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container sx={{ mb: 2 }}>
        <TextField
          type="text" 
          variant="filled"
          fullWidth
          label="Title"
          placeholder="Add a title"
          sx={{ border: 'none', mb: 1 }}
        />
        <TextField
          type="text" 
          variant="filled"
          fullWidth
          multiline
          placeholder="What happened today?"
          minRows={ 5 }
        />
      </Grid>

      <ImageGallery />
    </Grid>
  )
}
