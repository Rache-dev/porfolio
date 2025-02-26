import React from 'react'
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
interface ExternalLinksProps{
    gitHub: string;
    openLink: string;
}

const ExternalLinks = ({gitHub, openLink}: ExternalLinksProps) => {
  return (
    <span className="external-links">
        <a className="github-icon" href={gitHub} target="_blank" rel="noreferrer">
            <GitHubIcon style={{ fontSize: 25 }}></GitHubIcon>
        </a>
        <a className="open-icon" href={openLink} target="_blank" rel="noreferrer">
           <LaunchIcon style={{ fontSize: 26 }}></LaunchIcon>
        </a>
    </span>
  )
}

export default ExternalLinks