import React, { Component } from 'react'
import { differenceInMilliseconds } from "date-fns";

export class Wedding_CountDown extends Component {
    constructor(props) {
        super(props);

        const eventFormat = "DD MMMM YYYY HH:SS";

        this.eventFormat = eventFormat;
        this.eventDate = this.props.eventDate;

        this.currentDate = null;
        this.eventTime = null;
        this.currentTime = null;
        this.diffTime = null;

        this._second = 1000;
        this._minute = this._second * 60;
        this._hour = this._minute * 60;
        this._day = this._hour * 24;

        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    calcDays = () => Math.floor(this.diffTime / this._day);

    calcHours = () => Math.floor((this.diffTime % this._day) / this._hour);

    calcMinutes = () => Math.floor((this.diffTime % this._hour) / this._minute);

    calcSeconds = () => Math.floor((this.diffTime % this._minute) / this._second);

    calculateAll() {
        this.eventTime = new Date(this.eventDate);
        this.currentTime = new Date();

        this.diffTime = differenceInMilliseconds(this.eventTime, this.currentTime);

        const days = this.calcDays();
        const hours = this.calcHours();
        const minutes = this.calcMinutes();
        const seconds = this.calcSeconds();

        this.setState({
            days,
            hours,
            minutes,
            seconds
        });

        requestAnimationFrame(() => this.calculateAll());
    }

    componentDidMount() {
        this.calculateAll();
    }
    render() {
        return (
            <div className='wedding-couple-profile__countdown-container'>
                <div className='wedding-couple-profile__countdown-box'>
                    <p className='wedding-couple-profile__countdown-text'>{this.state.days} days</p>
                </div>
                <div className='wedding-couple-profile__countdown-box'>
                    <p className='wedding-couple-profile__countdown-text'>{this.state.hours} hours</p>
                </div>
                <div className='wedding-couple-profile__countdown-box'>
                    <p className='wedding-couple-profile__countdown-text'>{this.state.minutes} minutes</p>
                </div>
                <div className='wedding-couple-profile__countdown-box'>
                    <p className='wedding-couple-profile__countdown-text'>{this.state.seconds} seconds</p>
                </div>
                <style jsx global>
                {`
                    .wedding-couple-profile__countdown-container{
                        display:flex;
                        gap: 16px;
                        flex-wrap:wrap;
                        justify-content: center;
                        align-items:center;
                    }
                    .wedding-couple-profile__countdown-box{
                        height: 150px;
                        width:150px;
                        display: flex;
                        align-items:center;
                        justify-content:center;
                        border: 1px solid lightgrey;
                    }
                    .wedding-couple-profile__countdown-text{
                        font-size:24px;
                        margin: 0px;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_CountDown