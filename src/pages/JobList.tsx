import { Box, Tab, Tabs, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import React from 'react'

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
const isHorizontal = window.innerWidth < 600;
function TabPanel(props: TabPanelProps)  {
    const { children, value, index, ...other } = props;

    if (isHorizontal) {
        return (
          <div role="tabpanel" hidden={value !== index} id={`full-width-tabpanel-${index}`} aria-labelledby={`full-width-tab-${index}`} {...other}>
            {value === index && (
              <Box p={3}>
                <Typography>{children}</Typography>
              </Box>
            )}
          </div>
        );
    } else {
        return (
            <div role="tabpanel" hidden={value !== index} id={`vertical-tabpanel`} {...other}>
              {value === index && (
                <Box p={3}>
                  <Typography>{children}</Typography>
                </Box>
              )}
            </div>
          );
    }
}

function a11yProps(index: number) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette?.primary.main,
      display: "flex",
      height: 300
    },
    tabs: {
      borderRight: `1px solid ${theme.palette?.divider}`
    }
  }));

const JobList = () => {
    const [value, setValue] = React.useState(0);
    const classes = useStyles();

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const experience = {
        "Nathan Digital" : {
            JobTitle: "Associate Frontend Developer",
            duration: 'APR 2024 - PRESENT',
            desc: [
                "Assist in the building and maintaining of responsive web applications in nathan digital across the whole product.",
                "Work closely with cross-functional teams, including senior developers, designers, backend teams, and product managers, to implement and advocate for best practices in web accessibility",
                "Ensure that the code is clean, organized, and adheres to company standards.",
                "Identify and resolve bugs and issues in the codebase"
            ],
            techStack: ["JavaScript", "Vue", "Nuxt.js"]
        },
        "Oaknet Business" : {
            JobTitle: "Quality Assurance",
            duration: 'SEPT 2023 - DEC 2023',
            desc: [
                "Designed, developed, maintained and executed manual and automated test cases to ensure software functionality, reliability, and performance.",
                "Collaborated with developers to identify, document, and resolve bugs, ensuring high-quality releases"
            ],
            techStack: ["JavaScript", "Cypress", "Jest", "Selenium"]
        },
        "Sleek Line Designs" : {
            JobTitle: "Frontend Developer",
            duration: 'SEPT 2021 - OCT 2023',
            desc: [
                "Build, style, and ship high-quality websites, design systems, mobile apps, and digital experiences for a diverse array of projects for clients.",
                "Provide leadership within wed-design department through close collaboration, knowledge shares, and spearheading the development of projects."
            ],
            techStack: ["JavaScript", "React", "Next.js", "WordPres"]
        },
    }
  return (
    <div className={classes.root}>
        <Tabs className={classes.tabs} orientation={!isHorizontal ? "vertical" : "horizontal"} variant={isHorizontal ? "fullWidth" : "scrollable"} value={value} onChange={handleChange} >
            {Object.keys(experience).map((index, i) => (
                <Tab label={isHorizontal ? `0${i}.` : index} {...a11yProps(i)}></Tab>
                
            ))}
        </Tabs>  
        {
            Object.keys(experience).map((index, i) => (
                <TabPanel value={value} index={i}>
                    <span className="joblist-job-title">{ experience[index as keyof typeof experience]["JobTitle"] + " @ "}</span>
                    <span className="joblist-job-company">{index}</span>
                    <div className="joblist-duration">{ experience[index as keyof typeof experience]["duration"] }</div> 
                    <ul className="job-description">
                        { experience[index as keyof typeof experience]["desc"].map((key, i) => (
                            <li key={i}>{key}</li>
                        )) }                    
                    </ul>
                </TabPanel>
            ))
        }
    </div>
  )
}

export default JobList