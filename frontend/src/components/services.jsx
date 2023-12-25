import React from 'react';
import "../stylesheets/services.css"

const Services = () => {
  return (
    <div className="services-container">
      <h1>Services We Offer</h1>
      <br />
      <div className="service">
        <h3>- AMC Services</h3>
        <p>Comprehensive and non-Comprehensive for Desktops, Laptops, Servers, CCTV, and Networks.</p>
      </div>
      <div className="service">
        <h3>- IT Asset Renting</h3>
        <p>Rental services for Desktops, Laptops, Servers, CCTV, and Network Equipment on short-term and long-term basis.</p>
      </div>
      <div className="service">
        <h3>- Repair Services</h3>
        <p>In-house TRC for quick repair of Desktops, Laptops, CCTV, Biometric, and other IT Equipment.</p>
      </div>
      <div className="service">
        <h3>- IT Infrastructure Management</h3>
        <p>Installation and management of Network Rooms, Data/Voice Cabling, CCTV, Biometric Machines, IT Security, and IT Equipment.</p>
      </div>
      <div className="service">
        <h3>- IT Staffing Solutions</h3>
        <p>Provision of experienced engineers (L1, L2, L3) for uninterrupted IT services.</p>
      </div>
      <div className="service">
        <h3>- IT Consumable and Non-Consumable Sales</h3>
        <p>Offering a wide range of IT Consumable and Non-Consumable items including Laptop/Desktop accessories, network components, cables, peripherals, and more.</p>
      </div>
    </div>
  );
}

export default Services;
