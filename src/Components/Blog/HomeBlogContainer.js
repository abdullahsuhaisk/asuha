import { Container, Grid } from "@material-ui/core";
import HeaderAndSeperator from "../HeaderAndSeperator";
import BlogCard from "./BlogCard";

const headerSkills = {
    h1: 'MY',
    h2: 'BLOGS',
    info: 'Some article about my activity & experience'
}

function HomeBlogContainer() {
    return (
        <>
            <HeaderAndSeperator header={headerSkills} />
            <Container maxWidth="md">
                <Grid container>
                    <Grid item md={6} lg={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <BlogCard />
                    </Grid>
                    <Grid item md={6} lg={4}>
                        <BlogCard />
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default HomeBlogContainer;