import { TurnedInNot } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"


export const Sidebar = ({ drawerWidth }) => {

  const {displayName, email} = useSelector(state => state.auth)

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      <Drawer 
        variant="permanent" // temporary
        open
        sx={{
          display: { xs: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
        }}
      >
        <Toolbar sx={{flexDirection: 'column', alignItems: 'flex-start'}}>
          <Typography variant="h6" noWrap>
            { displayName }
          </Typography>
          <Typography noWrap sx={{opacity: 0.7}}>
            { email }
          </Typography>
        </Toolbar>
        <Divider />
        <List>
          {
            ['January', 'February', 'March'].map(text => (
              <ListItem key={ text } disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <TurnedInNot />
                  </ListItemIcon>
                  <Grid container flexDirection="column">
                    <ListItemText primary={ text } />
                    <ListItemText secondary={ 'Link description' } />
                  </Grid>
                </ListItemButton>
              </ListItem>
            ))
          }
        </List>
      </Drawer>
    </Box>
  )
}
