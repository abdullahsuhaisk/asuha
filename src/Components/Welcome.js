import { Box, Button, Container, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Background from '../Assets/banner-bg.png'
import Image1 from '../Assets/image1.png'
import circleShape from '../Assets/circle-shape.png'
import startShape from '../Assets/star-shape.png'
import theme from "../Utils/theme";
import TopBarButton from './TopBarButton'
import SocialMediaIconsComponent from "./SocialMediIconComponents";

const useStyles = makeStyles((theme) => ({
    root: {
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        padding: "120px 0px"
    },
    container: {
        position: 'relative',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    imageSide: {
        background: `url(${Image1})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "470px",
        width: "100%"
    },
    circleShape: {
        background: `url(${circleShape})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        position: "absolute",
        top: "93px",
        right: "50%",
        transform: "translateX(-50%)",
        width: "20px",
        height: "20px",
        opacity: "0.5",
        animation: "hasan 4s linear infinite",
    },
    starShape: {
        background: `url(${startShape})`,
        position: "absolute",
        backgroundSize: "cover",
        right: "100px",
        bottom: "-135px",
        width: "80px",
        height: "120px",
        opacity: "0.5",
        animation: "miron 4s linear infinite",
    },
    linkIcon: {
    }
}));

function Welcome(props) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container className={classes.container} spacing={3}>
                    <Grid item className={classes.imageSide} sm={12} xs={12} md={6}>
                        <Box className={classes.circleShape}></Box>
                        <Box className={classes.starShape}></Box>
                    </Grid>
                    <Grid item sm={12} xs={12} md={6}>
                        <Box height={100} borderColor="primary">
                            <SocialMediaIconsComponent />
                        </Box>
                        <Box>
                            <Typography variant="h4" color="textPrimary">
                                <Box fontWeight="500">
                                    Welcome Dear!
                                </Box>
                            </Typography>
                            <Typography variant="h3" color="textPrimary">
                                <Box fontWeight="700">
                                    In my own hand-crafted development world.
                                </Box>
                            </Typography>
                            <Typography color="textPrimary">
                            On this web site, You can find my work, essays, and ideas. I'll try to keep updated. You can find my experimental works on FEATURE Button. Also, my ex projects, work, blogs these things inside this web site.I believe it is especially good for a JS developer. These days I am going to ahead Swift.It's a new adventure for me
                            </Typography>
                        </Box>
                        <Box width={"100%"} marginTop={5}>
                            <Grid container justify="flex-end" alignItems="center" spacing={2}>
                                <Grid item>
                                    <TopBarButton name={"Conferance"} variant="contained" color="primary" onClick={() => console.log("Feature 1")} />
                                </Grid>
                                <Grid item>
                                    <TopBarButton name={"Code"} variant="contained" color="primary" onClick={() => console.log("Feature 2")} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}
export default Welcome;