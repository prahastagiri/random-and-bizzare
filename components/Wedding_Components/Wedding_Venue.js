import React, { Component } from 'react'

import Wedding_MiddleIcon from './Wedding_MiddleIcon'
import Constanta from '@/Assets/constanta'


export class Wedding_Venue extends Component {
    constructor(props) {
        super(props)

    }
    redirectToGoogleMap = () => {
        window.open("https://www.google.com/maps/dir//-8.537427,115.122968/@-8.537427,115.122968,17z/data=!4m8!1m5!3m4!2zOMKwMzInMTQuNyJTIDExNcKwMDcnMjIuNyJF!8m2!3d-8.537427!4d115.122968!4m1!3e9?entry=ttu","_blank")
    }
    createStaticMapURL = () => {
        let mapurl = `https://maps.googleapis.com/maps/api/staticmap?center=-8.537545,115.122961&zoom=19&size=640x640&markers=color:red%7Clabel:Lokasi%7C-8.537545,115.122961&key=${Constanta.googlemapsapikey}`
        return (
            <div className='wedding-venue__map-container' style={{ background: `url(${mapurl})` }} onClick={this.redirectToGoogleMap}>
                <div className='wedding-venue__map-overlay'>
                    <div className='wedding-venue__map-button-container'>
                        <button className='wedding-venue__map-button'>See Location</button>
                    </div>
                </div>
            </div>
        )
    }
    generateDate = () => {
        if(typeof this.props.generateDate == 'function'){
            return this.props.generateDate()
        }
    }
    render() {
        return (
            <div className='wedding-venue__main-container'>
                <div className='wedding-venue__main-content'>
                    <Wedding_MiddleIcon icon={Constanta.bookmark} height={50} width={50} isWhite={true} />
                    <p className='wedding-venue__main-content__title-text'>When & Where</p>
                    <div className='wedding-venue__location-card'>
                        <h1 className='wedding-venue__main-title'>Ceremony & Reception</h1>
                        <p>Icon</p>
                        <p className='wedding-venue__date'>{this.generateDate()}</p>
                        <p className='wedding-venue__address'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna orci auctor vitae nisl. Erat fringilla pellentesque amet tempus. Commodo mi vitae, sed sagittis blandit. Leo netus magna fusce ac turpis mauris maecenas non.</p>
                        {this.createStaticMapURL()}
                    </div>
                </div>
                <style jsx global>
                    {`
                    .wedding-venue__main-content__title-text{
                        font-family: 'Playball', cursive;
                        color: white;
                        margin-bottom:48px;
                        font-size: 45px;
                        text-align:center;
                    }
                    .wedding-venue__date{
                        font-family: Jost;
                        font-weight: 400;
                        font-size: 16px;
                        margin: 0px;
                        text-align:center;
                    }
                    .wedding-venue__address{
                        font-family: Jost;
                        font-weight: 400;
                        font-size: 16px;
                        margin: 16px 0px;
                        text-align:center;
                    }
                    .wedding-venue__main-title{
                        font-family: 'Playball', cursive;
                        margin-bottom:8px;
                        font-size: 35px;
                        text-align:center;
                    }
                    .wedding-venue__map-button-container{
                        height: 100%;
                        width: 100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .wedding-venue__map-button{
                        // background: rgba(255,255,255,0.7);
                        // border: 1px solid rgb(254, 190, 199);
                        background: transparent;
                        border: none;
                        border-radius: 8px;
                        cursor: pointer;
                        font-weight: bold;
                        font-family: 'JOST';
                        color: rgb(254, 190, 199);
                        text-decoration: underline;
                        font-size: 20px;
                    }
                    .wedding-venue__map-overlay:hover{
                        background: rgba(255,255,255,0.8);
                        opacity:1;
                        transition: 0.3s ease-in;
                    }
                    .wedding-venue__map-overlay{
                        position: absolute;
                        border-radius: 8px;
                        background: rgba(211,211,211);
                        width: 100%;
                        z-index: 1;
                        height: 100%;
                        opacity:0;
                        cursor: pointer;
                    }
                    .wedding-venue__map-container{
                        width: 100%;
                        aspect-ratio: 1;
                        background-position: center !important;
                        background-repeat: no-repeat !important;
                        border-radius: 22px;
                        box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
                        position:relative;
                    }
                    .wedding-venue__main-container{
                        position:relative;
                        padding-top: 120px;
                    }
                    .wedding-venue__location-card{
                        background: white;
                        width: 450px;
                        box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
                        padding: 16px 24px 24px;
                        border-radius: 6px;
                    }
                    .wedding-venue__main-content{
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        flex-direction: column;
                    }
                    .wedding-venue__main-container::after{
                        background: rgba(197,144,151,.8);
                        content: "";
                        height: 430px;
                        left: 0;
                        position: absolute;
                        top: 0;
                        width: 100%;
                        z-index: -1;
                    }
                    @media only screen and (max-width:767px){
                        .wedding-venue__main-content{
                            padding:0px 24px;
                        }
                        .wedding-venue__location-card{
                            width:100%;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_Venue