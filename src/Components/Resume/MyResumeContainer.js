import { Box, Container, Grid, Typography } from "@material-ui/core";
import { useState } from "react";
import MyResumeAboutMe from "./MyResumeAboutMe";
import MyResumeCard from "./MyResumeCard";

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
                    <Typography variant="h6" color="secondary">
                        <Box component="span" fontWeight={600}>
                            MY
                    </Box>
                        <Box component="span" marginLeft={1} color="text.secondary" fontWeight={700}>
                            RESUME
                    </Box>
                    </Typography>
                    <Typography variant="h4" color="secondary">
                        <Box fontWeight={700} paddingX={10}>
                            Some basic information
                            about myself
                    </Box>
                    </Typography>
                </Grid>
                <Grid container spacing={4} justify={"center"} style={{ paddingTop: 100 }}>
                    {resumeCardArray.map((item) => (
                        <Grid item key={item.name}>
                            <MyResumeCard section={item} selectedResume={selectedResume} setSelectedresume={setSelectedresume} resumeCardArray={resumeCardArray} />
                        </Grid>
                    ))}
                </Grid>
                <MyResumeAboutMe />
            </Container>
        </Box>
    )
}
export default MyResumeContainer;

