import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExplicitIcon from '@material-ui/icons/Explicit';
import EventIcon from '@material-ui/icons/Event';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';
import theme, { themeCONSTANT } from '../Utils/theme';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    resumeCard: {
        position: "relative",
        background: "white",
        width: '350px',
        height: '200px',
        boxShadow: "0px 0px 35px 0px rgba(0,0,0,0.15)",
        borderRadius: 8,
        marginRight: 10,
        marginBottom: 10,
        "&:hover": {
            background: theme.palette.primary.main,
            border: theme.palette.primary.dark
        },
    },
    flaction: {
        position: "absolute",
        top: 10,
        right: 15
    },
    date: {
        fontSize: "14px",
        fontWeight: "700",
        fontWeight: "bolder",
        lineHeight: "24px",
        textTransform: "capitalize",
        display: "inline-block",
        color: "#ffffff",
        background: "#d8532b",
        marginBottom: "30px",
        padding: "15px 30px 15px 30px",
        borderRadius: "0px 30px 30px 0px",
        boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.15)",
        transition: "all linear .3s",
    }
}));

const MyResumeCard = ({ item, hoverResumeCard }) => {
    const classes = useStyles();
    const onHoveredColor = (color) => item.id === hoverResumeCard ? color : null;
    return (
        <Box className={classes.resumeCard}>
            <Box component="span" className={classes.flaction}>
                {
                    item.type === 'Experience' ?
                        <ExplicitIcon color={"disabled"} style={{ fontSize: 75, color: onHoveredColor('white') }} /> :
                        <CastForEducationIcon color={"disabled"} style={{ fontSize: 75, color: onHoveredColor('white') }} />
                }
            </Box>
            <h4 className={classes.date} style={{ backgroundColor: onHoveredColor('white') || themeCONSTANT.primary.main, color: onHoveredColor('#d8532b') }}>
                {item.date}
            </h4>
            <Grid container justify="center" alignItems="center">
                <Grid item>
                    <Box paddingRight="10px">
                        <EventIcon color={"disabled"} style={{ fontSize: 70, color: onHoveredColor('white') }} />
                    </Box>
                </Grid>
                <Grid item>
                    <Box className={classes.content}>
                        <h3 style={{ marginBottom: "-20px", color: onHoveredColor('white') || themeCONSTANT.secondary.main }}>
                            {item.title}
                        </h3>
                        <Box component="span">
                            <h6 style={{ color: onHoveredColor('white') || themeCONSTANT.primary.main }}>
                                {item.companyName}
                            </h6>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
export default MyResumeCard;