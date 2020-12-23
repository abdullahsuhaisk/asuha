import React from 'react';
import { Grid } from '@material-ui/core'

function Container({children}) {
    return (
        <Grid container direction="column">
            <Grid item container>
                <Grid item sm={2}>
                </Grid>
                <Grid item sm={8} xs={12}>
                    {children}
            </Grid>
                <Grid item sm={2}>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Container;
