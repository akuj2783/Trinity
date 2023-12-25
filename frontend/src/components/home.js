import React from 'react'
import "../stylesheets/home.css";
import client1 from "../assets/c1.png";
import client2 from "../assets/c2.png";
import client3 from "../assets/c3.png";
import client4 from "../assets/c4.png";
import client5 from "../assets/c5.png";
import client6 from "../assets/c6.png";
import client7 from "../assets/c7.png";
import client8 from "../assets/c8.png";
import client9 from "../assets/c9.png";
import eMarketplace from "../assets/c10.png";

const  Home = () => {
  return (
    < div className="home">
    <div className="title">
      <h1 >Trinity Infonet</h1>
      <h2>
          One Stop IT Solution 
          For All Your Business Needs
      </h2>
    </div>
    <div className='message'>
          <p>
              Unlock seamless solutions to meet your business needs effortlessly. 
              Experience the ease of renting cutting-edge IT equipment, enabling a hassle-free operation.
              Elevate your business operations with our top-tier technology, meticulously tailored to drive your success. 
              Explore our comprehensive range today and amplify your business capabilities with confidence
          </p>
    </div>
    <div className='clients'>
      <h2>Our Precious Clients....</h2>
      <div className='row1'>
      <img src={client1} className='client1' alt="client image" />
      <img src={client2} className='client2' alt="client image" />
      <img src={client3} className='client3' alt="client image" />
      </div> 
      <div className='row2'>
      <img src={client4} className='client4' alt="client image" />
      <img src={client5} className='client5'alt="client image" />
      <img src={client6} className='client6' alt="client image" />
      </div>
      <div className='row3'>
      <img src={client7} className='client7' alt="client image" />
      <img src={client8} className='client8'alt="client image" />
      <img src={client9} className='client9' alt="client image" />
      </div>
    </div>
      <div className='eMarketplace'>
        <h2>We are also available on</h2> 
        <img src={eMarketplace}  alt="Govt. E Marketplace" />
      </div>

    </div>
  )
}

export default Home;
