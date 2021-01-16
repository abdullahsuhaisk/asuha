import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import aboutImage from '../../Assets/about.png';
import TopBarButton from "../TopBarButton";
import { useHistory } from 'react-router-dom';

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
    const history = useHistory();
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
                            I'm a computer engineer. My professional career starts in 2018. Before this, I very interesting in software so decided to go to university in a computer engineering department. I have interested in different software. But my professional career started with React Native. I developed a cross-platform mobile app for a car accessory retailer company. Then I have continued with React as a Frontend developer. Now I developing a communication application for enterprise companies. For now my tech stack  AngularJs, Cordova, and NodeJs. And I am learning Swift because I want to move to the mobile side. I am bored with Functional Programming.                            </Box>
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
                        titleColor="white"
                        onClick={() => { history.push('/Contact') }} />
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