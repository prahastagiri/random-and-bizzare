import { COLOR_THEME } from '@/static/LandingPage_Constants'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import {ClockCircleOutlined} from '@ant-design/icons';

function Project_Item({project}) {
    const router = useRouter()

    const handleRedirectToProject = (url) => {
        router.push(url)
    }

    const createDate = (timestamp) => {
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();

        return `${day}-${month}-${year}`
    }

    const createTags = (tags) => {
        // COLOR_THEME
        return tags.map((tag,index) => {
            var tagStyle = {
                padding:"4px", 
                border:`1px solid #${COLOR_THEME[index]}`, 
                margin:"0px", 
                color: `#${COLOR_THEME[index]}`,
                width:"fit-content",
                borderRadius:"4px",
            }
            
            return <p style={tagStyle}>{tag}</p>
        })
    }

    return (
        <div className='project-item__wrapper' key={project.url} onClick={()=>handleRedirectToProject(project.url)}>
            <div className='project-item__container'>
                <div className='project-item__head'>
                    <div className='project-item__snapshot'/>
                </div>
                <div className='project-item__body'>
                    <div className='project-tags__container'>
                        {createTags(project.tags)}
                    </div>
                    <div className='project-title'>
                        {project.title}
                    </div>
                </div>
                <div className='project-item__footer'>
                    <p className='project-item__datetime'><ClockCircleOutlined /> {createDate(project.datetime)}</p>
                </div>
            </div>
            <style jsx global>
            {`
                .project-title{
                    padding:8px 0px;
                    font-size:22px;
                    font-weight: 500;
                }
                .project-tags__container{
                    display:flex;
                    gap:8px;
                }
                .project-item__datetime{
                    margin-bottom:0px;
                    color:#aeaeae;
                }
                .project-item__footer{
                    margin-top:auto;
                    padding:8px 16px;
                    text-align:right;
                }
                .project-item__body{
                    padding:8px 16px;
                }
                .project-item__snapshot{
                    background:url('https://i.pinimg.com/736x/c4/96/9a/c4969aaedbc096c09b35e31abd11e2ec.jpg');
                    background-repeat:no-repeat;
                    background-position:center;
                    background-size: contain;
                    height:120px;
                }
                .project-item__container{
                    border:0.5px solid #efefef;
                    opacity:1;
                    transition: 0.3s all;
                    width:24em;
                    height:24em;
                    box-shadow: 4px 4px 10px -4px rgba(0,0,0,0.5);
                    -webkit-box-shadow: 4px 4px 10px -4px rgba(0,0,0,0.5);
                    -moz-box-shadow: 4px 4px 10px -4px rgba(0,0,0,0.5);
                    border-radius:8px;
                    display:flex;
                    flex-direction:column;
                }
                .project-item__container:hover{
                    cursor:pointer;
                    opacity:0.7;
                    transition: 0.3s all;
                }
            `}
            </style>
        </div>
    )

}

export default Project_Item