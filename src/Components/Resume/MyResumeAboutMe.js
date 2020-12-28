import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import aboutImage from '../../Assets/about.png';
import TopBarButton from "../TopBarButton";

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 100
    },
    paddingBottom: {
        paddingBottom: 20
    }
}));
function MyResumeAboutMe() {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Box component="section" className={classes.root}>
                <Grid container>
                    <Grid item sm={7}>
                        <Typography variant="h3" color="primary" >
                            <Box fontWeight={700} paddingBottom={"30px"}>
                                Abdullah Süha Işık
                        </Box>
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            <Box fontWeight={600} paddingRight={"50px"}>
                                I’m with broad technical skill-set, very strong attention to detail, and 3 years of experience in front-end web development. Able to multitask and juggle multiple pressing projects simultaneously. On top of the latest trends and technologies. Ability to improvise, troubleshoot, take ownership, and most importantly learn new skills on the job.
                        </Box>
                        </Typography>
                    </Grid>
                    <Grid item sm={5}>
                        <img src={aboutImage} style={{ width: "100%" }}></img>
                    </Grid>
                </Grid>
                <Box component="div" padding="20px 0px 0px 0px">
                    <Grid container justify="center" alignItems="center" alignContent="center">
                        <AboutMeItem property={"Birthday"} value="04 Agust 1993" />
                        <AboutMeItem property="Lives In" value="Istanbul" />
                        <AboutMeItem property="Phone" value="0549 795 04 81" />
                        <AboutMeItem property="Skype" value="abdullahsuhaisik" />
                    </Grid>
                </Box>
                <Grid container spacing={3}>
                    <Grid item>
                        <TopBarButton name={"Download Cv"} 
                        variant="contained" color="primary" 
                        height={"200px"} fontWeight={700} 
                        fontType="subtitle2" 
                        onClick={() => { console.log("Clicked Download Cv") }} />
                    </Grid>
                    <Grid item>
                        <Box>
                        <TopBarButton name={"Contact Me"} 
                        variant="contained" 
                        color="secondary" 
                        height={"200px"} 
                        fontWeight={700} 
                        fontType="subtitle2" 
                        onClick={() => { console.log("Contact Me") }} />
                        </Box>
                 
                    </Grid>

                </Grid>
            </Box>
        </Container>

    )
}
const AboutMeItem = ({ property, value }) => {
    const classes = useStyles();
    return (
        <Grid item container alignItems="center" sm="6" className={classes.paddingBottom}>
            <Grid item>
                <Typography variant="body1" color="secondary">
                    <Box fontWeight={700} paddingRight={"5px"}>
                        {property} :
                        </Box>
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant="body1" color="textSecondary">
                    <Box fontWeight={600}>
                        {value}
                    </Box>
                </Typography>
            </Grid>
        </Grid>

    )
}
export default MyResumeAboutMe;