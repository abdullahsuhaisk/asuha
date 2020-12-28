import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MyResumeCard from '../MyResumeCard';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",
        alignItems: 'center',
        marginTop: 30,

    }
}));

function MyResumeSelectedSection({array}) {
    const classes = useStyles();
    const [hoverResumeCard, setHoverResumeCard] = useState(null);
    return (
        <Box>
            <Grid container spacing={6} className={classes.root}>
                {
                    array.map((item) => (
                        <div onMouseEnter={() => setHoverResumeCard(item.id)} onMouseLeave={() => setHoverResumeCard(null)} key={item.id} >
                            <Grid item>
                                <MyResumeCard item={item} hoverResumeCard={hoverResumeCard} key={item.id} />
                            </Grid>
                        </div>
                    ))
                }
            </Grid>
        </Box>
    )
}

export default MyResumeSelectedSection;