import React from 'react'
import '../CSS/stylesheet.css'
import PortfolioImage from '../Images/PortfolioImage.PNG'
import MapsImage from '../Images/MapsImage.PNG'

export default function Resume() {
  return (
    <div className='AboutContainer'>
      <section className='A'>
        <h1>Shaishav Singh</h1>
        <p>To secure a challenging role as a software engineer that allows me to leverage my technical skills and experience to deliver measurable results and contribute to the growth of the organization.</p>
        <hr className='hrline'></hr>
        <a href='tel: "+917088587207"'><i className="fa fa-phone"> +91-7088587207</i></a>
        < a href='https://wa.me/+917088587207' target="_blank" rel="noreferrer"><i className="fa fa-whatsapp">      https://wa.me/+917088587207</i></a>
        <a href="mailto:27.shaishavsingh" ><i className="fa fa-envelope">      27.shaishavsingh@gmail.com</i></a>
        <a href="https://www.linkedin.com/in/27-shaishavsingh/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin">      https://www.linkedin.com/in/27-shaishavsingh/</i></a>
        <a href='https://github.com/Singh-Shaishav' target="_blank" rel="noreferrer"><i className="fa fa-github">      https://github.com/Singh-Shaishav</i></a>
        <p className='ptag'><i className="fa fa-map-marker"> Currently: Gurugram, Haryana | Native: Saharanpur</i></p>
        <hr className='hrline'></hr>
        <h4>Profile Summary :</h4>
        <p>Recent engineering graduate with expertise in Python, JavaScript, SQL and web technologies such as HTML, CSS, React.js, and jQuery. Skilled in designing and analyzing complex systems, and passionate about pursuing a career as a software engineer. Strong work ethic and willingness to learn, with the ability to make valuable contributions to any software development team.</p>
        <hr className='hrline'></hr>
      </section>
      <section className='A1'>
        <h4>Skills :</h4>
        <hr className='hrline'></hr>
        <div className='skillCont'>
          <h5>Programming Languages:</h5>
          <ul>
            <li>Javascript</li>
            <li>Python</li>
            <li>SQL</li>
            <li>HTML</li>
          </ul>
          <h5>Frameworks & Web Technologies:</h5>
          <ul>
            <li>React.js</li>
            <li>jQuery</li>
            <li>Bootstrao</li>
            <li>dJango</li>
            <li>Flask</li>
            <li>Pandas</li>
          </ul>
          <h5>DataBase Technologies:</h5>
          <ul>
            <li>mySQL</li>
            <li>PostgreSQL</li>
          </ul>
          <h5>Version Control / Repostries:</h5>
          <ul>
            <li>Git</li>
            <li>GitHub</li>
          </ul>
          <h5>Soft Skills:</h5>
          <ul>
            <li>Quick Learner</li>
            <li>Result Oriented</li>
            <li>Team Player</li>
            <li>Open Mindedness</li>
            <li>Communication Skills</li>
          </ul>
          <hr className='hrline'></hr>
        </div>
      </section>
      <section className='A1'>
        <h4>Professional Summary  </h4>
        <hr className='hrline'></hr>
        <h5>&raquo; Professional Developement  [JUL 2022 - Present]</h5>
        <ul>
          <li>Completed certification course on the<b> "Master JavaScript from Scratch (with jQuery and React JS)" course, covering topics such as JavaScript fundamentals, jQuery, and React.js</b></li>
          <li>Successfully completed certification course <b>"The Python Mega Course - Build 10 Real World Applications," which covered Python programming concepts, including data structures, web development, and data analysis.</b> </li>
          <li>Completed <b>"Complete SQL and Databases Bootcamp: Zero to Mastery [2022]," a program that covered basic SQL concepts and database management.</b></li>
        </ul>
        <h5>&raquo; Geograohic Information System Engineer ( JBLGEO Technologies Pvt. Ltd. ) [ FEB 2021 - JUN 2022]</h5>
        <ul>
          <li>
            Worked on various GIS projects, including mapping, data analysis, and visualization
          </li>
          <li>
            Collaborated with cross-functional teams to ensure project completion within timelines and budget constraints
          </li>
          <li>
            Conducted quality control checks and provided feedback to improve project outcomes
          </li>
          <li>
            Developed and maintained project documentation, including technical specifications and user manuals
          </li>
        </ul>
        <hr className='hrline'></hr>
      </section>
      <section className='A1'>
        <h4>Personal Projects :</h4>
        <hr className='hrline'></hr>
        <div className='aboutProject'>
          <div className='card-pr1'>
            <img src={PortfolioImage} alt="PortfolioImage" className='logoimg' />
            <div className='cardcont'>
              <h4>Personal Portfolio </h4>
              <p>Personal Portfolio website made using React.js, Bootstrap, HTML and CSS.</p>
              <a href="/Projects" className='btn-readmore'>Read More.....</a>
            </div>
          </div>
          <div className='card-pr1'>
            <img src={MapsImage} alt="MapImage" className='logoimg' />
            
            <div className='cardcont'>
              <h4>To-do List</h4>
              <p>A webApp made using React.js, Bootstrap, HTML and CSS.</p>
              <a href="/Projects" className='btn-readmore'>Read More.....</a>
            </div>
          </div>
        </div>
          <a href="/Projects" class="next1">See More Projects &raquo;</a>         
          <hr className='hrline'></hr>       
      </section>
      <section className='A1'>
        <h4>Academic Details :</h4>
        <hr className='hrline'></hr>  
        <h5>&raquo; Bachelors of Technology - CE  [2017 - 2021]</h5>
        <ul>
          <li>University - Dr. APJ Abdul Kalam Technical University</li>
          <li>College - Raj Kumar Goel Institute of Technology</li>
        </ul>
        <h5>&raquo; Class XII   [2017]</h5>
        <ul><li>Board - Central Board of Secondary Education(C.B.S.E)</li></ul>
        <h5>&raquo; Class X  [2014]</h5>
        <ul><li>Board - Central Board of Secondary Education(C.B.S.E)</li></ul>
        <hr className='hrline'></hr>
      </section>
      <section className="A1 certificate">
        <h4>Certifications :</h4>
        <hr className='hrline'></hr>
        <ul>
          <li><b><a href="https://www.udemy.com/certificate/UC-e3c91e3d-9749-47ad-be43-3acab065550f/">Master JavaScript from Scratch (with jQuery and React JS)</a></b></li>
          <li><b><a href="https://www.udemy.com/certificate/UC-20598b5c-8f64-4746-811f-fae349571111/">The Python Mega Course - Build 10 Real World Applications</a></b></li>
          <li><b><a href="https://www.udemy.com/certificate/UC-2d9ed3be-b7e3-420b-9114-1e40e7c1eba7/">Complete SQL and Databases Bootcamp: Zero to Mastery [2022]</a></b></li>
        </ul>

      </section>

    </div>
  )
}
