import React from 'react'
import Row from 'react-bootstrap/Row'
import CrowSpinner from '../crowspinner/crowspinner.component'
import ProjectCard from '../projectCard/projectcard.component'

export default function ProjectContainer(props) {
    return (
        <Row className="px-2">
           {props.projects&&props.projects[0]? (
               props.projects.map(project => <ProjectCard key={project.id} project={project}/>)
               ) : (
                   <CrowSpinner />
               )}
        </Row>
    )
}
