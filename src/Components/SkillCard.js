import { Box, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    skillsCard: {
        height: "60px",
        background: "#fff",
        textAlign: "center",
        borderRadius: "5px",
        padding: "30px 0px 30px",
        marginBottom: "30px",
        boxShadow: "0px 0px 35px 0px rgba(0,0,0,0.15)",
        transform: "scale(1)",
        transition: "all linear .3s"
    },
    skillsImage: {
        width: "60px",
        height: "60px",
        lineHeight: "60px",
        textAlign: "center",
        borderRadius: "25%",
        margin: "0px 36px 30px",

    },
    skillsName: {
        borderTop: "1px solid #e8e8e8",
        textAlign: "center",
    }
}));

function SkillCard({ item }) {
    const classes = useStyles();
    return (
        <Grid item>
            <Box className={classes.skillsCard}>
                <img className={classes.skillsImage} src={item.imageUrl}></img>
                <Box className={classes.skillsName}>
                    <Typography variant="h6" color="primary">
                        <Box component="span" fontWeight={700}>
                        {item.name}
                        </Box>
                    </Typography>
                    <p></p>
                </Box>
            </Box>
        </Grid>

    )
};

export default SkillCard;