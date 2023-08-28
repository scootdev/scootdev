import React, { useState } from 'react';
import { Grid as MuiGrid, Paper, Typography } from '@mui/material';
import { styled } from '@mui/system';
import WindowContainer from '../../components/WindowContainer';
import JavaScriptIcon from './icons/javascript.svg';
import PythonIcon from './icons/python.svg';
import PHPIcon from './icons/php.svg';
import CSharpIcon from './icons/csharp.svg';
import HTML5Icon from './icons/html5.svg';
import CSS3Icon from './icons/css3.svg';
import ReactIcon from './icons/react.svg';
import AngularIcon from './icons/angular.svg';
import VueIcon from './icons/vuedotjs.svg';
import BootstrapIcon from './icons/bootstrap.svg';
import MUIIcon from './icons/mui.svg';
import NodeIcon from './icons/nodedotjs.svg';
import ExpressIcon from './icons/express.svg';
import DjangoIcon from './icons/django.svg';
import FlaskIcon from './icons/flask.svg';
import MySQLIcon from './icons/mysql.svg';
import PostgreSQLIcon from './icons/postgresql.svg';
import MongoDBIcon from './icons/mongodb.svg';
import RedisIcon from './icons/redis.svg';
import DockerIcon from './icons/docker.svg';
import AWSIcon from './icons/amazonaws.svg';
import GitIcon from './icons/git.svg';
import WebpackIcon from './icons/webpack.svg';
import VSCodeIcon from './icons/visualstudiocode.svg';
import JIRAIcon from './icons/jira.svg';
import SlackIcon from './icons/slack.svg';
import SalesforceIcon from './icons/salesforce.svg';
import HubspotIcon from './icons/hubspot.svg';

const SkillItemContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 10,
    marginLeft: 10
});

const SkillCategoryGrid = styled(MuiGrid)({
    textAlign: 'center',
});

const SkillIconGrid = styled(MuiGrid)({
    marginTop: 10,  // Reduced from 20
    marginBottom: 10,  // Reduced from 20
    justifyContent: 'center',
});

const SkillIcon = styled('img')({
    width: 40,
    height: 40,
    marginRight: 10,  // Reduced from 20
    marginLeft: 10  // Reduced from 20
});

function SkillCategory({ icons }) {
    return (
        <SkillCategoryGrid item xs={12}>
            <SkillIconGrid container alignItems="center">
                {icons.map((icon, index) => (
                    <SkillItemContainer key={index}>
                        <SkillIcon src={icon.src} alt={icon.alt} />
                        <Typography variant="caption">{icon.alt}</Typography>
                    </SkillItemContainer>
                ))}
            </SkillIconGrid>
        </SkillCategoryGrid>
    );
}

