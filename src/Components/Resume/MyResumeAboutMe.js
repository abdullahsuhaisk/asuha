import { Box, Container, Grid, makeStyles, Typography } from "@material-ui/core";
import aboutImage from '../../Assets/about.png';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: 100
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
            </Box>
        </Container>

    )
}

export default MyResumeAboutMe;