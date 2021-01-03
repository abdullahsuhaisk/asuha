import { Box, Button, Grid, makeStyles, Typography } from "@material-ui/core";
import CalendarTodaySharpIcon from '@material-ui/icons/CalendarTodaySharp';
import QuestionAnswerSharpIcon from '@material-ui/icons/QuestionAnswerSharp';

import BlogImage from '../../Assets/blog-1.jpg'
import TopBarButton from "../TopBarButton";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "350px",
        height: "450px",
        margin: "10px"
    },
    image: {
        width: "100%",
        height: "300px",
        borderRadius: "10px",
        boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1)",
        verticalAlign: "middle",
        position: "relative",
        marginBottom: "10px"
    },
    blogContent: {
        padding: "3px 5px 3px 5px"
    },
    blogHeader: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "15px",
        textTransform: "capitalize",
        color: "#48455a"
    },
    paddingClass: {
        padding: "0px 10px 5px 10px"
    }
}));
function BlogCard() {
    const classes = useStyles();
    return (
        <Box className={classes.root} component="section">
            <img src={BlogImage} className={classes.image}></img>
            <Box component="div" className={classes.blogContent}>
                <Grid container justify="space-between">
                    <Box component="div" className={classes.blogHeader}>
                        <CalendarTodaySharpIcon color="primary"/> Date
                    </Box>
                    <Grid item>
                        <Box component="div" className={classes.blogHeader}>
                            <QuestionAnswerSharpIcon color="primary" /> Comment Count
                        </Box>
                    </Grid>
                </Grid>
                <Typography variant="h6" color="textPrimary">
                    <Box>
                        Business contents insurance iure ipsam ratione is a type of business...
                    </Box>
                </Typography>
                <Grid container justify="space-between">
                    <Grid item>
                        <Button variant="contained">
                            Read
                        </Button>
                    </Grid>
                    <Grid item>
                        <TopBarButton name="Read"/>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BlogCard;