function Skills() {
    const [activeWindow, setActiveWindow] = useState(null);

    const handleSetActiveWindow = (windowId) => {
        setActiveWindow(windowId);
    };

    // Function to get positions from localStorage
    const getSavedPositions = (id) => {
        const savedPosition = localStorage.getItem(id);
        return savedPosition ? JSON.parse(savedPosition) : null;
    };

    // Function to handle window dragging
    const handleWindowDrag = (id, newPosition) => {
        localStorage.setItem(id, JSON.stringify(newPosition));
    };

    return (
        <MuiGrid container style={{ padding: '0', marginBottom: '40px', width: '100%', position: 'relative', overflow: 'hidden', justifyContent: 'center' }}>
            <WindowContainer
                title="Skills & Languages"
                id="text-content"
                position={getSavedPositions('text-content')}
                onDrag={(newPosition) => handleWindowDrag('text-content', newPosition)}
                isActive={activeWindow === "text-content"}
                setActiveWindow={handleSetActiveWindow}
                style={{ width: '23%' }}
            >
            <Paper elevation={5} style={{ padding: '5px', marginTop: '4px', marginBottom: '2px' }}>
                <Typography>Check out the languages, frameworks, and skills I'm experienced in. I'm a quick learner and I'm always up for adapting to new tech and systems. Just to show off a bit, these windows can be dragged and moved around within their parent container 😎</Typography>
            </Paper>
            </WindowContainer>
            <WindowContainer
                title="Programming Languages"
                id="programming-languages"
                position={getSavedPositions('programming-languages')}
                onDrag={(newPosition) => handleWindowDrag('programming-languages', newPosition)}
                isActive={activeWindow === "programming-languages"}
                setActiveWindow={handleSetActiveWindow}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '4px', marginBottom: '2px' }}>
                    <SkillCategory
                        icons={[
                            { src: JavaScriptIcon, alt: "JavaScript" },
                            { src: PythonIcon, alt: "Python" },
                            { src: PHPIcon, alt: "PHP" },
                            { src: CSharpIcon, alt: "C#" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
            <WindowContainer
                title="Frontend"
                id="frontend"
                position={getSavedPositions('frontend')}
                onDrag={(newPosition) => handleWindowDrag('frontend', newPosition)}
                isActive={activeWindow === "frontend"}
                setActiveWindow={() => handleSetActiveWindow('frontend')}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
                    <SkillCategory
                        icons={[
                            { src: HTML5Icon, alt: "HTML5" },
                            { src: CSS3Icon, alt: "CSS3" },
                            { src: ReactIcon, alt: "React" },
                            { src: AngularIcon, alt: "Angular" },
                            { src: VueIcon, alt: "Vue.js" },
                            { src: BootstrapIcon, alt: "Bootstrap" },
                            { src: MUIIcon, alt: "Material-UI" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
            <WindowContainer
                title="Backend"
                id="backend"
                position={getSavedPositions('backend')}
                onDrag={(newPosition) => handleWindowDrag('backend', newPosition)}
                isActive={activeWindow === "backend"}
                setActiveWindow={() => handleSetActiveWindow('backend')}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
                    <SkillCategory
                        icons={[
                            { src: NodeIcon, alt: "Node.js" },
                            { src: ExpressIcon, alt: "Express" },
                            { src: DjangoIcon, alt: "Django" },
                            { src: FlaskIcon, alt: "Flask" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
            <WindowContainer
                title="Databases"
                id="databases"
                position={getSavedPositions('databases')}
                onDrag={(newPosition) => handleWindowDrag('databases', newPosition)}
                isActive={activeWindow === "databases"}
                setActiveWindow={() => handleSetActiveWindow('databases')}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
                    <SkillCategory
                        icons={[
                            { src: MySQLIcon, alt: "MySQL" },
                            { src: PostgreSQLIcon, alt: "PostgreSQL" },
                            { src: MongoDBIcon, alt: "MongoDB" },
                            { src: RedisIcon, alt: "Redis" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
            <WindowContainer
                title="DevOps and Cloud"
                id="devops-and-cloud"
                position={getSavedPositions('devops-and-cloud')}
                onDrag={(newPosition) => handleWindowDrag('devops-and-cloud', newPosition)}
                isActive={activeWindow === "devops-and-cloud"}
                setActiveWindow={() => handleSetActiveWindow('devops-and-cloud')}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
                    <SkillCategory
                        icons={[
                            { src: DockerIcon, alt: "Docker" },
                            { src: AWSIcon, alt: "AWS" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
            <WindowContainer
                title="Tools and Platforms"
                id="tools-and-platforms"
                position={getSavedPositions('tools-and-platforms')}
                onDrag={(newPosition) => handleWindowDrag('tools-and-platforms', newPosition)}
                isActive={activeWindow === "tools-and-platforms"}
                setActiveWindow={() => handleSetActiveWindow('tools-and-platforms')}
            >
                <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
                    <SkillCategory
                        icons={[
                            { src: GitIcon, alt: "Git" },
                            { src: WebpackIcon, alt: "Webpack" },
                            { src: VSCodeIcon, alt: "VS Code" },
                            { src: JIRAIcon, alt: "JIRA" },
                            { src: SlackIcon, alt: "Slack" },
                            { src: SalesforceIcon, alt: "Salesforce" },
                            { src: HubspotIcon, alt: "Hubspot" },
                        ]}
                    />
                </Paper>
            </WindowContainer>
        </MuiGrid>
    );
}

export default Skills;
