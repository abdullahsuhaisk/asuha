import { Box, Grid, Link } from "@material-ui/core";
import { socialMediaArray } from '../Utils/Consts'
import theme from '../Utils/theme'

function SocialMediaIconsComponent(props) {
    return (
        <Grid container justify="center" alignItems="center" spacing={2} alignContent="center">
            {props.array || socialMediaArray.map(item => {
                return (
                    <Grid item justify="center" alignItems="center" alignContent="center">
                        <Link href={item.link}>
                            <Box bgcolor={theme.palette.primary.main} padding="10px" borderRadius="50%" >
                                {item.component("medium")}
                            </Box>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>
    )
}
export default SocialMediaIconsComponent;