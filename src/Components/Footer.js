import { Box, Container, Typography } from "@material-ui/core";
import Mylogo from "./MyLogo";
import { makeStyles } from '@material-ui/core/styles';
import SocialMediaIconsComponent from './SocialMediIconComponents';

const useStyles = makeStyles((theme) => ({
    root: {
        '& ul, li': {
            listStyle: "none",
        }
    },
    footerContent: {
        borderRight: '2px solid #999',
        marginRight: "10px",
        paddingRight: "10px"
    }
}));

function Footer() {
    const classes = useStyles();
    return (
        <Container maxWidth="sm" className={classes.root}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                <Box marginTop={3}>
                    <Mylogo />
                </Box>
                <Box marginTop={3}>
                    <SocialMediaIconsComponent />
                </Box>
                <Box marginTop={3} display="flex" justifyContent="center">
                    <Box display="flex" justifyContent="spaceBetween">
                        <Box className={classes.footerContent}>
                            <Typography variant="body" color="textPrimary" >
                                <Box component="span" >
                                    © Copyright
                                </Box>
                            </Typography>
                            <Box component="span" marginRight={1}>
                            </Box>
                            <Typography variant="body" color="primary">
                                <Box component="span" fontWeight={700}>
                                    - 2021
                                </Box>
                            </Typography>
                        </Box>
                        <Box >
                            <Typography variant="body" color="textPrimary" >
                                <Box component="span" >
                                    Developed by
                                </Box>
                            </Typography>
                            <Box component="span" marginRight={1}>
                            </Box>
                            <Typography variant="body" color="primary">
                                <Box component="span" fontWeight={700}>
                                    - abdullahsuhaisik
                                </Box>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer;