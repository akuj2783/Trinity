import React from 'react'
import logo from "../assets/logo.png";
import '../stylesheets/footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
      <div className='left'>
        <img src={logo} alt="Logo" />
        <p>&copy; 2024 -Trinity Infotech</p>
      </div>
      <div className='right'>
      <p>
      <h3>Head office :</h3> F-205 jawahar park khanpur   
                    new delhi -110062
     </p>
     <p>
        
     <h3>27/7 support :</h3>09891919103 <br />
                     support24@trinityinfonet.com
      </p>
      </div>
    </div>
    </>
  )
}

export default Footer
