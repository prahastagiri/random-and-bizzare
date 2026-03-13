import { SVG_ICONS } from '@/Assets/Icons/IconsCollections'
import React from 'react'
const { Home } = SVG_ICONS

// #006bbb
// #30a0e0
// #FFC872
// #FFE3B3
export default function Landing_Header() {
    const ListMenu = [<Home width="24" height="24" stroke="#000"/>, "About", "Work", "Blog", "Get in touch"]
    const MenuItem = () => {
        return ListMenu.map( (menu,index) => <li key={"landing-nav-"+index} className='py-2 px-4 rounded-[28px] cursor-pointer flex flex-col justify-center' >{menu}</li>)
    }
    return (
        <ul className={`hidden list-none mb-0 m-auto justify-between align-middle rounded-full w-full transition-all font-[family-name:--default-font-family] font-medium text-baselg:px-12 lg:pt-2 sm:p-0`}>
            {MenuItem()}
        </ul>
    )
}
