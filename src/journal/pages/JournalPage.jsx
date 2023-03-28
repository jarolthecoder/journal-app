import { Typography } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/* <Typography variant="h1">JounarlPage</Typography> */}

      {/* <NothingSelectedView /> */}
      <NoteView />
    </JournalLayout>
  )
}
