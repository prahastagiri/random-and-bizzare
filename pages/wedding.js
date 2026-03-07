import React, { Component } from 'react'

import { WeddingAPI } from '@/services/WeddingServices.services.js'

import CoupleProfile from '../components/Wedding_Components/Wedding_CoupleProfile.js'
import Wedding_Hero from '@/components/Wedding_Components/Wedding_Hero.js'
import Wedding_Timeline from '@/components/Wedding_Components/Wedding_Timeline.js'
import Wedding_Venue from '@/components/Wedding_Components/Wedding_Venue.js'
import Wedding_Gallery from '@/components/Wedding_Components/Wedding_Gallery.js'
import Wedding_MessageList from '@/components/Wedding_Components/Wedding__MessageList.js'
import Router from 'next/router'

const Groom = "groom";
const Bride = "bride";

export class wedding extends Component {
    

    static async getInitialProps({ req, res, url, query }){
        var groom, bride, messages;
        var couple = await WeddingAPI.getCoupleInfo();

        if(couple!=undefined){
            messages = await WeddingAPI.getAllMessage(couple?.data[0].id);
        
            if(couple && couple?.data){
                groom = await WeddingAPI.getGroomInfo(couple.data[0].attributes.groom_id)
                bride = await WeddingAPI.getBrideInfo(couple.data[0].attributes.bride_id)
            }
        }else{
            if (res) {
                // On the server, we'll use an HTTP response to
                // redirect with the status code of our choice.
                // 307 is for temporary redirects.
                res.writeHead(307,{Location: '/', }).end()
            } else {
                // On the client, we'll use the Router-object
                // from the 'next/router' module.
                Router.replace('/')
            }
        }

        return { query, groom, bride, couple, messages }
    }

    constructor(props) {
        super(props);

        this.state = {
            groomInfo: this.props.groom?.data?.attributes,
            brideInfo: this.props.bride?.data?.attributes,
            eventTime: this.props.couple?.data[0].attributes.event_time,
            messages: this.props.messages?.data,
            coupleid: this.props.couple?.data[0].id,
        }
    }

    generateDate = () => {
        var eventDate = new Date(this.state.eventTime);
        const FullMonth= ["January","February","March","April","May","June","July","August","September","October","November","December"];
        const ShortMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
        
        var date = eventDate.getDate()
        var month = eventDate.getMonth()
        var year = eventDate.getFullYear()

        return ` ${date} ${FullMonth[month]} ${year}`
    }

    handlePostMessage = async(body,callback) => {
        var response = await WeddingAPI.postSaveMessage(body)
        callback();
        this.handleGetMessage();
    }

    handleGetMessage = async() => {
        var response = await WeddingAPI.getAllMessage(this.state.coupleid);
        this.setState({messages:response?.data})
    }

    render() {
        return (
            <div className='wedding-couple-profile__main-container'>
                <div className='wedding-couple-profile__main-wrapper'>
                    <div className='wedding-couple-profile__main-content'>
                        <section className='wedding-main-navigation__container'>
                            <nav className='wedding-main-navigation' style={{textAlign:"center", fontSize:"48px"}}>
                                <h1>{this.props.query?.to}</h1>
                            </nav>
                        </section>
                        <section className='wedding-couple-profile__hero'>
                            <Wedding_Hero eventDate={this.state.eventTime} generateDate={this.generateDate} groom={this.state.groomInfo} bride={this.state.brideInfo}/>
                        </section>
                        <section className='wedding-couple-profile__container section-gap'>
                            <CoupleProfile personData={this.state.groomInfo} type={Bride}/>
                            <CoupleProfile personData={this.state.brideInfo} type={Groom}/>
                        </section>
                        <section className='wedding-couple-profile__timeline section-gap'>
                            <Wedding_Timeline/>
                        </section>
                        <section className='wedding-couple-profile__venue section-gap'>
                            <Wedding_Venue generateDate={this.generateDate}/>
                        </section>
                        <section className='wedding-couple-profile__captured-moment section-gap'>
                            <Wedding_Gallery/>
                        </section>
                        <section className='wedding-couple-profile__message section-gap'>
                            <Wedding_MessageList messages={this.state.messages} handleSubmit={this.handlePostMessage} coupleid={this.state.coupleid}/>
                        </section>
                        <section className='wedding-couple-profile__footer section-gap'>
                            
                        </section>
                    </div>
                </div>
                <style jsx global>
                    {`
                    html {
                        scroll-behavior: smooth;
                    }
                    .wedding-main-navigation{
                        height: 100px;
                        border: 1px solid lightgrey
                    }
                    .wedding-couple-profile__hero{
                        display:flex;
                        justify-content: space-around;
                    }
                    .wedding-couple-profile__container{
                        display:flex;
                        flex-direction: column;
                        gap: 24px;
                        max-width: 960px;
                        margin: auto;
                    }
                    .section-gap{
                        padding-top: 120px;
                    }
                    @media only screen and (max-width:767px){
                        .wedding-couple-profile__hero{
                            padding: 24px 0px;
                        }
                        .wedding-couple-profile__container{
                            gap: 48px;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default wedding