import {
  AppBar,
  Box,
  Typography,
  Container,
  Toolbar,
  IconButton,
  Paper,
  Grid,
} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButten: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  mainFeaturesPost: {
    position: 'relative',
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundOverlay: 'rgba(0,0,0,.4)',
  },
  mainFeaturesPostContent: {
    position: 'relative',
    padding: theme.spacing(9),
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              area-label="menu"
              className={classes.menuButten}
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              Web site witch Materiel-UI
            </Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined">
                Log In
              </Button>
            </Box>
            <Button color="secondary" variant="contained">
              Sign Up
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <main>
        <Paper
          className={classes.mainFeaturesPost}
          style={{ backgroundImage: 'url(https://source.unsplash.com/random)' }}
        >
          <Container fixed>
            <Box className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <Box className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom
                  >
                    My Sit by Material UI
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cum, provident. Id quas iure nostrum eveniet deserunt odio
                    repellat cum, nobis perferendis nemo. Magnam laboriosam
                    neque eos mollitia sunt similique laborum.
                  </Typography>
                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Paper>
      </main>
    </>
  );
}

export default App;
