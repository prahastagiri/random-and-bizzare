import Link from 'next/link'

export default function Home() {
  return (
    <div className='landing-page-main-container'>
      <div className='landing-page-title-container'>
        <p className='landing-page-main-title'>Random & Bizzare</p>
        <p className="landing-page-main-desc" style={{textAlign:"center"}}>A Collection of Mini Projects created yours truly</p>
      </div>
      
      <div className='landing-page-mini-projects'>
        <p>Mini Projects </p>
        <ul className='landing-page-mini-projects-list'>
          <li><Link href="/mini_projects/antd_tutorial">Tutorial Popup with Steps</Link></li>
          <li><Link href="/mini_projects/react_collapse">Collapsible with third party collapse library</Link></li>
          <li><Link href="/wedding">Personal wedding website</Link></li>
          <li><Link href="/spa-form">Single Page Form</Link></li>
        </ul>
      </div>
      
      <style jsx global>
      {`
        
        .landing-page-mini-projects-list{
          list-style: none;
          padding-left: 0px;
        }
        .landing-page-title-container, .landing-page-mini-projects{
          padding: 16px 24px
        }
        .landing-page-main-container{
          max-width: 500px;
          margin: auto;
        }
        .landing-page-main-title{
          font-size: 48px;
          text-align:center;
          margin-bottom:0px;
        }
        .landing-page-main-desc{
          font-size: 12px;
          text-align:center;
          margin-bottom:8px;
        }
      `}
      </style>
    </div>
  )
}
