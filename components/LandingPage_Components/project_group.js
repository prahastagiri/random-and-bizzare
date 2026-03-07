import React, { useState } from 'react'
import Project_Item from './project_item'

function Project_Group({projects}) {

    const createProjectItem = (project) => {
        if(!project || project?.length <= 0){
            return;
        }

        return projects.map(project => {
            return <Project_Item project={project}/>
        })
    }

    return (
        <div className='project-group__wrapper'>
            <div className='project-group__container'>
                {createProjectItem(projects)}
            </div>
            <style jsx global>
            {`
                .project-group__container{
                    display: grid;
                    column-gap: 16px;
                    row-gap: 16px;
                    justify-content: unset;
                    grid-auto-flow: row;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                }
            `}
            </style>
        </div>
    )
}

export default Project_Group