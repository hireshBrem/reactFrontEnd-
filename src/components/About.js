import React from 'react'
import { useEffect } from 'react';

import recPic from '../pics/recPic.jpeg';

const About = () => {
  useEffect(() => {
    document.title = "Ansel Jobs | About Us"
  })

  return (
    <div>
      <div className='max-w-4xl m-auto'>
        <div className='m-5'>
          <h1 className='text-blue-800 text-[30px] mt-10 font-bold font-poppins'>About Us</h1>
          <p className='font-poppins mt-10 text-[17px]'>Ansel Jobs was registered in the United Kingdom in the year 2022, as part of Ansel Group of companies. The Ansel group consists of Ansel Education Consultancy, Ansel Immigration Services and Ansel Jobs.
            Ansel Jobs is a professional member with Recruitment & Employment Confederation (REC), United Kingdom. 
            We strictly follow the code of practice for the recruiters with REC. We recruit employees from all over the world. Currently we are negotiating with many prospective employers.
            Our Director is a British Council qualified Education Consultant and regulated Immigration Advisor. 
            We have lots of students in the UK looking for jobs in all sectors. </p>      
        </div>
      </div>
    </div>
  )
}

export default About