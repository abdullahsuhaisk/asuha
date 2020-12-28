import { Box, Container, Typography, Button } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import TelegramIcon from '@material-ui/icons/Telegram';

import discussImage from '../Assets/discuss-bg.png'
import theme from "../Utils/theme";

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${discussImage})`,
        height: "300px",
        backgroundColor: theme.palette.primary.main,
        backgroundPosition: "center",
        backgroundSize: "cover",
        borderRadius: "10px",
        margin: "0px 10px",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    button: {
        height:50,
        borderRadius:'10px',
        marginTop: "10px"
    }
}));

function LetDiscuss() {
    const classes = useStyles();
    return (
        <Container maxWidth="md">
            <Box className={classes.root}>
                <Typography variant="h4" style={{ color: '#fff' }}>
                    <Box fontWeight={700}  textAlign="center" flex>
                        Let’s discuss your idea
                    </Box>
                </Typography>
                <Typography variant="h5" style={{ color: '#fff', margin:"10px 50px 10px 50px" }}>
                    <Box fontWeight={700} textAlign="center" flex>
                        Have a thought about your future website? I am always here.
                    </Box>
                </Typography>
                <Box>
                    <Button variant="contained" className={classes.button} onClick={() => {console.log("Get in touch Clicked")}}>
                        <TelegramIcon style={{ marginRight:10}} color= "primary" fontSize="large"/>
                        <Box color={theme.palette.primary.main}>
                        Get In Touch
                        </Box>
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

export default LetDiscuss;