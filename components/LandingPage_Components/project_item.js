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
        return tags.map((tag,index) => {
            return <p style={{background:"#"+COLOR_THEME[index]}} key={tag} className={`px-2 py-1 flex justify-center items-center text-white font-medium text-xs rounded-full m-0 font-[family-name:--default-font-family] w-fit`}>{tag}</p>
        })
    }

    return (
        // https://dribbble.com/shots/21603404-Task-Management-Dashboard-Project-Details-Card
        <div className='project-item__wrapper bg-white rounded-2xl' key={project.url} onClick={()=>handleRedirectToProject(project.url)}>
            <div className='border border-[#efefef] opacity-100 w-96 shadow-md rounded-lg cursor-pointer hover:opacity-70 duration-300 transition-all flex flex-col justify-between'>
                <main className='flex flex-col justify-between'>
                    <header className='project-item__head mb-4'>
                        <div className='h-48 bg-[url(https://i.pinimg.com/736x/c4/96/9a/c4969aaedbc096c09b35e31abd11e2ec.jpg)] bg-no-repeat bg-cover bg-center'/>
                    </header>
                    <div className='px-2'>
                        <p className='mb-0 text-black/30 font-[family-name:--default-font-family] font-medium text-xs'><ClockCircleOutlined /> {createDate(project.datetime)}</p>
                        <p className='text-2xl font-medium font-[family-name:--default-font-family] m-0'>{project.title}</p>
                    </div>
                </main>
                <article className='mx-2 rounded-lg bg-slate-300 p-2'>
                    <p>
                        {project.description}
                    </p>
                </article>
                <div className='mt-auto px-4 py-2 text-right font-[family-name:--default-font-family]'>
                    <div className='flex gap-2 justify-end'>{createTags(project.tags)}</div>
                </div>
            </div>
        </div>
    )

}

export default Project_Item