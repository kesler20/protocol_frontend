import Monzo from "../assets/monzo_icon.png"
import TheGymGroup from "../assets/the-gym-group_icon.png"
import Github from "../assets/github_icon.png"
import SofiaDiet from "../assets/sofia-diet_icon.png"
import GoogleDrive from "../assets/google-drive_icon.png"
import GoogleTasks from "../assets/google-tasks_icon.png"
import GoogleCalendar from "../assets/google-calendar_icon.png"
import Gmail from "../assets/gmail_icon.jpg"
import Youtube from "../assets/youtube_icon.png"
import styled from 'styled-components';

export const links = [
    { name : "Monzo", icon : <img style={{width : "25px"}} src={Monzo} />},
    { name : "The Gym Group", icon : <img style={{width : "25px"}} src={TheGymGroup} />},
    { name : "Github", icon : <img style={{width : "25px"}} src={Github} />},
    { name : "Sofia Diet", icon : <img style={{width : "25px", borderRadius: "50%"}} src={SofiaDiet} />},
]

export const googleLinks = [
    { name : "Google Drive", icon : <img style={{width : "25px"}} src={GoogleDrive} />},
    { name : "Google Tasks", icon : <img style={{width : "25px"}} src={GoogleTasks} />},
    { name : "Google Calendar", icon : <img style={{width : "25px"}} src={GoogleCalendar} />},
    { name : "Gmail", icon : <img style={{width : "25px"}} src={Gmail} />},
    { name : "Youtube", icon : <img style={{width : "25px"}} src={Youtube} />},
]

export const SiteTitle = styled.h2`
  /* global 94%+ browsers support */
  background: linear-gradient(
    90deg,
    rgba(0, 255, 235, 1) 0%,
    rgba(7, 58, 187, 1) 100%
  );
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
`