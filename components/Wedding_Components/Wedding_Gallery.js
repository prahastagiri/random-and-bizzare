import React, { Component, createRef } from 'react'

import Constanta from '@/Assets/constanta'
import Wedding_MiddleIcon from './Wedding_MiddleIcon'
import Wedding_ImagePopup from './Wedding_ImagePopup'
import { Carousel } from 'antd'

const imageList = [
    "https://images.pexels.com/photos/2946811/pexels-photo-2946811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2946812/pexels-photo-2946812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4061232/pexels-photo-4061232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
]

export class Wedding_Gallery extends Component {
    modalRef = createRef();

    constructor(props) {
        super(props)

        this.state = {
            isDesktop : true
        }
    }
    generateDesktopGallery = () => {
        return (
        <div className='wedding-gallery__photo-container'>
            <div className='wedding-gallery__photo-items-wrapper'>
                {imageList.map((item, index) => {
                    return (
                        <div className='wedding-gallery__photo-item' onClick={() => this.showImagePopup(item, index)} key={`image-item-${index}`}>
                            <div className='wedding-gallery__photo-item-overlay'></div>
                            <img src={item} className='wedding-gallery__photo-tag' />
                        </div>
                    )
                })}
            </div>
        </div>
        )
    }
    generateMobileGallery = () => {
        return (
            <Carousel autoplay>
                {imageList.map((item, index) => {
                    return (
                        <div className='wedding-gallery__photo-item-mobile-wrapper'>
                            <div className='wedding-gallery__photo-item-mobile' style={{backgroundImage:`url('${item}')`}}>
                        </div>
                            {/* <img src={item} className='wedding-gallery__photo-tag-mobile'/> */}
                        </div>
                    )
                })}
            </Carousel>
        )
    }
    toggleImageGallery = () => {
        if (typeof window !== "undefined" && window.innerWidth < 992) {
            this.setState({isDesktop : false})
        } else if (typeof window !== "undefined" && window.innerWidth > 992) {
            this.setState({isDesktop : true})
        }
    }
    componentDidMount = () => {
        this.toggleImageGallery();
        window.addEventListener('resize', this.toggleImageGallery);
    }
    showImagePopup = (image, index) => {
        this.modalRef?.current?.openPopup(image, index)
    }
    render() {
        return (
            <div className='wedding-gallery__main-container'>
                <Wedding_MiddleIcon icon={Constanta.dove} width={50} height={50} />
                <p className='wedding-gallery__main-title'>Sweet Captured Moments</p>
                {this.state.isDesktop ? this.generateDesktopGallery() : this.generateMobileGallery() }
                <Wedding_ImagePopup ref={this.modalRef} imageList={imageList} />
                <style jsx global>
                    {`
                    .wedding-gallery__photo-items-wrapper{
                        display: flex;
                        align-items: center;
                        flex-wrap: wrap;
                        gap: 28px;
                        justify-content: center;
                    }
                    .wedding-gallery__photo-tag{
                        width: 100%;
                    }
                    .wedding-gallery__main-title{
                        font-family: "Playball",cursive;
                        margin-bottom: 48px;
                        font-size: 45px;
                        text-align: center;
                    }
                    .wedding-gallery__photo-container{
                        width:960px;
                        margin:auto;
                    }
                    .wedding-gallery__photo-item{
                        position: relative;
                        width: 31.39%;
                    }
                    .wedding-gallery__photo-item:hover .wedding-gallery__photo-item-overlay{
                        background: rgba(255,255,255,0.8);
                        opacity:1;
                        transition: 0.3s ease-in;
                    }
                    .wedding-gallery__photo-item-overlay{
                        position: absolute;
                        background: rgba(211,211,211);
                        width: 100%;
                        z-index: 1;
                        height: 100%;
                        opacity:0;
                        cursor: pointer;
                    }
                    .wedding-gallery__photo-tag-mobile{
                        width:inherit;
                    }
                    .wedding-gallery__photo-item-mobile{
                        position: relative!important;
                        width: 100% !important;
                        aspect-ratio: 1 !important;
                        background-repeat: no-repeat !important;
                        background-size: contain !important;
                        background-position: center !important;
                    }
                    .wedding-gallery__photo-item-mobile-wrapper{
                        padding:12px 24px;
                        background-color:rgb(254, 190, 199);
                    }
                    @media only screen and (max-width:767px){
                        .wedding-gallery__photo-container{
                            width:100%;
                        }
                    }
                `}
                </style>
            </div>
        )
    }
}

export default Wedding_Gallery