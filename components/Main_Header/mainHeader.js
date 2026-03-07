import Link from 'next/link'
import React, { Component } from 'react'

export class mainHeader extends Component {
    render() {
        return (
            <>
            <div className='main-header-navigation-container'>
                <p className='main-header-navigation-item'><Link href='/'>Home</Link></p>
                <p className='main-header-navigation-separator'>•</p>
                <p className='main-header-navigation-item'><Link href='/mini_projects/antd_tutorial'>Mini Projects</Link></p>
                <p className='main-header-navigation-separator'>•</p>
                <p className='main-header-navigation-item'>Photos</p>
            </div>
            <style jsx global>
            {`
                .main-header-navigation-container{
                    display: flex;
                    justify-content: center;
                    gap: 24px;
                    padding: 20px;
                    box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.02);
                    -webkit-box-shadow: 0px 5px 20px 0px rgba(0,0,0,0.02);
                    -moz-box-shadow: 0px 5px 5px 20px rgba(0,0,0,0.02);
                }
                .main-header-navigation-item{
                    cursor: pointer;
                    margin-bottom:0px;
                    font-size: 18px;
                    display:flex;
                    align-items:center;
                    transition: opacity 0.3s;
                    text-decoration:none;
                }
                .main-header-navigation-item:hover{
                    opacity:0.7;
                }
                .main-header-navigation-separator{
                    margin-bottom:0px;
                    font-size: 18px;
                    display:flex;
                    align-items:center;
                }
            `}
            </style>
            </>
        )
    }
}

export default mainHeader