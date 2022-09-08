import React from 'react';

import recPic from '../pics/recPic.jpeg';
import certificate from '../pics/Recruitment_Consultant_Certificate.pdf';

const Footer = () => {
  return (
    <section className="text-[20px] absolute bg-black w-[100%] text-white flex flex-wrap flex-row font-poppins justify-center flex-grow">
        <div className="w-max h-max m-6">
            <ul className="w-[360px]">
                <div><i className="fa fa-phone m-2"></i><p className="inline">07741112323</p></div>
                <div><i className="fa fa-envelope m-2"></i><p className="inline">anseljobs@gmail.com</p></div>
                <div><i className="fa fa-location-arrow m-2"></i><p className="inline">First Floor, 12, Melton Road, LEICESTER-LE4 5EA, United Kingdom</p></div>
            </ul>
        </div>
        <div className="m-6 underline">
            <a className="block" href="https://www.anselimmigration.com/" target="_blank">Visit Our Immigration Services</a>
            <a className="block" href="https://g.page/ansel-education-and-immigration?share" target="_blank">Visit Our Education Consultancy</a>
            <a className="block" href={certificate} target="_blank">View Our Certificate</a>
        </div>
        <div className='m-6'>
          <img className='w-56 rounded-md' src={recPic} />        
        </div>
    </section>

  )
}

export default Footer