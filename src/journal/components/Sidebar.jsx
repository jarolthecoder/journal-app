import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"


export const Sidebar = ({ drawerWidth }) => {
  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer 
        variant="permanent" // temporary
        open
        sx={{
          display: { sx: 'block' },
          '& .MuiDrawer-paper': {boxSizing: 'border-box', width: { drawerWidth }}
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap>
            Jarol Riera
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            []
          }
        </List>
      </Drawer>
    </Box>
  )
}
