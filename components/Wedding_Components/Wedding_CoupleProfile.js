import React, { Component } from 'react'

export class Wedding_CoupleProfile extends Component {
    constructor(props){
        super(props)
    }

    generateProfileCard = (personData, type) => {
        return (
            <div className='wedding-couple-profile__card'>
                <div className={`wedding-couple-profile__card-head ${type}`}>
                    <div className='wedding-couple-profile__photo-container'>
                        <div className='wedding-couple-profile__photo' style={{ backgroundImage: `url(${personData.photo})` }}></div>
                    </div>
                </div>
                <div className={`wedding-couple-profile__card-content ${type + "-card-content"}`}>
                    <p className='wedding-couple-profile__name'>{personData.name}</p>
                    <p className='wedding-couple-profile__description'>{personData.description}</p>
                </div>
                <style jsx global>
                {`
                    .wedding-couple-profile__name{
                        font-family: 'Playball', cursive;
                        margin-bottom:0px;
                        font-size: 28px;
                    }
                    .wedding-couple-profile__card{
                        display:flex;
                        gap: 32px;
                    }
                    .wedding-couple-profile__card-head{
                        // border: 1px solid red;
                    }
                    .groom{
                        order:2;
                        text-align: right;
                    }
                    .groom-card-content{
                        text-align: right;
                    }
                    .wedding-couple-profile__photo-container{
                        border-radius:50%;
                        padding: 20px;
                        box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
                        width:fit-content;
                        margin: auto;
                    }
                    .wedding-couple-profile__photo{
                        height:350px;
                        width:350px;
                        background-size: cover;
                        background-repeat: no-repeat;
                        background-position: center;
                        border-radius:50%;
                    }
                    .wedding-couple-profile__card-content{
                        display: flex;
                        flex-direction: column;
                        align-self: center;                 
                    }
                    .wedding-couple-profile__description{
                        font-family: Jost;
                        font-weight: 400;
                        font-size: 16px;
                        margin:0px;
                    }

                    @media only screen and (max-width: 767px){
                        .wedding-couple-profile__card{
                            flex-direction:column;
                        }
                        .wedding-couple-profile__card-content{
                            padding: 0px 24px;
                            text-align: center;
                        }
                        .groom{
                            order:unset;
                        }
                        .wedding-couple-profile__photo{
                            height: 100%;
                            width: 100%;
                        }
                        .wedding-couple-profile__photo-container{
                            width: 85%;
                            aspect-ratio: 1;
                        }
                    }
                `}
                </style>
            </div>
        )
    }

    render() {
        return (
            this.generateProfileCard(this.props.personData, this.props.type)
        )
    }
}

export default Wedding_CoupleProfile