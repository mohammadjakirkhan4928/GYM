import React from 'react';
import './Imformation.css'
import logo from'../../Images/zayn.jpg'

const Imformation = ({imformation}) => {


    return (
        <div className='top'>
            <div className='second'>
                <img src={logo}alt="" srcset="" />
                <p>Zayn Malik<br />
                 <small className='location'>Newyork,USA</small>
                 </p>
            </div>

            <div className='third'>
                <p>75<small>kg</small>
                    <br />
                weight
                </p>
                <p>6.5
                    <br />
                Height
                </p>
                <p>30<small>yrs</small>
                    <br />
                Age
                </p>
            </div>
            <div className='fourth'>
                <h4>Exercise Details </h4>
                <div className='excersie-time'>
                <h5>Exercise Time :  {imformation}s</h5>
                </div>
            </div>

             <div >
                <button className='btn-last'>
                    <p>Activity Completed</p>
                </button>
             </div>

        </div>
    );
};

export default Imformation;