import React, { Component } from 'react'

import Wedding_MiddleIcon from './Wedding_MiddleIcon'

import Constanta from '@/Assets/constanta'
import TwoHearts from '@/Assets/Icons/TwoHearts'
import CoupleIcon from '@/Assets/Icons/CoupleIcon'
import DoveIcon from '@/Assets/Icons/DoveIcon'

const content = [
    { title: "First Time We Meet", date: "2 November 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non." },
    { title: "Our First Date", date: "20 November 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non." },
    { title: "She Said Yes", date: "2 January 2023", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non." },
]
export class Wedding_Timeline extends Component {
    constructor(props) {
        super(props)
    }

    generateTextBox = () => {
        return content.map((value, index) => {
            return (
                <div className='wedding-couple-profile__timeline-card-content-container' key={`tb-${index}`}>
                    {index == 1 ? 
                    <div className='wedding-couple-profile__timeline-icon-container'>
                        <CoupleIcon width={50} height={50}/>
                    </div>
                    :
                    index == 2 ? 
                    <div className='wedding-couple-profile__timeline-icon-container'>
                        <DoveIcon width={50} height={50} fill={"#d66371"}/>
                    </div>
                    : ""
                    }
                    <div className='wedding-couple-profile__timeline-textbox' key={`textbox-${index}`}>
                        <p className='wedding-couple-profile__timeline-textbox-title'>{value.title}</p>
                        <p className='wedding-couple-profile__timeline-textbox-date'>{value.date}</p>
                        <p className='wedding-couple-profile__timeline-textbox-desc'>{value.description}</p>
                    </div >
                </div>
            )
        })
    }
    render() {
        return (
            <div>
                <Wedding_MiddleIcon icon={Constanta.dove} width={50} height={50} />
                <p className='wedding-couple-profile__timeline-title-text'>Our Sweet Story</p>
                <div className='wedding-couple-profile__timeline-card'>
                    <div className='wedding-couple-profile__timeline-icon-container' style={{marginTop:"0px"}}>
                        <TwoHearts width={50} height={50}/>
                    </div>
                    <div className='wedding-couple-profile__timeline-card-container'>
                        {this.generateTextBox()}
                    </div>
                </div>
                <style jsx global>
                    {`
                    .wedding-couple-profile__timeline-icon-container{
                        border-radius:50%;
                        border: 1px solid rgba(223,202,204,.5);
                        margin: 135px auto;
                        background: white;
                        z-index: 1;
                        position: relative;
                        width: 80px;
                        aspect-ratio: 1;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    
                    .separator-class{
                        text-align: center;
                    }
                    .wedding-couple-profile__timeline-card-container{
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        padding:0px;
                    }
                    .wedding-couple-profile__timeline-card{
                        position: relative;
                    }
                    .wedding-couple-profile__timeline-card::after{
                        background: rgba(223,202,204,.5);
                        content: "";
                        height: 100%;
                        left: 50%;
                        position: absolute;
                        top: 0;
                        -webkit-transform: translateX(-50%);
                        transform: translateX(-50%);
                        width: 2px;
                    }
                    .wedding-couple-profile__timeline-textbox-date{
                        font-family: Jost;
                        font-weight: 400;
                        font-size: 16px;
                        margin:0px;
                    }
                    .wedding-couple-profile__timeline-textbox-title{
                        font-family: 'Playball', cursive;
                        margin-bottom:8px;
                        font-size: 35px;
                    }
                    .wedding-couple-profile__timeline-title-text{
                        font-family: 'Playball', cursive;
                        margin-bottom:48px;
                        font-size: 45px;
                        text-align:center;
                    }
                    .wedding-couple-profile__timeline-textbox{
                        background: rgb(253 247 248);
                        padding: 35px 25px;
                        border: 10px solid #dfcacc;
                        max-width: 425px;
                        position: relative;
                        z-index:1;
                    }
                    .wedding-couple-profile__timeline-card-content-container:nth-child(odd) .wedding-couple-profile__timeline-textbox{
                        text-align: right;
                        transform: translateX(80px);
                    }
                    .wedding-couple-profile__timeline-card-content-container:nth-child(even) .wedding-couple-profile__timeline-textbox{
                        text-align: left;
                        transform: translateX(-80px);
                    }
                    .wedding-couple-profile__timeline-textbox-desc{
                        font-family: Jost;
                        font-weight: 400;
                    }
                    @media only screen and (max-width:767px){
                        .wedding-couple-profile__timeline-textbox{
                            text-align: center !important;
                            transform: unset !important;
                        }
                        .wedding-couple-profile__timeline-card-container{
                            padding:24px 24px 0px;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_Timeline