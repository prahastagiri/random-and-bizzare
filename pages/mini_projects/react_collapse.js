import { Button } from 'antd';
import React, { Component } from 'react'
import { Collapse } from 'react-collapse';
import PageHeader from '../../components/Main_Header/mainHeader'

import CollapseComponent from '../../components/react_collapse_component/react_collapse_component'

export class react_collapse extends Component {
    constructor(props){
        super(props);

        this.state={
            isOpened: false,
        }
    }
    toggleCollapse = () => {
        this.setState({isOpened:!this.state.isOpened})
    }
    
    render() {
        return (
            <div>
                <header className='react-collapse-main-header-container'>
                    <PageHeader />
                </header>
                <main className='react-collapse-container'>
                    <CollapseComponent title="your wife">
                        <CollapseComponent title="your wife's boyfriend">
                            <p className='react-collapse__item'>Lah bisa gitu ya</p>
                        </CollapseComponent>
                        <p className='react-collapse__item'>Bitcoin</p>
                        <p className='react-collapse__item'>Lamborgini</p>
                        <p className='react-collapse__item'>Fetuccini</p>
                        <p className='react-collapse__item'>Musolini</p>
                        <p className='react-collapse__item'>Hail!</p>
                    </CollapseComponent>
                    <CollapseComponent title="you"/>
                </main>
                <style jsx global>
                {`  .react-collapse-container{
                        width: 80%;
                        margin: auto;
                        border:2px solid #efefef;
                        border-radius 8px;
                        padding: 16px;
                    }
                    .react-collapse__item{
                        margin-bottom:0px;
                    }
                `}
                </style>
            </div>
        )
    }
}

export default react_collapse