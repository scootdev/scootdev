import React, { useState } from 'react';
import { Grid as MuiGrid, Paper } from '@mui/material';
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


const SkillCategoryGrid = styled(MuiGrid)({
    textAlign: 'center',
});

const SkillIconGrid = styled(MuiGrid)({
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
});

const SkillIcon = styled('img')({
    width: 50,
    height: 50,
    marginRight: 20,
});

function SkillCategory({ icons }) {
    return (
        <SkillCategoryGrid item xs={12}>
            <SkillIconGrid container alignItems="center">
                {icons.map((icon, index) => (
                    <SkillIcon key={index} src={icon.src} alt={icon.alt} />
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

    return (
        <div style={{ width: '100%', height: '500px' }}>
            <MuiGrid container style={{ width: '100%', height: '100%' }}>
                <WindowContainer
                    title="Programming Languages"
                    id="programming-languages"
                    isActive={activeWindow === "programming-languages"}
                    setActiveWindow={handleSetActiveWindow}
                >
                    <Paper elevation={0} style={{ padding: '5px', marginTop: '7px', marginBottom: '4px' }}>
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
                    isActive={activeWindow === "frontend"}
                    setActiveWindow={() => handleSetActiveWindow("frontend")}
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
                    isActive={activeWindow === "backend"}
                    setActiveWindow={() => handleSetActiveWindow("backend")}
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
                    isActive={activeWindow === "databases"}
                    setActiveWindow={() => handleSetActiveWindow("databases")}
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
                    isActive={activeWindow === "devops-and-cloud"}
                    setActiveWindow={() => handleSetActiveWindow("devops-and-cloud")}
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
                    isActive={activeWindow === "tools-and-platforms"}
                    setActiveWindow={() => handleSetActiveWindow("tools-and-platforms")}
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
        </div >
    );
}

export default Skills;
