import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import CodeIcon from '@material-ui/icons/DeveloperMode';
import { Box, Grid } from '@material-ui/core';
import TopBarButton from './TopBarButton'
import theme from '../Utils/theme';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  myLogo: {
    width: "150px",
    height: '60px',
    backgroundColor: theme.palette.primary.light,
    border: "1px solid ",
    borderRadius: 5,
    color: 'white'
  }
}));

export default function TopBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="background">
        <Toolbar>
          <Container>
            <Grid container justify={'space-around'} alignContent='center' alignItems="center" direction="row">
              <Grid item>
                <Mylogo />
              </Grid>
              <Grid item>
                <Grid container>
                  <TopBarButton name={"Home"} />
                  <TopBarButton name={"Resume"} />
                  <TopBarButton name={"Blogs"} />
                  <TopBarButton name={"Projects"} />
                  <TopBarButton name={"Contact"} />
                  <TopBarButton name={"Features"} variant="contained" color="primary" height={"100px"}/>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const Mylogo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.myLogo} borderColor="">
        <Box borderRadius={5} alignContent="center" textAlign="center" display="flex" justifyContent="center" alignItems="center" height="100%">
          <CodeIcon />
          <Box fontWeight="700" color="white" fontSize="10px">
            Abdullah Süha Işık
          </Box>
        </Box>
    </Box>)
}