import React, { Component, createRef } from 'react';
import { createAvatar } from '@dicebear/core';
import { thumbs } from '@dicebear/collection';
import { Avatar, Button, Form, Input, List, Radio, Skeleton, Tooltip } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { BulbTwoTone } from '@ant-design/icons';
import Wedding_MessageForm from './Wedding_MessageForm';

const MessageListCLassname = "wedding-message__message-list"

export class Wedding_MessageList extends Component {
    formRef = createRef();

    constructor(props) {
        super(props);

        this.state = {
            listData: [],
            listLoading: false,
        }
    }

    componentDidMount = () => {
        console.log(this.props.messages);
        if (this.props.messages) {
            var result = []
            this.props.messages.map((item) => {
                result.push(this.createMessageObject(item))
            })
            this.setState({ listData: result })
        }
    }

    createMessageObject = (item) => {
        return {
            name: item.attributes.name,
            message: item.attributes.message,
            isAttending: item.attributes.attending,
        }
    }

    generateAvatar = (seed) => {
        const avatar = createAvatar(thumbs, {
            seed: Math.random(),
        });
        const dataUri = avatar.toDataUriSync();

        return dataUri
    }

    componentDidUpdate(prevProps) {
        if (JSON.stringify(prevProps.messages) != JSON.stringify(this.props.messages)) {
            var result = []
            this.props.messages.map((item) => {
                result.push(this.createMessageObject(item))
            })
            this.setState({ listData: result }, () => {
                var el = document.querySelector("." + MessageListCLassname)
                console.log(el, MessageListCLassname)
                el.scrollTop = el.scrollHeight;
            })
        }
    }

    handleLoadMore = () => {
        console.log("load more");
    }

    handleShowPopup = () => {
        // this.formRef?.current?.showPopup();
        this.formRef?.current?.showDrawer();
    }
    generateList = (messageData) => {
        if(messageData && messageData.length>0){
            return messageData.map((item,index) => {
                var imgsrc = this.generateAvatar(index + 1);
                return (
                    <List.Item key={`message-list-${index}`}>
                        <List.Item.Meta
                            avatar={<Avatar src={imgsrc} />}
                            title={<a href="https://ant.design">{item.name}</a>}
                            description={item.message}
                        />
                        <Tooltip title={item.isAttending ? "Attending" : "Not Attending"}>
                            <BulbTwoTone twoToneColor={item.isAttending ? "#ffd117" : "#e3e3e3"} />
                        </Tooltip>
                    </List.Item>
                )
            })
        }else{
            return;
        }
    }

    render() {
        return (
            <div className='wedding-message__message-container' >
                <Wedding_MessageForm handleSubmit={this.props.handleSubmit} ref={this.formRef} coupleid={this.props.coupleid}/>
                <div className="wedding-message_response-list-container">
                    <div className={MessageListCLassname}>
                        <List
                            className="wedding-message_response-list"
                            loading={false}
                            itemLayout="horizontal"
                        >
                            {this.generateList(this.state.listData)}
                        </List>
                    </div>
                    <Button className="wedding-message__show-form-popup" onClick={this.handleShowPopup}>
                        Say something nice for the couple!
                    </Button>
                </div>
                <style jsx global>
                    {`
                    .wedding-message__show-form-popup{
                        width:100%;
                        height: fit-content;
                        font-size: 16px;
                        background:rgb(214,99,113);
                        color: white;
                        border-radius:8px;
                        height: 40px;
                    }
                    .wedding-message__show-form-popup:hover,
                    .wedding-message__show-form-popup:focus,
                    .wedding-message__show-form-popup:active{
                        width:100%;
                        height: fit-content;
                        font-size: 16px;
                        background:rgb(214,99,113);
                        color: white;
                        border-radius:8px;
                        height: 40px;
                        opacity:0.7;
                        border:none;
                    }
                    .wedding-message__message-list{
                        padding: 16px;
                        box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
                        margin-bottom:8px;
                    }
                    .wedding-message_response-list-container{
                        padding: 24px;
                    }
                    .wedding-message__name-form{
                        border-radius:8px;
                    }
                    .wedding-message__message{
                        border-radius:8px;
                    }
                    #wedding_message_isAttending{
                        width:100%;
                    }
                    #wedding_message_isAttending label{
                        width:50%;
                        text-align:center;
                        color:rgb(214, 99, 113);
                        transition: all 0.3s;
                        background: white;
                        border-top-left-radius:8px;
                        border-bottom-left-radius:8px;
                    }
                    #wedding_message_isAttending label:last-child{
                        border-top-left-radius:0px;
                        border-bottom-left-radius:0px;
                        border-top-right-radius:8px;
                        border-bottom-right-radius:8px;
                    }
                    #wedding_message_isAttending label:hover{
                        opacity: 0.7
                    }
                    #wedding_message_isAttending .ant-radio-button-wrapper-checked{
                        border: 1px solid rgb(214, 99, 113);
                        background: rgb(214, 99, 113);
                        color: white;
                    }
                    #wedding_message_isAttending .ant-radio-button-wrapper-checked::before{
                        background-color: rgb(214, 99, 113);
                    }
                    .wedding-message__message-container{
                        font-family: Jost;
                        display:flex;
                        justify-content:center;
                        gap: 32px;
                        flex-direction:row;
                    }
                    .wedding-message_response-list{
                        width: 700px;
                        overflow-x: auto;
                        height:385px;
                        padding:8px;
                    }
                    @media only screen and (max-width:992px){
                        .wedding-message__message-container{
                            flex-direction:column;
                            gap:0px;
                        }
                    }
                    @media only screen and (max-width:767px){
                        .wedding-message__message-container{
                            flex-direction:column;
                            gap:0px;
                        }
                        .wedding-message_response-list{
                            width: 100%;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_MessageList