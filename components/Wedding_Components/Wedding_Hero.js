import React, { Component } from 'react'
import Wedding_CountDown from './Wedding_CountDown'

export class Wedding_Hero extends Component {
    constructor(props){
        super(props);
    }

    capitalizeFirstLetter = (string) => {

        return string.toLowerCase().charAt(0).toUpperCase() + string.slice(1);
    }
    
    render() {
        const date = typeof this.props.generateDate == "function" ? this.props.generateDate() : "-";
        return (
            <div className='wedding-couple-profile__main-hero'>
                <div className='wedding-couple-profile__main-title'>
                    <h1 className='wedding-couple-profile__main-couple'>{this.capitalizeFirstLetter(this.props.groom?.nickname)} <span style={{color:"#d66371"}}>&</span> {this.capitalizeFirstLetter(this.props.bride?.nickname)}</h1>
                    <h2 className='wedding-couple-profile__main-date'>WE ARE GETTING MARRIED {date}</h2>
                    <div className='wedding__main-counter'><Wedding_CountDown eventDate={this.props.eventDate}/></div>
                </div>
                
                
                <div className='wedding-couple-profile__main-image'>
                    {/* <WeddingSample/> */}
                </div>
                <style jsx global>
                {`
                    .wedding-couple-profile__main-couple{
                        margin-bottom:0px;
                        font-family: 'Playball', cursive;
                        font-size: 60px;
                    }
                    .wedding-couple-profile__main-date{
                        margin-bottom:48px;
                    }
                    .wedding-couple-profile__main-hero{
                        width:100%;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }

                    @media only screen and (max-width: 767px){
                        .wedding-couple-profile__main-couple{
                            font-size: 48px;
                            text-align: center;
                        }
                        .wedding-couple-profile__main-date{
                            text-align:center;
                            margin-bottom: 24px;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_Hero