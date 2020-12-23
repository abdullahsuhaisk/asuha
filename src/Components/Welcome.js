import { Box, Button, Container, Grid, Typography, Link } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles'
import Background from '../Assets/banner-bg.png'
import Image1 from '../Assets/image1.png'
import circleShape from '../Assets/circle-shape.png'
import startShape from '../Assets/star-shape.png'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MediumIcon from '@material-ui/icons/MenuBook';
import theme from "../Utils/theme";
import TopBarButton from './TopBarButton'

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

const socialMediaArray = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/abdullah-s%C3%BCha-i%C5%9F%C4%B1k-92b251101/',
        component: () => (<LinkedInIcon fontSize="large" style={{ color: "white" }} />)
    },
    {
        name: 'Medium',
        link: 'https://abdullahsuhaisik.medium.com/',
        component: () => (<MediumIcon fontSize="large" style={{ color: "white" }} />)
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/suhaa93',
        component: () => (<TwitterIcon fontSize="large" style={{ color: "white" }} />)
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/?hl=tr',
        component: () => (<InstagramIcon fontSize="large" style={{ color: "white" }} />)
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/suha.isik',
        component: () => (<FacebookIcon fontSize="large" style={{ color: "white" }} />)
    }
]

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
                            <SocialMediaIcons />
                        </Box>
                        <Box>
                            <Typography variant="h4" color="textPrimary">
                                <Box fontWeight="500">
                                    Welcome Dear!
                                </Box>
                            </Typography>
                            <Typography variant="h3" color="textPrimary">
                                <Box fontWeight="700">
                                    In my own hand-craftedfrontend development world.
                                </Box>
                            </Typography>
                            <Typography color="textPrimary">
                                Helping design your business and personal website build with your demand by html and wordpress. Click the demo work button, you can see my previous project.
                        </Typography>
                        </Box>
                        <Box width={"100%"} marginTop={5}>
                            <Grid container justify="flex-end" alignItems="center" spacing={2}>
                                <Grid item>
                                    <TopBarButton name={"Feature 1"} variant="contained" color="primary" onClick={() => console.log("Feature 1")} />
                                </Grid>
                                <Grid item>
                                    <TopBarButton name={"Feature 2"} variant="contained" color="primary" onClick={() => console.log("Feature 2")} />
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    )
}

function SocialMediaIconComponent(props) {
    return (
        <Grid item>
            <Link href={props.item.link}>
                <Box bgcolor={theme.palette.primary.main} padding="10px" borderRadius="50%" >
                    {props.item.component()}
                </Box>
            </Link>
        </Grid>
    )
}

function SocialMediaIcons() {
    return (
        <Grid container justify="center" alignItems="center" spacing={2} alignContent="center">
            {socialMediaArray.map(item => {
                return (<SocialMediaIconComponent item={item} key={item.name} />)
            })}
        </Grid>
    );
}

export default Welcome;