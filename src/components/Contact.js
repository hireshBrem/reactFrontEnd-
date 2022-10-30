import { useEffect } from 'react';
import React from 'react';
import AnimatedPage from './AnimatedPage';

const Contact = () => {
  
  useEffect(() => {
    document.title = "Ansel Jobs | Contact Us";
  })
  
  return (
    <>
    <AnimatedPage>
      <section className=''>
        <div className="bg-blue-800 w-[90%] m-auto flex flex-wrap flex-col font-poppins text-white shadow-2xl rounded mt-20">
          <form name="contact" method="post" className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'>
            <h1 className='text-center text-[30px] mb-8 mt-2'>Contact Form</h1>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label><input className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[90%]" type="text" name="name" placeholder='Name'/></label>
            </p>
            <p>
              <label><input className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[90%]" type="email" name="email" placeholder='Email'/></label>
            </p>
            <p>
              <label><textarea className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[90%] h-40 p-3 mt-6" name="message" placeholder='Enter Your Message'></textarea></label>
            </p>
            <p>
              <button className="bg-white sm:w-[96%] w-[90%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">Send</button>
            </p>
          </form>
        </div>
      </section>     
    </AnimatedPage>
    </>
  )
}

export default Contact