import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import TopBarButton from './TopBarButton'
import MyLogo from './MyLogo'
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& a': {
      textDecoration: 'none'
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
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
                <MyLogo />
              </Grid>
              <Grid item>
                <Grid container>
                  <Link to="/Resume">
                    <TopBarButton name={"Resume"} />
                  </Link>
                  <TopBarButton name={"Home"} />
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