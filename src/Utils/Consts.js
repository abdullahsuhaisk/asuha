import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import MediumIcon from '@material-ui/icons/MenuBook';
import GitHubIcon from '@material-ui/icons/GitHub';

import Home from "../Page/Home";
import About from "../Page/About";
import Blogs from '../Page/Blogs';
import Features from '../Page/Features';
import Projects from '../Page/Projects';
import Contact from '../Page/Contact';


export const socialMediaArray = [
    {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/abdullah-s%C3%BCha-i%C5%9F%C4%B1k-92b251101/',
        component: (fontsize, color) => (<LinkedInIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    },
    {
        name: 'Medium',
        link: 'https://abdullahsuhaisik.medium.com/',
        component: (fontsize, color) => (<MediumIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    },
    {
        name: 'Twitter',
        link: 'https://twitter.com/suhaa93',
        component: (fontsize, color) => (<TwitterIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    },
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/?hl=tr',
        component: (fontsize, color) => (<InstagramIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/suha.isik',
        component: (fontsize, color) => (<FacebookIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    },
    {
        name: 'GitHub',
        link: 'https://github.com/abdullahsuhaisk',
        component: (fontsize, color) => (<GitHubIcon fontSize={fontsize || "medium"} style={{ color: color || "white" }} />)
    }
];

export const routes = [
    {
      name: 'Home',
      path: '/',
      component: () => (<Home />)
    },
    {
      name: 'About',
      path: '/About',
      component: () => (<About />)
    },
    {
      name: 'Blogs',
      component: () => (<Blogs />)
    },
    {
      name: 'Projects',
      component: () => (<Projects />)
    },
    {
      name: 'Contact',
      component: () => (<Contact />)
    },
    {
      name: 'Features',
      component: () => (<Features />)
    }
  ]