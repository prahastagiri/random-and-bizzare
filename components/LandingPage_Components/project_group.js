import React, { useRef, useState } from 'react'
import Project_Item from './project_item'

import {
    CaretLeftOutlined,
    CaretRightOutlined,
} from '@ant-design/icons';

const SliderContainerId = "project-group__container"

function Project_Group({projects, navcolor}) {
    const containerRef = useRef(null);
    const [showPrev, setShowPrev] = useState(true);
    const [showNext, setshowNext] = useState(true);

    const createProjectItem = (project) => {
        if(!project || project?.length <= 0) return;

        return projects.map(project => {
            return <Project_Item project={project}/>
        })
    }

    const scrollContainer = (direction) => {
        if (containerRef.current) {
            const { clientWidth, scrollLeft, scrollWidth } = containerRef.current;

            var scroll = direction == "next" ? scrollLeft + clientWidth : scrollLeft - clientWidth
            console.log(scrollLeft, scroll, clientWidth, scrollWidth)
            containerRef.current.scrollTo({
                left: scroll,
                behavior: 'smooth',
            });

            if(clientWidth == scroll){
                setshowNext(false);
                setShowPrev(true);
            }else{
                setshowNext(true);
                setShowPrev(false);
            }
        }
    };

    return (
        <div className='project-group__wrapper flex justify-between'>
            <nav onClick={() => scrollContainer("prev")}id="project-prev" className={`${navcolor} flex justify-center items-center p-2 cursor-pointer rounded-lg`}><CaretLeftOutlined style={{visibility:showPrev ? "unset" : "hidden"}}/></nav>
            <div className='project-group__container flex overflow-x-hidden gap-4' ref={containerRef} id={SliderContainerId}>
                {createProjectItem(projects)}
            </div>
            <nav onClick={() => scrollContainer("next")} id="project-next"className={`${navcolor} flex justify-center items-center p-2 cursor-pointer rounded-lg`}><CaretRightOutlined style={{visibility:showNext ? "unset" : "hidden"}}/></nav>
        </div>
    )
}

export default Project_Group