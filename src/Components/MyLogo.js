import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CodeIcon from '@material-ui/icons/DeveloperMode';

const useStyles = makeStyles((theme) => ({
    myLogo: {
      width: "150px",
      height: '60px',
      backgroundColor: theme.palette.primary.light,
      border: "1px solid ",
      borderRadius: 5,
      color: 'white'
    }
  }));

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

export default Mylogo;