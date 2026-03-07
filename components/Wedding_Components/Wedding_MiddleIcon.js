import React, { Component } from 'react'
import Constanta from '@/Assets/constanta';

import BookmarkIcon from '@/Assets/Icons/BookmarkIcon'
import DoveIcon from '@/Assets/Icons/DoveIcon';

export class Wedding_MiddleIcon extends Component {
    constructor(props){
        super(props);

    }

    generateIcon = (icon) => {
        switch (icon) {
            case Constanta.bookmark:
                return <BookmarkIcon height={this.props.height} width={this.props.width} isWhite={this.props.isWhite}/>
            case Constanta.dove:
                return <DoveIcon height={this.props.height} width={this.props.width} isWhite={this.props.isWhite}/>
        }

    }
    render() {
        const extra = this.props.isWhite ? "white" : ""
        return (
            <div className={`wedding-couple-profile__middle-icon ${extra}`}>
                {this.generateIcon(this.props.icon)}
                <style jsx global>
                {`
                    .wedding-couple-profile__middle-icon{
                        position: relative;
                        font-size: 40px;
                        text-align:center;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .white::before{
                        background:#FFF !important
                    }
                    .white::after{
                        background:#FFF !important
                    }
                    .wedding-couple-profile__middle-icon::before{
                        background:#bbb;
                        content:"";
                        height:1px;
                        position:absolute;
                        background: #bbb;
                        content: "";
                        height: 1px;
                        position: absolute;
                        width: 60px;
                        top: 50%;
                        left: calc(50% - 100px);
                    }
                    .wedding-couple-profile__middle-icon::after{
                        background:#bbb;
                        content:"";
                        height:1px;
                        position:absolute;
                        background: #bbb;
                        content: "";
                        height: 1px;
                        position: absolute;
                        width: 60px;
                        top: 50%;
                        right: calc(50% - 100px);
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_MiddleIcon