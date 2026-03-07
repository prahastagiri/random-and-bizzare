import React, { Component, createRef } from 'react';
import { Button, Drawer, Form, Input, Modal, Radio, } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

export class Wedding_MessageForm extends Component {
    formRef = createRef();

    constructor(props) {
        super(props);

        this.state = {
            isPopupShow:false
        }
    }

    showPopup=()=>{
        this.setState({isPopupShow:true})
    }

    showDrawer=()=>{
        this.setState({isDrawerShow:true})
    }

    closePopup=()=>{
        this.setState({isPopupShow:false})
    }

    closeDrawer=()=>{
        this.setState({isDrawerShow:false})
    }


    onFinish = (values) => {
        var body = JSON.stringify({
            data: {
                name: values.name,
                message: values.message,
                attending: values.isAttending,
                coupleid: this.props.coupleid,
            },
        })

        if (typeof this.props.handleSubmit == "function") {
            this.props.handleSubmit(body, () => {
                this.formRef.current.resetFields()
            });
        }
    }

    onFinishFailed = (values) => {
        console.log(values)
    }

    handleLoadMore = () => {
        console.log("load more");
    }

    generateFormComponent = () => {
        const formAttributes = {
            ref: this.formRef,
            name: "wedding_message",
            initialValues: { isAttending: true },
            onFinish: this.onFinish,
            onFinishFailed: this.onFinishFailed,
            className: "wedding-message__form-container"
        }
        return (
            <div className='wedding-message__message-form-container'>
                <div className='wedding-message__message-form'>
                    <Form {...formAttributes}>
                        <Form.Item name="name" rules={[{ required: true, message: 'Name cannot be empty' }]}>
                            <Input size={"large"} placeholder='Please tell us your name!' className='wedding-message__name-form' />
                        </Form.Item>
                        <Form.Item name="message" rules={[{ required: true, message: 'Message cannot be empty' }]}>
                            <TextArea size={"large"} style={{ height: 120, resize: 'none' }} placeholder='Please enter you message!' className='wedding-message__message' />
                        </Form.Item>
                        <Form.Item name="isAttending">
                            <Radio.Group size={"large"} className="wedding-message__attend-button-container">
                                <Radio.Button className="wedding-message__attend-button" value={true}>Yes, I will be there</Radio.Button>
                                <Radio.Button className="wedding-message__attend-button" value={false}>Sorry, I can't come</Radio.Button>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit" className="wedding-message__attend-button-submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
                <style jsx global>
                    {`
                    .wedding-message__message-form-container{
                        margin-top: 32px;
                    }
                    .wedding-message__attend-button-submit{
                        width:100%;
                        height: fit-content;
                        font-size: 16px;
                        background:rgb(214,99,113);
                        color: white;
                        border-radius:8px;
                        height: 40px;
                    }
                    .wedding-message__attend-button-submit:hover,
                    .wedding-message__attend-button-submit:focus,
                    .wedding-message__attend-button-submit:active{
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
                    @media only screen and (max-width:992px){
                        .wedding-message__message-container{
                            flex-direction:column;
                            gap:0px;
                        }
                    }
                    @media only screen and (max-width:767px){
                        .wedding-message__message-form-container{
                            margin-top: 0px;
                        }
                        .wedding-message__message-container{
                            flex-direction:column;
                            gap:0px;
                        }
                        .wedding-message__form-container{
                            width: 100%;
                        }
                        #wedding_message_isAttending label{
                            font-size: 12px;
                            height: fit-content;
                        }
                        
                    }
                `}
                </style>
            </div>
        )
    }

    render() {
        return (
            // <Modal open={this.state.isPopupShow} footer={null} onCancel={this.closePopup} >
            //     {this.generateFormComponent()}
            // </Modal>
            <Drawer 
                placement="bottom" 
                onClose={this.closeDrawer} 
                open={this.state.isDrawerShow} 
                height={415}
                className="wedding-message__drawer"
            >
                {this.generateFormComponent()}
                <style jsx global>
                {`
                    .wedding-message__drawer .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header ant-drawer-header-title{
                        flex-direction: row-reverse;
                    }
                    .wedding-message__drawer .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header{
                        border-bottom: none;
                    }
                    .wedding-message__drawer .ant-drawer-content-wrapper .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-body{
                        padding-top:0px;
                    }
                `}
                </style>
            </Drawer>
        )
    }
}

export default Wedding_MessageForm