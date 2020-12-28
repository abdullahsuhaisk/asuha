import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import ExplicitIcon from '@material-ui/icons/Explicit';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    root: {
        width: 150,
        height: 150,
        boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)",
        border: "1px solid #fff",
        borderRadius: "8px",
        backgroundColor: "white",
        color: theme.palette.text.secondary
    },
    selected: {
        width: 150,
        height: 150,
        boxShadow: "0px 30px 70px 0px rgba(0,0,0,0.2)",
        border: "1px solid",
        borderRadius: "5px",
        color: "#fff",
        backgroundColor: theme.palette.primary.main
    }
}));

function IconCard({ section, setSelectedresume, selectedResume, resumeCardArray }) {
    const classes = useStyles();

    return (
        <Box component="div" className={selectedResume === section.name ? classes.selected : classes.root} display="flex" onClick={() => setSelectedresume(section.name)}>
            <Grid container direction="column" justify="center" alignItems="center" alignContent="center">
                <Grid item>
                    <Box color={"textPrimary"} >
                        {
                            section.name === resumeCardArray[0].name ?
                                <PersonIcon style={{ fontSize: 50 }} color={"white"} /> : section.name === resumeCardArray[1].name ?
                                    <ExplicitIcon style={{ fontSize: 50 }} color={"white"} /> : section.name === resumeCardArray[2].name ?
                                        <CastForEducationIcon style={{ fontSize: 50 }} color={"white"} /> : null
                        }
                    </Box>
                </Grid>
                <Grid item>
                    <Typography variant="h6">
                        <Box color="secondary" fontWeight={700} >
                            {section.name}
                        </Box>
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
export default IconCard;