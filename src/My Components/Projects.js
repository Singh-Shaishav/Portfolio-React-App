import React from 'react'
import PortfolioImage from '../Images/PortfolioImage.PNG'
import MapsImage from '../Images/MapsImage.PNG'
import TodoImage from '../Images/TodoImage.PNG'
import WikiLiveImage from '../Images/WikiLiveImage.PNG'
import LocalWeatherImage from '../Images/LocalWeatherImage.PNG'
import QuoteImage from '../Images/QuoteImage.PNG'
import Geocoding from '../Images/Geocoding.jpg'
import DataCollectorImage from '../Images/DataCollectorImage.PNG'

export default function Projects() {
  return (
    <div className='proj'>
      <h1>Personal Projects</h1>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4> • Personal Portfolio Website </h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={PortfolioImage} alt="Portfolio" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/Portfolio-React-App" className='btn-readmore'>GitHub Repositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>Personal Portfolio Website Built using <b>React.js</b></li>
              <li>Used some web technologies like <b>Bootstrap.</b></li>
              <li>Dynamic and interactive web application developed using JavaScript and jQuery</li>
              <li>User interface has been designed with <b>CSS & HTML</b>, ensuring responsiveness across different screen sizes.</li>
              <li>Employed React Router to manage application routing and improve user navigation.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4> • ArcGIS WebApp</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={MapsImage} alt="Maps" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/ArcGIS_MAP-Webapp" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>A web application developed using <b>React.js</b> and the <b>ArcGIS API for JavaScript</b> to display maps and geographic data.</li>
              <li>Includes features such as adding and removing layers, different types of map views, and widgets such as search and legend. </li>
              <li>Utilizes <b>ArcGIS API's</b> tools for geolocation, measuring distance, and displaying pop-ups with additional information on map features.</li>
              <li>User interface has been designed with <b>CSS & HTML</b>, ensuring responsiveness across different screen sizes.</li>
              <li>Employed React Router to manage application routing and improve user navigation.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4> • To-do List App</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={TodoImage} alt="Todo" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/ReactAPP-Todo_list" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>A web application developed using <b>React.js</b> to create a simple and intuitive to-do list.</li>
              <li>Implemented features such as adding, editing, and deleting tasks. </li>
              <li>Used local storage to persist data across page refreshes and browser sessions.</li>
              <li>User interface has been designed with <b>CSS & HTML</b>, ensuring responsiveness across different screen sizes.</li>
              <li>Employed React Router to manage application routing and improve user navigation.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4> •Wiki Live Search App</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={WikiLiveImage} alt="WikiLive" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/JavaScript_Projects" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>Dynamic and interactive web application developed using <b>JavaScript</b> and <b>jQuery</b>.</li>
              <li>allowing users to search for information in real-time and delivering instant results as they type in their query.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4>•	Local Weather App</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={LocalWeatherImage} alt="LocalWeather" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/JavaScript_Projects" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>Dynamic and interactive web application developed using <b>JavaScript</b> and <b>jQuery</b>.</li>
              <li>Users can check the current weather conditions in their local area by fetching data from an external API.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4>•	Quote of the Day App</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={QuoteImage} alt="Quote" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/JavaScript_Projects" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>Dynamic and engaging web application made using <b>JavaScript</b> and <b>jQuery</b></li>
              <li>Fetch and parse data from an external API that provides a daily quote. </li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4>•	Geocoder WebApp</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={Geocoding} alt="Geocoder" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/GeocoderWebApp" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li>A web application developed using <b>Flask</b> and the <b>Pandas</b> frameworks of <b>Python</b>.</li>
              <li>Converts address in files to geocoded outputs.</li>
            </ul>
          </div>
        </div>
      </section>
      <section className='projects'>
        <hr className='hrline'></hr>
        <h4>•	Database WebApp</h4>
        <hr className='hrline'></hr>
        <div className='projectscont'>
          <div className='card-pr'>
            <img src={DataCollectorImage} alt="DataCollector" className='logoimg' />
            <div className='cardcont'>
            <a href="https://github.com/Singh-Shaishav/Data-Collector-WebApp" className='btn-readmore'>Github Respositry Link</a>
            </div>
          </div>
          <div className='Project-detail'>
            <ul>
              <li><b>Python</b> Based WebApp built using <b>Pandas</b> framework.</li>
              <li>Used <b>PostgreSQL</b> to store and manage data.</li>
              <li>Can send automated email doing some calculations.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
