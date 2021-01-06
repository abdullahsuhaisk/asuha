import { Container, Grid } from "@material-ui/core";
import HeaderAndSeperator from "../HeaderAndSeperator";
import BlogCard from "./BlogCard";
import SmallBlogCard from "./SmallBlogCard";

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
                    <Grid item md={6} lg={6}>
                        <BlogCard />
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <BlogCard />
                    </Grid>
                    <Grid container item md={12} lg={12}>
                        <Grid item lg={6} md={6} sm={12}>
                            <SmallBlogCard />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <SmallBlogCard />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <SmallBlogCard />
                        </Grid>
                        <Grid item lg={6} md={6} sm={12}>
                            <SmallBlogCard />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>

    )
}

export default HomeBlogContainer;