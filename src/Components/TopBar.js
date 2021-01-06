import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import TopBarButton from './TopBarButton'
import MyLogo from './MyLogo'
import { Link } from 'react-router-dom';
import { routes } from '../Utils/Consts';

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

const TopBarLinkButton = ({ item, key }) => {
  console.log(item.name)
  return (
    <Link to={`${item.path || item.name}`} key={key}>
      {
        item.name === 'Features' ? <TopBarButton name={item.name} variant="contained" color="primary" height={"100px"} /> : <TopBarButton name={item.name} />
      }
    </Link>
  )
}

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
                  {
                    routes.map((item, key) => {
                      return (
                        <TopBarLinkButton item={item} key={key} />
                      )
                    })
                  }
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
}