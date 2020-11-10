import React from 'react';
import { Button } from './Button';
import './Pricing.css';
import { FaFire } from 'react-icons/fa';
import { BsXDiamondFill } from 'react-icons/bs';
import { GiCrystalize } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link } from 'react-router-dom';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='pricing__section'>
        <div className='pricing__wrapper'>
          <h1 className='pricing__heading'>Projects</h1>
          <div className='pricing__container'>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <FaFire />
                </div>
               
                <h5>Flying Cobbler</h5>
                
                <ul className='pricing__container-features'>
                  <li>Door to Door Delivery</li>
                  <li>Easy Accessable</li>
                  <li>24/7 Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Project
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <BsXDiamondFill />
                </div>
                {/* <h3>Gold</h3> */}
                <h4>AGRIBUYING</h4>
                {/* <p>per month</p> */}
                <ul className='pricing__container-features'>
                  <li>E-COMMERCE PLATFORM</li>
                  <li>Easy to Buy and Sell</li>
                  <li>24/7 Support</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='blue'>
                  View Project
                </Button>
              </div>
            </Link>
            <Link to='/sign-up' className='pricing__container-card'>
              <div className='pricing__container-cardInfo'>
                <div className='icon'>
                  <GiCrystalize />
                </div>
                {/* <h3>Diamond</h3> */}
                <h4>WORDPRESS</h4>
                {/* <p>per month</p> */}
                <ul className='pricing__container-features'>
                  <li>Static Site</li>
                  <li>Printing Company</li>
                  <li>Basic Details</li>
                </ul>
                <Button buttonSize='btn--wide' buttonColor='primary'>
                  View Project
                </Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}
export default Pricing;