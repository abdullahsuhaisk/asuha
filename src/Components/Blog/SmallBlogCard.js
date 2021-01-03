import { Box, makeStyles } from "@material-ui/core"
import BlogImage from '../../Assets/blog-1.jpg'
import TodayIcon from '@material-ui/icons/Today'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: "100%",
        borderBottom: "1px solid #e8e8e8",
        marginBottom: "28px",
        paddingBottom: "28px",
        display: "flex",
        borderRadius: "10px"
    },
    image: {
        width: "100px",
        height: "100px",
        boxShadow: "0px 0px 0px 1px rgba(0,0,0,0.1)",
        borderRadius: "10px"
    },
    smallBlogContent: {
        padding: "10px",
        fontWeight: 700,
        color: "#48455a",
        display: "flex",
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: "70%"
    },
    date: {
        fontWeight: 500,
        fontSize: 14,
        marginLeft:20
    }
}));

function SmallBlogCard() {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <img src={BlogImage} className={classes.image} />
            <Box className={classes.smallBlogContent}>
                <span>
                    Business contents insurance is a type of business.
                </span>
                <Box display="flex" alignItems="center">
                    <TodayIcon />
                    <Box className={classes.date} component="span">
                        02 Feb 2020
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}
export default SmallBlogCard;