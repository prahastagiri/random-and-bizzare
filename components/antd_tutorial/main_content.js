import { Button, Progress } from 'antd';
import Modal from 'antd/lib/modal/Modal'
import React, { Component } from 'react'

const LineProgress = "line"
const CircularProgress = "circle"

export class main_content extends Component {
    totalSteps = 5;
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            stepCounter: 0,
        }
    }

    openModal = () => {
        this.setState({ isModalOpen: true })
    }

    closeModal = () => {
        this.setState({ isModalOpen: false, stepCounter: 0 })
    }

    handleNext = () => {
        var step = this.state.stepCounter
        if (step < this.totalSteps) {
            step++;
        } else {
            this.closeModal()
        }
        this.setState({ stepCounter: step })
    }

    handlePrev = () => {
        var step = this.state.stepCounter
        if (step > 0) {
            step--;
        } else {
            this.closeModal()
        }
        this.setState({ stepCounter: step })
    }

    calculatePercent = () => {
        return ((this.state.stepCounter / this.totalSteps) * 100)
    }

    progressComponent = (type) => {
        if(type==LineProgress){
            return this.state.stepCounter > 0 ? <Progress percent={this.calculatePercent()} showInfo={false} strokeColor={"#52c41a"} /> : ""
        }else if(type==CircularProgress){
            return this.state.stepCounter > 0 ? <Progress type="circle" percent={this.calculatePercent()} format={percent => <p className='tut-progress-text'><span>{this.state.stepCounter}</span>/{this.totalSteps}</p>} strokeColor={"#52c41a"} /> : ""
        }
        
    }

    render() {
        var modalProps = {
            title: null,
            open: this.state.isModalOpen,
            onCancel: this.closeModal,
            footer: null,
            closable: !this.state.stepCounter == 0,
            wrapClassName: "tutorial-modal",
        }
        return (
            <div className='tutorial-main-content-container'>
                <Modal {...modalProps}>
                    <header>
                        <p className='tutorial-modal-main-title'>Welcome to CRM</p>
                        <p className='tutorial-modal-main-subtitle'>Your secret weapon to get exclusive leads and provide exceptional customer engagement</p>
                    </header>
                    <main className='tutorial-body'>
                        {this.progressComponent(LineProgress)}
                        <div className='image-container' style={{"position":"relative"}}>
                            <div className='tutorial-body-image-1'></div>
                            <div className='circle-progress-wrapper'>
                            {this.progressComponent(CircularProgress)}
                        </div>
                        </div>
                        
                        <div className='tutorial-status'>Step: {this.state.stepCounter} - Progress: {this.calculatePercent()}% </div>
                    </main>
                    <footer className={this.state.stepCounter == 0 ? 'tutorial-footer-center' : 'tutorial-footer-right'}>
                        <p className='tutorial-back-button' onClick={this.handlePrev}>{this.state.stepCounter == 0 ? "Dismiss" : "Back"}</p>
                        <Button className='tutorial-next-button' onClick={this.handleNext}>{this.state.stepCounter == 0 ? "Start Tutorial" : "Next"}</Button>
                    </footer>
                </Modal>
                <style jsx global>
                    {`
                    .tut-progress-text{
                        color:#cecece;
                        opacity:0.9;
                        margin-bottom:0px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                    }
                    .tut-progress-text span{
                        color:white;
                        font-size: 2em;
                    }
                    .circle-progress-wrapper{
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                    .image-container{
                        height: 300px;
                        display: flex;
                        background:#fbfbfb;
                        border-radius: 12px;
                        border: 1px solid black;
                        margin-top:12px;
                        margin-bottom:24px;
                    }
                    .tutorial-body-image-1{
                        background: url(https://images.unsplash.com/photo-1487766036723-04aebf785670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80)no-repeat;
                        height: 80%;
                        width: 80%;
                        margin: auto;
                        background-size: cover;
                        display: block;
                        border-radius: 15.5px;
                    }
                    .tutorial-body-image-2{
                        background:url('https://images.unsplash.com/photo-1487766036723-04aebf785670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80') no-repeat;
                        height: 104px;
                        width: 186px;
                    }
                    .tutorial-body-image-3{
                        background:url('https://images.unsplash.com/photo-1487766036723-04aebf785670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80') no-repeat;
                        height: 229px;
                        width: 129px;
                    }
                    .tutorial-status{
                        text-align:center;
                    }
                    .tutorial-back-button{
                        cursor: pointer;
                        color: #ff5222;
                        margin-bottom: 0px;
                        display: flex;
                        align-items: center;
                    }
                    .tutorial-footer-center{
                        display:flex;
                        justify-content: space-evenly;
                        align-items: center;
                        padding: 20px 20px 4px;
                    }
                    .tutorial-footer-right{
                        display: flex;
                        gap: 56px;
                        justify-content: flex-end;
                        padding: 20px 20px 4px;
                    }
                    .tutorial-modal .ant-modal .ant-modal-content{
                        border-radius:8px;
                    }
                    .tutorial-modal .ant-modal .ant-modal-content .ant-modal-body{
                        padding: 44px 20px 16px;
                    }
                    .tutorial-modal-main-title{
                        color: #000;
                        text-align: center;
                        font-size: 22px;
                        font-family: Poppins;
                        font-weight: 600;
                        line-height: 32px;
                        margin-bottom:0px;
                    }
                    .tutorial-modal-main-subtitle{
                        color: #4B5563;
                        text-align: center;
                        font-size: 12px;
                        font-family: Poppins;
                        line-height: 22px;
                        margin: 4px auto 0px;
                        width: 317px;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default main_content