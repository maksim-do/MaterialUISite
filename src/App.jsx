import {
  AppBar,
  Typography,
  Container,
  Toolbar,
  IconButton,
  Box,
  Button,
} from '@material-ui/core';
//  import Button from '@material-ui/core/Button';
import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const headersData = [
  {
    label: 'Университеты',
    href: '/universities',
  },
  {
    label: 'Специальности',
    href: '/specializations',
  },
  {
    label: 'Профессии',
    href: '/professions',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {},
  container: {
    backgroundColor: '#FFFFFF',
    padding: 0,
  },
  menuButten: {
    color: '#023047',
    [theme.breakpoints.up('tablet')]: {
      display: 'none',
    },
  },
  menuButtenIcon: {
    fontSize: '32px',
  },
  fill: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.up('tablet')]: {
      marginLeft: theme.spacing(2),
    },
    [theme.breakpoints.up('desktop')]: {
      fontSize: '27px',
    },
  },
  navButton: {
    color: '#023047',
    fontStyle: 'normal',
    fontSize: '12px',
    marginTop: '5px',
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      marginTop: '8px',
    },
  },

  toolBar: {},

  nav: {
    marginLeft: theme.spacing(10),
  },

  header: {
    boxShadow: 'none',
  },
}));

function Nav() {
  const classes = useStyles();
  const ListNav = headersData.map(({ label, href }) => (
    <Button
      className={classes.navButton}
      {...{ key: label, color: 'inherit', to: href }}
    >
      {label}
    </Button>
  ));

  return (
    <Box
      display={{ mobile: 'none', tablet: 'block', desktop: 'block' }}
      className={classes.nav}
    >
      {ListNav}
    </Box>
  );
}

function App() {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.up('tablet'));
  return (
    <>
      <AppBar className={classes.header} position="fixed">
        <Container className={classes.container} fixed={isMobile}>
          <Toolbar className={classes.toolBar}>
            <Typography className={classes.title} variant="h6">
              Унивитрина
            </Typography>
            <Box
              className={classes.fill}
              display={{ mobile: 'block', tablet: 'none', desktop: 'none' }}
            />
            <Nav />
            <IconButton
              edge="start"
              color="inherit"
              area-label="menu"
              className={classes.menuButten}
            >
              <MenuIcon className={classes.menuButtenIcon} />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

export default App;
