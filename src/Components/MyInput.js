import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormHelperText, TextField } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
        '& input ': {
            backgroundColor: '#e7e7e7',
            borderRadius: '5px'
        }
    },
    textField: {
        height: "300px"
    }
}));
function MyInput(props) {
    const classes = useStyles();

    return (
        <>
            <FormControl className={classes.root}>
                <TextField id={props.id} label={props.id} variant="outlined" onChange={e => props.handleOnChange(e)} {...props} />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </>
    )
}
export default MyInput;