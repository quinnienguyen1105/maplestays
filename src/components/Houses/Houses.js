import React, { useState } from 'react';
import House from '../Houses/SingleHouse/House.js';
import './Houses.scss';
import { useSelector } from 'react-redux';
import aframes from "../../assets/icons/aframe.png";
import apartment from "../../assets/icons/apartment.png";
import arctic from "../../assets/icons/arctic.png";
import cabins from "../../assets/icons/cabins.png";
import camping from "../../assets/icons/camping.png";
import tinyhouse from "../../assets/icons/tinyhouse.png";
import countryside from "../../assets/icons/countryside.png";
import lake from "../../assets/icons/lake.png"; 
import amazingpool from "../../assets/icons/amazingpool.png"; 
import mainson from "../../assets/icons/mainson.png"; 
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Houses() {
  const houses = useSelector((state) => state.house.house);
  const [typeOfProperty, setTypeOfProperty] = useState('aframes');
  const [activeButton, setActiveButton] = useState('aframes');
  
  const handleTypeButtonClick = (propertyType) => {
    setTypeOfProperty(propertyType);
    setActiveButton(propertyType);
  }

  const filteredHouses = houses.filter((house) => {
    return house.typeOfProperty === typeOfProperty;
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  return (
    <div>
      <ul className="property-types">
        <li>
          <button className={activeButton === 'aframes' ? 'active' : ''}  onClick={() => handleTypeButtonClick('aframes')}>
            <img src={aframes} alt="A-frames" />
            <span>A-frames</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'apartment' ? 'active' : ''} onClick={() => handleTypeButtonClick('apartment')}>
            <img src={apartment} alt="Apartment" />
            <span>Apartment</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'arctic' ? 'active' : ''}  onClick={() => handleTypeButtonClick('arctic')}>
            <img src={arctic} alt="Arctic" />
            <span>Arctic</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'cabins' ? 'active' : ''}  onClick={() => handleTypeButtonClick('cabins')}>
            <img src={cabins} alt="Cabins" />
            <span>Cabins</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'camping' ? 'active' : ''}  onClick={() => handleTypeButtonClick('camping')}>
            <img src={camping} alt="Camping" />
            <span>Camping</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'tinyhouse' ? 'active' : ''} onClick={() => handleTypeButtonClick('tinyhouse')}>
            <img src={tinyhouse} alt="Tiny House" />
            <span>Tiny House</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'countryside' ? 'active' : ''} onClick={() => handleTypeButtonClick('countryside')}>
            <img src={countryside} alt="Countryside" />
            <span>Countryside</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'lake' ? 'active' : ''}  onClick={() => handleTypeButtonClick('lake')}>
            <img src={lake} alt="Lake" />
            <span>Lake</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'amazingpool' ? 'active' : ''}  onClick={() => handleTypeButtonClick('amazingpool')}>
            <img src={amazingpool} alt="Amazing Pool" />
            <span>Amazing Pool</span>
          </button>
        </li>
        <li>
          <button className={activeButton === 'mainson' ? 'active' : ''}  onClick={() => handleTypeButtonClick('mainson')}>
            <img src={mainson} alt="Mainson" />
            <span>Mainson</span>
          </button>
        </li>
      </ul>

      {/* Carousel Menu */}
      <Slider className='property-types-mobile' {...settings}>
      <div className='property-type-item'>
        <button className={activeButton === 'aframes' ? 'active' : ''} onClick={() => handleTypeButtonClick('aframes')}>
          <img src={aframes} alt="A-frames" />
          <span>A-frames</span>
        </button>
      </div>
      <div className='property-type-item'>
        <button className={activeButton === 'apartment' ? 'active' : ''} onClick={() => handleTypeButtonClick('apartment')}>
          <img src={apartment} alt="Apartment" />
          <span>Apartment</span>
        </button>
      </div>
      <div className='property-type-item'>
        <button className={activeButton === 'arctic' ? 'active' : ''} onClick={() => handleTypeButtonClick('arctic')}>
          <img src={arctic} alt="Arctic" />
          <span>Arctic</span>
        </button>
      </div>
      <div className='property-type-item'>
          <button className={activeButton === 'cabins' ? 'active' : ''}  onClick={() => handleTypeButtonClick('cabins')}>
            <img src={cabins} alt="Cabins" />
            <span>Cabins</span>
          </button>
      </div>
      <div className='property-type-item'>
          <button className={activeButton === 'camping' ? 'active' : ''}  onClick={() => handleTypeButtonClick('camping')}>
            <img src={camping} alt="Camping" />
            <span>Camping</span>
          </button>
      </div>
      <div className='property-type-item'>
          <button className={activeButton === 'tinyhouse' ? 'active' : ''} onClick={() => handleTypeButtonClick('tinyhouse')}>
            <img src={tinyhouse} alt="Tiny House" />
            <span>Tiny House</span>
          </button>
      </div>
      <div className='property-type-item'>
        <button className={activeButton === 'countryside' ? 'active' : ''} onClick={() => handleTypeButtonClick('countryside')}>
            <img src={countryside} alt="Countryside" />
            <span>Countryside</span>
          </button>
      </div>
      <div className='property-type-item'>
          <button className={activeButton === 'lake' ? 'active' : ''}  onClick={() => handleTypeButtonClick('lake')}>
            <img src={lake} alt="Lake" />
            <span>Lake</span>
          </button>
      </div>
      <div className='property-type-item'>
          <button className={activeButton === 'amazingpool' ? 'active' : ''}  onClick={() => handleTypeButtonClick('amazingpool')}>
            <img src={amazingpool} alt="Amazing Pool" />
            <span>Amazing Pool</span>
          </button>
      </div>
      <div className='property-type-item'>
        <button className={activeButton === 'mainson' ? 'active' : ''}  onClick={() => handleTypeButtonClick('mainson')}>
            <img src={mainson} alt="Mainson" />
            <span>Mainson</span>
          </button>
      </div>
    </Slider>


      <div class="houses-grid">
        {filteredHouses.map((house) => (
          <House key={house.id} house={house} />
        ))}
      </div>
    </div>
  );
}

export default Houses;
