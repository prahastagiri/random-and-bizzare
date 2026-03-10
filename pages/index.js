import Landing_Header from '@/components/LandingPage_Components/landing_header';
import Landing_Hero from '@/components/LandingPage_Components/landing_hero';
import Project_Group from '@/components/LandingPage_Components/project_group'
import PROJECT_LIST from '@/data/LandingPage_Data.json';

export default function Home() {
  return (
    <div className='landing-page-main-container'>
      <section className='bg-[--bg-two]'>
        <Landing_Header/>
        <Landing_Hero/>
      </section>
      <section className='bg-[--bg-three]'>
          <div className='landing-page-mini-projects'>
          {/* TODO:
                  - SORTING BY TIME
                  - SORTING BY TAG
                  - ADD DB TO SAVE PROJECT DATA AND IMAGES
                  - BEAUTIFY PROJECTS
            */}
          <Project_Group projects={PROJECT_LIST} navcolor={"bg-[--bg-three]"}/>
        </div>
      </section>
      <section className='bg-[--bg-one]'>
        
      </section>
      <section className='bg-[--bg-four]'>
        <div>  
          Blog
        </div>
      </section>
      
      
      {/* <div className='landing-page-title-container'>
        <p className='landing-page-main-title'>Random & Bizzare</p>
        <p className="landing-page-main-desc" style={{textAlign:"center"}}>A Collection of Mini Projects created by yours truly</p>
      </div> */}
      
      <div className='landing-page-mini-projects'>
        
        <div>
          {/* TODO:
                - SORTING BY TIME
                - SORTING BY TAG
                - ADD DB TO SAVE PROJECT DATA AND IMAGES
           */}
        </div>
        {/* <Project_Group projects={PROJECT_LIST}/> */}
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
