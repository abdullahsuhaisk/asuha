import { Box, Grid, makeStyles } from "@material-ui/core";
import BlogImage from '../../Assets/blog-1.jpg'

const useStyles = makeStyles((theme) => ({
    root: {
        width: "350px",
        height: "450px",
        margin:"10px"
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

    }
}));
function BlogCard() {
    const classes = useStyles();
    return (
        <Box className={classes.root} component="section">
            <img src={BlogImage} className={classes.image}></img>
            <Box component="div" className="blogContent">
                <Grid container justify="space-between">
                    <Grid item>
                        Date
                    </Grid>
                    <Grid item>
                        Comment
                    </Grid>
                </Grid>
                Business contents insurance iure ipsam ratione is a type of business...
                <Grid container justify="space-between">
                    <Grid item>
                        Date
                    </Grid>
                    <Grid item>
                        Comment
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default BlogCard;