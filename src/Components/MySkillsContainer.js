import { Box, Container, Grid } from "@material-ui/core";
import HeaderAndSeperator from "./HeaderAndSeperator";

import CssImage from '../Assets/css.png'
import SwiftImage from '../Assets/swift.png'
import SwiftUIImage from '../Assets/swiftui.png'
import VsCodeImage from '../Assets/vscode.png'
import reactImage from '../Assets/react.png'
import angularImage from '../Assets/angular.svg'
import githubImage from '../Assets/github.png'
import javascriptImage from '../Assets/javascript.png'

import SkillCard from './SkillCard'

const headerSkills = {
    h1: 'MY',
    h2: 'SKILLS',
    info: 'Expert in this technical software'
}

const SkillsArray = [
    {
        imageUrl: CssImage,
        name: "Css"
    },
    {
        imageUrl: SwiftImage,
        name: 'Swift'
    },
    {
        imageUrl: reactImage,
        name: 'React'
    },
    {
        imageUrl: angularImage,
        name: "Angular Js"
    },
    {
        imageUrl: githubImage,
        name: "Github"
    },
    {
        imageUrl: javascriptImage,
        name: "JavaScript"
    },
    {
        imageUrl: SwiftUIImage,
        name: "Swift UI"
    },
    {
        imageUrl: VsCodeImage,
        name: "Vs Code"
    },
    
]

function MySkillsContainer() {
    return (
        <Container maxWidth="md">
            <HeaderAndSeperator header={headerSkills} />
            <Grid container spacing={3} style={{marginBottom:"10px",marginTop:"10px", justifyContent:"center"}}>
                {
                    SkillsArray.map((item, key) => {
                        return (
                            <SkillCard item={item} key={key} />
                        )
                    })
                }
            </Grid>
        </Container>
    )
}

export default MySkillsContainer;