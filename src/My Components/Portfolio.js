import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../CSS/stylesheet.css'
import Bootstrap from '../Images/Bootstrap.png'
import CSS3 from '../Images/CSS3.png'
import git from '../Images/git.png'
import HTML5 from '../Images/HTML5.png'
import JS from '../Images/JS.png'
import python from '../Images/python.png'
import ReactLogo from '../Images/React-logo.png'
import SQL from '../Images/SQL.png'
import Resume from "../My Components/Resume.pdf"
import PortfolioImage from '../Images/PortfolioImage.PNG'
import MapsImage from '../Images/MapsImage.PNG'
import TodoImage from '../Images/TodoImage.PNG'
import front from '../Images/front.png'





export default function Portfolio() {

    return (
        <div className="Container  portfolio">
            <div>
                <section className='s1'>
                    <h1> Hello !</h1>
                </section>
                <section className='s2'>
                    <div className='left'>
                        <h1>I'm <b>Shaishav Singh</b> </h1>
                    <p>I am a graduate in Engineering with a passion for software development, I am excited to leverage my technical skills to pursue a career as a software engineer. Through self-study and online courses, I have gained expertise in a range of programming languages, including JavaScript, Python, and SQL. I am also proficient in using various web technologies such as HTML, CSS, React.js, and jQuery, to create responsive and dynamic web applications. Additionally, my experience in designing and analyzing complex systems has honed my ability to think critically and logically, which translates well into software development. With a strong work ethic and a willingness to learn, I am confident that I can make valuable contributions to any software development team.</p>
                    </div>
                    <div className='right'>
                        <img src={front} alt="home" className='frontimage'></img>      
                    </div>
                </section>
                <section className='s3'>
                    <div className="s3-sub">
                        <button className="btn"><a href='tel: "+917088587207"'><i className="fa fa-phone"></i></a></button>
                        <button className="btn">< a href='https://wa.me/+917088587207' target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a></button>
                        <button className="btn"><a href="mailto:27.shaishavsingh" ><i className="fa fa-envelope"></i></a></button>
                        <button className="btn"><a href="https://www.linkedin.com/in/27-shaishavsingh/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></button>
                        <button className="btn"><a href='https://github.com/Singh-Shaishav' target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></button>
                    </div>
                    < div className="s3-sub2">
                        <button className='btn-resume'> <a href={Resume} download="Resume.pdf">Download Resume</a></button>
                    </div>

                </section>
                <section className='skillSet'>
                    <h1><b>Skill-Set</b></h1>
                    <hr className='hrline'></hr>
                    <div className='skillContainer'>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={JS} alt="js_Logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>Javascript</h4>
                                    <p>Strong Knowledge of Javascript and its libraries</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={python} alt="Python_Logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>Python</h4>
                                    <p>Good Knowledge on python with libraries like django, Pandas, Flask etc</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={HTML5} alt="HTML_logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>HTML5</h4>
                                    <p>Proficient in writing HTML code.</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={SQL} alt="SQL_Logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>SQL</h4>
                                    <p>Basic knowledge of SQL queries and RDBMS</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={ReactLogo} alt="React_logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>React</h4>
                                    <p>Personal Projects experience building WebApps using React.JS</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={Bootstrap} alt="Bootstrap_logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>Bootstrap</h4>
                                    <p>Knowledge of Bootstrap</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={git} alt="Git_logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>Git / GitHub</h4>
                                    <p>Knowledge about version control system such as Git and repositries like GitHub</p>
                                </div>
                            </div>
                        </div>
                        <div className='cardcol'>
                            <div className='card'>
                                <img src={CSS3} alt="CSS_Logo" className='logoimg1' />
                                <div className='cardcont'>
                                    <h4>CSS</h4>
                                    <p>Can style any Webapp using CSS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='projects1'>
                    <h1> Personal Projects </h1>
                    <hr className='hrline'></hr>
                    <div className='projectscont'>
                        <div className='card-pr'>
                            <img src={PortfolioImage} alt="PortfolioImage" className='logoimg2' />
                            <div className='cardcont2'>
                                <h4>Personal Portfolio Website</h4>
                                <p>A personal portfolio built using React.js, Node.js, HTML & CSS. </p>
                                <a href="/Projects" className='btn-readmore'>Read More.....</a>
                            </div>
                        </div>
                        <div className='card-pr'>
                            <img src={MapsImage} alt="MapsImage" className='logoimg2' />
                            <div className='cardcont2'>
                                <h4>ArcGIS Web-App</h4>
                                <p>A WebApp built using React.js with the help of ArcGIS API for javascript</p>
                                <a href="/Projects" className='btn-readmore'>Read More.....</a>
                            </div>
                        </div>
                        <div className='card-pr'>
                            <img src={TodoImage} alt="TodoImage" className='logoimg2' />
                            <div className='cardcont2'>
                                <h4>To-do List</h4>
                                <p>A webApp made using React.js, Bootstrap, HTML and CSS.</p>
                                <a href="/Projects" className='btn-readmore'>Read More.....</a>
                            </div>
                        </div>
                    </div>

                    <a href="/Projects" class="next">Load More Projects &raquo;</a>
                </section>
            </div>

        </div>
    )
}


