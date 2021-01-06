import { Box, Container, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Banner1 from '../Assets/banner.jpg'
const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none'
        }
    },
    banner: {
        background: `url(${Banner1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "top",
        backgroundSize: "cover",
    },
    bannerContent: {
        background: "rgba(209, 65, 40, 0.8)",
        padding: '115px 0px 115px'
    }
}));

function Banner({ name }) {
    const classes = useStyles();
    return (
        <Box className={classes.banner}>
            <Box className={classes.bannerContent} >
                <Container maxWidth="md">
                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                        <Typography variant="h4">
                            <Box color="white" fontWeight="700">
                            {name}
                            </Box>
                        </Typography>
                    </Box>
                </Container>
            </Box>
        </Box>
    )
}
export default Banner;