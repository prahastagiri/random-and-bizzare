import React, { useEffect, useState } from 'react'
import { Form, Input, Spin } from 'antd'
import { Collapse } from 'react-collapse'
const { TextArea } = Input
import { PlusOutlined, MinusOutlined, FacebookOutlined, LinkedinOutlined, InstagramOutlined, FileImageOutlined  } from '@ant-design/icons'


function socmed_form() {
    const maxText = 200;
    const SocialMedia = {
        facebook: "facebook",
        linkedin: "linkedin",
        instagram: "instagram",
        tiktok: "tiktok"
    }
    const [initialValues, setInitialValues] = useState({
        description: "Hello World",
        [SocialMedia.facebook]: "fb.sh/berita.hoax",
        [SocialMedia.linkedin]: "",
        [SocialMedia.instagram]: "",
        [SocialMedia.tiktok]: "tiktok/daily.hoax.news",
    })
    const shouldOpen = (type) => {
        return !!initialValues[type]
    }
    const [isFBOpen, setFBOpen] = useState(false)
    const [isLIOpen, setLIOpen] = useState(true)
    const [isIGOpen, setIGOpen] = useState(shouldOpen(SocialMedia.instagram))
    const [isTTOpen, setTTOpen] = useState(false)
    const [description, setDescription] = useState(initialValues.description || "");
    const [isDisable, setDisable] = useState(true)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setFBOpen(shouldOpen(SocialMedia.facebook))
        setTTOpen(shouldOpen(SocialMedia.tiktok))
    }, [])


    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log(values)
        // setLoading(true)
        // setTimeout(()=>{
        //     setLoading(false)
        // },1000)
    }

    const utilizeState = (state, set) => {
        switch (state) {
            case SocialMedia.facebook:
                return set ? setFBOpen(!isFBOpen) : isFBOpen;
            case SocialMedia.linkedin:
                return set ? setLIOpen(!isLIOpen) : isLIOpen;
            case SocialMedia.instagram:
                return set ? setIGOpen(!isIGOpen) : isIGOpen;
            case SocialMedia.tiktok:
                return set ? setTTOpen(!isTTOpen) : isTTOpen;
        }
    }

    const sosmedComponent = (sosmed) => (
        <section className='sosmed-form__container' key={sosmed.key}>
            <div className='sosmed-form__name-container'>
                {/* <p className='sosmed-form__icon'>{sosmed.icon}</p> */}
                {!!sosmed.icon.type ? sosmed.icon : ""}
                <p className='sosmed-form__label'>{sosmed.name}</p>
            </div>
            <div className='sosmed-form__form-control'>
                <Collapse key={sosmed.key} theme={{ collapse: 'sosmed-form__collapse-wrapper', content: 'sosmed-form__collapse-content-wrapper' }} isOpened={utilizeState(sosmed.key, false)}>
                    <Form.Item name={sosmed.key} style={{ margin: 0 }}>
                        <Input style={{ borderRadius: "4px", fontFamily: "Poppins" }} placeholder={sosmed.placeholder} />
                    </Form.Item>
                </Collapse>
                <p className='sosmed-form__trigger' onClick={() => utilizeState(sosmed.key, true)} key={`click-${sosmed.key}`}>
                    {!utilizeState(sosmed.key, false) ? <PlusOutlined /> : <MinusOutlined />}
                </p>
            </div>
        </section>
    )

    const createSosmedList = () => {
        const Sosmeds = [
            { icon: <FacebookOutlined />, key: SocialMedia.facebook, name: "Facebook", placeholder: "Facebook Link" },
            { icon: <LinkedinOutlined />, key: SocialMedia.linkedin, name: "LinkedIn", placeholder: "LinkedIn Link" },
            { icon: <InstagramOutlined />, key: SocialMedia.instagram, name: "Instagram", placeholder: "Instagram Link" },
            { icon: <FileImageOutlined />, key: SocialMedia.tiktok, name: "TikTok", placeholder: "TikTok Link" },
        ]
        return Sosmeds.map(sosmed => sosmedComponent(sosmed))
    }

    const onValuesChange = (changedFields, allFields) => {
        const { description } = allFields
        setDescription(description);
        var similar = 0
        for (const key in initialValues) {
            if(allFields[key]!=initialValues[key]){
                setDisable(false);
            }else{
                similar++
            }
        }
        if(similar==Object.keys(initialValues).length){
            setDisable(true)
        }
    }
    return (
        <div className='sosmed-card-wrapper'>
            <div className='card-container'>
                <header className='card-title'>
                    <h1>USER PROFILE DESCRIPTION WITH COLLAPSIBLE SOCIAL MEDIA LINKS</h1>
                </header>
                <main>
                    <Form
                        form={form}
                        name='sosmed-form-well'
                        onFinish={onFinish}
                        onValuesChange={onValuesChange}
                        initialValues={initialValues}
                    >
                        <section style={{ position: "relative" }}>
                            <p className='form-label'>Description</p>
                            <Form.Item name="description">
                                <TextArea
                                    maxLength={maxText}
                                    autoSize={{ minRows: 4, maxRows: 4 }}
                                    placeholder='Write your message here...'
                                    style={{ borderRadius: "4px", fontFamily: "Poppins" }}
                                />
                            </Form.Item>
                            <p className='sosmed-form__text-area-length'>{description.length}/{maxText}</p>
                        </section>
                        <section>
                            <p className='form-label'>Social Media</p>
                            {createSosmedList()}
                        </section>
                        <section className='sosmed-form__submit-container'>
                            <button htmltype="submit" disabled={isDisable}>Submit</button>
                        </section>
                    </Form>
                </main>
                <footer>

                </footer>
            </div>
            <style jsx global>
                {`
                    .sosmed-card-wrapper{
                        height:100vh;
                        width: 100vw;
                        padding-top:50px;
                    }
                    .sosmed-form__text-area-length{
                        width: fit-content;
                        margin:0px;
                        position: absolute;
                        bottom:0;
                        right: 16px;
                    }
                    .card-title{
                        text-align: center;
                    }
                    .sosmed-form__submit-container button:disabled{
                        background: #e1e1e1;
                        color: #a4a4a4;
                        border: none;
                        transition: all ease-in-out;
                    }
                    .sosmed-form__submit-container button:hover{
                        transition: all 0.2s ease-in-out;
                        background: black;
                        color: white;
                    }
                    .sosmed-form__submit-container button{
                        background: white;
                        color: black;
                        padding: 8px 16px;
                        font-weight: 500;
                        border-radius: 8px;
                        cursor:pointer;
                        transition: all 0.2s ease-in-out;
                        border: 1px solid black;
                    }
                    .sosmed-form__submit-container{
                        text-align:right;
                        margin-top:24px;
                    }
                    .sosmed-form__trigger{
                        margin: 0px 0px 0px 0px;
                        cursor: pointer;
                    }
                    .sosmed-form__icon{
                        margin: 2px 0px 0px 0px;
                    }
                    .sosmed-form__label{
                        font-size: 16px;
                        margin: 0px 0px 0px 0px;
                    }
                    .sosmed-form__container{
                        display: flex;
                        justify-content: space-between;
                        border-bottom: 1px solid black;
                        padding: 8px 0px;
                    }
                    .sosmed-form__name-container{
                        display: flex;
                        gap: 4px;
                        width:30%;
                        align-items:center;
                    }
                    .sosmed-form__form-control{
                        display: flex;
                        flex:1;
                        gap: 8px;
                        align-items:center;
                    }
                    .sosmed-form__collapse-wrapper {
                        transition: height 0.1s;
                        flex:1;
                    }
                    .card-container{
                        max-width:640px;
                        margin: auto;
                        border: 3px solid black;
                        padding: 16px;
                        border-radius: 16px;
                    }
                    .form-label{
                        font-weight: bold;
                        font-size: 16px;
                        margin: 0px;
                        font-family: Poppins;
                    }
                `}
            </style>
        </div>
    )
}

export default socmed_form