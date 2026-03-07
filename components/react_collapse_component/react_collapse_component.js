import React, { useState } from 'react'
import { Collapse } from 'react-collapse';

function react_collapse_component(props) {
    const [isOpened,setOpen] = useState(false)
    return (
        <div>
            <div className='react-collapse__toggle-trigger' onClick={()=>setOpen(!isOpened)}>
                <p className='react-collapse-trigger-text'>{props.title}</p>
                <p className='react-collapse-trigger-icon'>{isOpened==true ? <i class="fa fa-angle-down" aria-hidden="true"></i> : <i class="fa fa-angle-right" aria-hidden="true"></i> }</p>
            </div>
            <Collapse theme={{collapse: 'cobacoba-collapse', content: 'cobacoba-collapse-content'}} isOpened={isOpened}>
                {props.children}
            </Collapse>
            <style jsx global>
            {`
                .cobacoba-collapse {
                    width: fit-content;
                    transition: height 0.1s;
                }
                .cobacoba-collapse-content {
                    padding-left: 8px;
                }
                .react-collapse__toggle-trigger{
                    width: fit-content;
                    padding: 4px;
                    cursor: pointer;
                    display:flex;
                    justify-content: space-between;
                    border:1px solid red;
                }
                .react-collapse-trigger-text{
                    margin-bottom:0px;
                    margin-right: 8px;
                }
                .react-collapse-trigger-icon{
                    margin-bottom:0px;
                }
            `}
            </style>
        </div>
    )
}

export default react_collapse_component