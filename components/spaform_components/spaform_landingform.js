import { Carousel, Form, Progress,Input } from 'antd'
import React, { Component, createRef } from 'react'

const formPerStep = [
    ["loan1","loan2","loan3"]
]

export class spaform_landingform extends Component {
    carouselRef = createRef()
    formRef = createRef()
    constructor(props) {   
        super(props);

        this.state = {
            currentForm: 0,
            disableNavigation:false,
        }
    }

    afterCarouselChange = (a,b,c) => {
        if(this.state.disableNavigation==true){
            this.setState({ disableNavigation:false })
        }
    }

    beforeCarouselChange = (from, to) => {
        if(this.state.disableNavigation==false){
            this.setState({ disableNavigation:true })
        }
    }

    onNextClick = () => {
        var next = this.state.currentForm + 1
        if(next <= 2){
            this.setState({currentForm: next},() => {
                this.carouselRef.current.goTo(next);
            })
        }
    }
    onPrevClick = () => {
        var prev = this.state.currentForm - 1
        if(prev >= 0){
            this.setState({currentForm: prev},() => {
                this.carouselRef.current.goTo(prev);
            })
        }
    }

    validateStep = () => {
        var step = this.state.currentForm;
        this.formRef.current.validateFields(formPerStep[step])
        .then(values => {
            this.setState({ disableNavigation: false },()=>{
                this.onNextClick();
            });
        })
        .catch(errorInfo => {
            console.log("Failed submitting step")
            this.setState({disableNavigation: true})
        })
    }

    validateFields = () => validate

    handleFormOkButton = () => {
        console.log("form filled @", this.state.currentForm, this.state.currentForm+1 );
        if(this.state.currentForm==2){
            console.log("SUBMIT")
        }
    }

    onFinish = (value) => {
        console.log(value);
    }
    
  render() {
    var progress = Math.round(((this.state.currentForm+1)/3) * 100)
    return (
      <div className='spaform-landing__wrapper'>
        <div className='spaform-landing__container'>
            <div className='spaform-landing-title__container'>
                <p>Title Of the thingy thing on the left</p>
            </div>
            <div className='spaform-landing-form__container'>
                <div className='spaform-landing-progress__container'>
                    <Progress percent={progress} showInfo={false} strokeColor={"#52c41a"} />
                </div>
                <div className='spaform-landing-questions__container'>
                    <Form 
                        ref={this.formRef}
                        onFinish = {this.onFinish}
                    >
                        <Carousel 
                            ref={this.carouselRef}
                            dotPosition={"left"} 
                            dots={false} 
                            afterChange={this.afterCarouselChange} 
                            beforeChange={this.beforeCarouselChange}
                        >   
                            <div className='spaform-landing-question' >
                                <div className='form__item'>
                                    <p>NGEEENG</p>
                                    <Form.Item name="loan1" rules={
                                        [
                                            {required: true, message: 'Please input your nickname',},
                                        ]
                                    }>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div className='form__item'>
                                    <p>Aduuh gantengnya</p>
                                    <Form.Item name="loan2" rules={
                                        [
                                            {required: true, message: 'Please input your nickname',},
                                        ]
                                    }>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <div className='form__item'>
                                    <p>Narji! Bisa dipercepat ndak?</p>
                                    <Form.Item name="loan3" rules={
                                        [
                                            {required: true, message: 'Please input your nickname',},
                                        ]
                                    }>
                                        <Input />
                                    </Form.Item>
                                </div>
                                <button onClick={this.validateStep}>OK</button>
                            </div>
                            <div className='spaform-landing-question' >
                                <p>FORM 2</p>
                                <button>OK</button>
                            </div>
                            <div className='spaform-landing-question' >
                                <p>FORM 3</p>
                                <Form.Item>
                                    <button htmltype="submit">OK</button>
                                </Form.Item>
                            </div>
                        </Carousel>
                    </Form>
                </div>
                <div className='spaform-landing-question__navigation-container'>
                    <button onClick={this.onPrevClick} disabled={this.state.disableNavigation || this.state.currentForm==0}>
^
                    </button>
                    <button onClick={this.onNextClick} disabled={this.state.disableNavigation || this.state.currentForm==2}>
V
                    </button>
                </div>
            </div>
        </div>
        <style jsx global>
        {`
            .spaform-landing-questions__container{
                border: 1px solid green;
                min-height: 438px;
                min-width: 242px;
                margin: 0 auto;

            }
            .spaform-landing-question{
                background:darkblue;
                color:white;
                min-height: 438px;
            }
            .spaform-landing-form__container{
                width: 660px;
                height: 497px;
                border: 1px solid red;
                margin: 24px;
            }
            .spaform-landing__container{
                display: flex;
                justify-content: space-between;
                border: 1px solid blue;
            }
        `}
        </style>
      </div>
    )
  }
}

export default spaform_landingform