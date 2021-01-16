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
import html5 from '../Assets/html5.png'
import webrtc from '../Assets/webRtc.png'
import nodejs from '../Assets/nodejslogo.png'
import jest from '../Assets/Jest.jpg'
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
    {
        imageUrl: html5,
        name: "Html 5"
    },
    {
        imageUrl: webrtc,
        name: "Web RTC"
    },
    {
        imageUrl: nodejs,
        name: "Node JS"
    },
    {
        imageUrl: jest,
        name: "Jest"
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