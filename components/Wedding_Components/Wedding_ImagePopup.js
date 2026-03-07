import { Modal } from 'antd'
import React, { Component } from 'react'

export class Wedding_ImagePopup extends Component {
    constructor(props){
        super(props)

        this.state = {
            isPopupOpen: false,
            imageToShow:null,
            imageList: this.props.imageList,
        }
    }

    shouldComponentUpdate(nextProps, nextState){
        if(
            JSON.stringify(nextProps)!=JSON.stringify(this.props) || 
            JSON.stringify(nextState)!=JSON.stringify(this.state)
        ){
            return true
        }
        return false
    }

    openPopup = (img,index) => {
        this.setState({isPopupOpen:true, imageToShow: img, imageIndex:index})
    }

    closePopup = () => {
        this.setState({isPopupOpen:false})
    }

    generateThumbnail = () => {
        return this.state.imageList?.map((item,index)=>{
            return (
                <div className={`wedding-image-popup__thumbnail-view-wrapper ${this.state.imageIndex==index ? "selected-thumbnail" : ""}`} key={`image-popup-${index}`}>
                    <div style={{backgroundImage:`url("${item}")`}} className="wedding-image-popup__thumbnail-view" onClick={()=>this.handleThumbnailCLicked(item, index)}/>
                </div>
                
            )
        })
    }

    handleThumbnailCLicked = (img,index) => {
        this.setState({imageToShow:img, imageIndex:index})
    }
    render() {
        return (
            <Modal 
                title="" 
                footer={null}  
                open={this.state.isPopupOpen} 
                onCancel={this.closePopup}
                width={"80%"}
            >
                <div className='wedding-image-popup__image-container'>
                    {/* <img src={this.state.imageToShow} className='wedding-image-popup__image-view' onLoad={this.handleImageOnLoad}/> */}
                    <div className='wedding-image-popup__image-view' style={{backgroundImage:`url("${this.state.imageToShow}")`}}/>
                </div>
                <div className='wedding-image-popup__thumbnail-container'>
                    {this.generateThumbnail()}
                </div>
                <style jsx global>
                {`
                    .wedding-image-popup__thumbnail-view-wrapper{
                        width: 122px;
                        cursor: pointer;
                        opacity:0.6;
                        box-shadow: 0 0 6.1px 3.9px rgba(28,31,86,.06);
                    }
                    .wedding-image-popup__image-container{
                        width:100%;
                        margin-top:24px;
                        justify-content: center;
                        align-items: center;
                        display:flex;
                        overflow-x:auto;
                    }
                    .wedding-image-popup__image-view{
                        background-position: center;
                        background-repeat: no-repeat;
                        background-size: contain;
                        width:66%;
                        aspect-ratio:1;
                    }
                    .wedding-image-popup__thumbnail-container{
                        display: flex;
                        gap: 24px;
                        overflow-x: auto;
                        margin-top: 24px;
                        justify-content: center;
                        align-items: center;
                    }
                    .wedding-image-popup__thumbnail-view{
                        width: 100%;
                        aspect-ratio: 1;
                        background-repeat: no-repeat;
                        background-position: center;
                        background-size: cover;                        
                    }
                    .selected-thumbnail{
                        opacity:1;
                        // transition: 0.3s width linear;
                        width: 130px;
                    }
                `}
                </style>
            </Modal>
            
        )
    }
}

export default Wedding_ImagePopup