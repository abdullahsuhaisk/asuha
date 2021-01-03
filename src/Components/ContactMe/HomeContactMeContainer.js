import { Container, Button, FormGroup, Box, Grid } from "@material-ui/core";
import contactImage from '../../Assets/contact.png'
import HeaderAndSeperator from "../HeaderAndSeperator";
import { makeStyles } from '@material-ui/core/styles';
import { useState } from "react";
import MyInput from "../MyInput";
import TopBarButton from "../TopBarButton";
import TelegramIcon from '@material-ui/icons/Telegram';
import theme from '../../Utils/theme'

const headerContact = {
    h1: 'CONTACT',
    h2: 'ME',
    info: "I'm always open to discussion time spand"
}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        }
    },
    button: {
        color: "primary"
    }
}));


function HomeContactMeContainer() {
    const classes = useStyles();
    const [contact, setContact] = useState({
        Name: "",
        Email: "",
        Subject: "",
        Message: ""
    });
    const handleOnChange = (e) => {
        const localContact = { ...contact }
        localContact[e.target.id] = e.target.value
        setContact(localContact)
    }
    return (
        <Container maxWidth="md">
            <HeaderAndSeperator header={headerContact} />
            <Grid container style={{ marginTop: 15 }}>
                <Grid container item md={6} lg={8} sm={12} xs={12}>
                    <Grid item md={12} lg={6} sm={6} xs={12}>
                        <FormGroup className={classes.root}>
                            <MyInput id={"Name"} handleOnChange={e => handleOnChange(e)} />
                        </FormGroup>
                    </Grid>
                    <Grid item md={12} lg={6} sm={6} xs={12}>
                        <FormGroup className={classes.root}>
                            <MyInput id={"Email"} handleOnChange={e => handleOnChange(e)} />
                        </FormGroup>
                    </Grid>
                    <Grid item md={12} lg={12} sm={12} xs={12}>
                        <FormGroup className={classes.root}>
                            <MyInput id={'Subject'} handleOnChange={e => handleOnChange(e)} />
                        </FormGroup>
                    </Grid>
                    <Grid item md={12} lg={12} sm={12} xs={12}>
                        <Box>
                            <FormGroup className={classes.root}>
                                <MyInput id={'Message'} handleOnChange={e => handleOnChange(e)} multiline rows={5} />
                            </FormGroup>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item md={6} lg={4} sm={12} xs={12}>
                    <img src={contactImage} style={{ width: "100%" }}></img>
                </Grid>
                <Grid item md={12} lg={12} sm={12}>
                    {/* <TopBarButton name={"Send"} variant="contained" color="primary" height={"100px"} onClick={() => { console.log(contact) }} /> */}

                    <Button variant="contained" className={classes.button} onClick={() => { console.log("Get in touch Clicked") }}>
                        <TelegramIcon style={{ marginRight: 10 }} color="primary" fontSize="large" />
                        <Box color={theme.palette.primary.main}>
                            Get In Touch
                        </Box>
                    </Button>

                </Grid>

            </Grid>

        </Container>
    )
}

export default HomeContactMeContainer;