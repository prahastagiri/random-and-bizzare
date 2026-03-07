import Link from 'next/link';
import React, { Component, createRef } from 'react'

import MainContent from '../../components/antd_tutorial/main_content'
import PageHeader from '../../components/Main_Header/mainHeader'

export class antd_tutorial extends Component {
  tutorialRef = createRef();
  constructor(props){
    super(props);
  }

  handleOpenPopup = () => {
    this.tutorialRef.current.openModal()
  }

  render() {
    return (
      <div className='antd-tutorial-main-wrapper'>
        <header className='antd-tutorial-main-header-container'>
          <PageHeader/>
        </header>
        <main>
          <div className='description-container'>
            <p className='tut-main-title'>Tutorial popup dengan ANTD</p>
            <p className='tut-main-description'><strong>Halo!</strong> Di halaman ini terdapat komponent popup modal dari ANTD.
            Tujuan halaman ini adalah bagaimana mengkombinasikan komponen progress ANTD untuk mensimulasikan 5 langkah popup tutorial untuk user.
            Langkah pertama akan dimulai pada index 0. Tombol yang ada hanya dismiss dan Start tutorial sebagai penanda bahwa ini adalah screen awal
            untuk user. Selanjutnya tombol start tutorial akan menjadi next dan dissmiss menjadi back kecuali untuk tahap akhir akan kembali menjadi dismiss.
            Silahkan klik tombol dibawah untuk melihat demonya.
            </p>
            
            <div className='tut-button-container'>
              <button className='tut-button desktop' onClick={this.handleOpenPopup}>Buka Popup Tutorial</button>
              <button className='tut-button mobile' onClick={()=>alert("Belum ada")}>Buka Bottom Sheet Tutorial</button>
            </div>
            
          </div>
          <MainContent ref={this.tutorialRef}/>
        </main>
        <style jsx global>
          {`
            .tut-button-container{
              display:flex;
              justify-content:center;
              gap:8px;
            }
            .desktop{
              display: block;
            }
            .mobile{
              display:none;
            }
            .tut-button{
              box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);
              -webkit-box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);
              -moz-box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);

              padding:12px;
              border-radius: 8px;
              border: none;
              cursor:pointer;
              transition: all 0.3s
            }
            .tut-button:hover{
              transform: scale(1.1);
              opacity:0.7;
            }
            .tut-main-title{
              font-size: 18px;
              font-weight:bold;
            }
            .tut-main-description{
              text-align: justify;
            }
            .description-container{
              margin:24px;
              border: 1px solid #cecece;
              border-radius: 8px;
              padding: 24px 16px;
              box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);
              -webkit-box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);
              -moz-box-shadow: 1px 8px 5px -1px rgba(0,0,0,0.12);
            }
            @media only screen and (max-width:767px){
              .desktop{
                display: block;
              }
              .mobile{
                display:block;
              }
            }
          `}
        </style>
      </div>
    )
  }
}

export default antd_tutorial