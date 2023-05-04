import React from 'react'

export default function Footer() {
  return (
    <footer class="footer">
      <div className='footer-l'>
        <p>Personal Portfolio</p>
      </div>
      

      <div className='footer-r'>
        <div className="s3-sub">
          <button className="btn"><a href='tel: "+917088587207"'><i className="fa fa-phone"></i></a></button>
          <button className="btn">< a href='https://wa.me/+917088587207' target="_blank" rel="noreferrer"><i className="fa fa-whatsapp"></i></a></button>
          <button className="btn"><a href="mailto:27.shaishavsingh" ><i className="fa fa-envelope"></i></a></button>
          <button className="btn"><a href="https://www.linkedin.com/in/27-shaishavsingh/" target="_blank" rel="noreferrer"><i className="fa fa-linkedin"></i></a></button>
          <button className="btn"><a href='https://github.com/Singh-Shaishav' target="_blank" rel="noreferrer"><i className="fa fa-github"></i></a></button>
        </div>
      </div>
    </footer>
  )
}
