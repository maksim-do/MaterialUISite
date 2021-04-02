import { AppBar, Box, Typography, Container, Toolbar, IconButton } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButten: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1
  }
}))
function App() {
  const classes = useStyles();
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" area-label="menu" className={classes.menuButten}>
            <MenuIcon />
          </IconButton>          
          <Typography className={classes.title} variant="h6">Web site witch Materiel-UI</Typography>
          <Box mr={3}>
            <Button color="inherit" variant="outlined">Log In</Button>            
          </Box>
          <Button color="secondary" variant="contained">Sign Up</Button>
        </Toolbar>
      </Container> 
    </AppBar>
  );
}

export default App;
