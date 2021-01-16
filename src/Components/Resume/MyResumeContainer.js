import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import MyResumeAboutMe from "./MyResumeAboutMe";
import IconCard from "../IconCard";
import MyResumeSelectedSection from "./MyResumeSelectedSection";
import HeaderAndSeperator from "../HeaderAndSeperator";

const educationArray = [
    {
        id: 0,
        companyName: "Elementry School",
        title: "Çekmeköy İÖO",
        date: '2000 - 2005',
        type: 'Edu'
    },
    {
        id: 1,
        companyName: "Elementry School",
        title: "Zihni Paşa İÖO",
        date: '2005 - 2008',
        type: 'Edu'
    },
    {
        id: 2,
        companyName: "High Scholl",
        title: "Eca Elginkan Anadolu lisesi",
        date: '2008 - 2012',
        type: 'Edu'
    },
    {
        id: 3,
        companyName: "University & Computer Engineering",
        title: "Karabük University",
        date: '2012 - 2018',
        type: 'Edu'
    }
].reverse()
const experienceArray = [
    {
        id: 0,
        companyName: "Netaş Telecomunication Aş. ",
        title: "Software Engineer",
        date: 'Nov 2019 - Now',
        type: 'Experience'
    },
    {
        id: 1,
        companyName: "Smart Over ",
        title: "FrontEnd Developer",
        date: 'Jan 2018 - Nov 2019',
        type: 'Experience'
    },
    {
        id: 2,
        companyName: "Burgan Bank. ",
        title: "JavaScript Developer",
        date: 'May 2017 - Jan 2018',
        type: 'Experience'
    },
    {
        id: 3,
        companyName: "Martaş Aş ",
        title: "Mobile/JavaScript Developer",
        date: 'July 2018 - Oct 2019',
        type: 'Experience'
    }
]

const headerResume = {
    h1: 'MY',
    h2: 'RESUME',
    info: 'Some Basic Information About My Self'
}

function MyResumeContainer() {
    const [selectedResume, setSelectedresume] = useState('About Me')
    const resumeCardArray = [{
        name: 'About Me',
    }, {
        name: 'Experience'
    }, {
        name: 'Education'
    }];
    return (
        <Box component="div">
            <Container>
                <Grid container justify="flex-start" alignItems="center" alignContent="center" direction="column">
                    <HeaderAndSeperator header = {headerResume} />
                </Grid>
                <Grid container spacing={4} justify={"center"} style={{ paddingTop: 100 }}>
                    {resumeCardArray.map((item) => (
                        <Grid item key={item.name}>
                            <IconCard section={item} selectedResume={selectedResume} setSelectedresume={setSelectedresume} resumeCardArray={resumeCardArray} />
                        </Grid>
                    ))}
                </Grid> {
                    selectedResume === resumeCardArray[0].name ?
                        <MyResumeAboutMe /> :
                        selectedResume === resumeCardArray[1].name ?
                            <MyResumeSelectedSection array={experienceArray} />
                            :
                            <MyResumeSelectedSection array={educationArray} />
                }
            </Container>
        </Box>
    )
}
export default MyResumeContainer;

