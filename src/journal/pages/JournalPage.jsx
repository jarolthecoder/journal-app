import { AddOutlined } from "@mui/icons-material"
import { IconButton, Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">JounarlPage</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />

      <IconButton
        size="large"
        sx={{
          color:'#fff',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          bottom: 50,
          right: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }}/>
      </IconButton>
    </JournalLayout>
  )
}
