import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import sendMail from '../server'
import { NavLink } from "react-router-dom";


const Contact = () => {
  
  const [firstname, setFirstName] = useState("")
  const [lastname, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  function resetInputs() {
    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
  }

  async function postContact(e) {
    // e.preventDefault()

    // try{
    //   await axios.post("https://dead-red-swordfish-sock.cyclic.app/post_contact", {
    //     firstname,
    //     lastname,
    //     email,
    //     message
    //   }).then(resetInputs())
    // }catch(error){
    //   console.log(error)
    // }
  }


  useEffect(() => {
    window.location.reload(false)
    document.title = "Ansel Jobs | Contact Us";
  })
  
  /*onSubmit={(e) => {postContact(e)}} */
  return (
    <>
      <section className='m-2'>
        <div className="bg-blue-800 w-[90%] m-auto flex flex-wrap flex-col font-poppins text-white shadow-2xl rounded mt-28">
          {/* <form className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'> 
            <h1 className='ml-5 mt-8 text-[40px] mb-10'>Contact Form</h1>
            <input id="fName" value={firstname} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your First Name" onChange={(e)=> setFirstName(e.target.value)} onSubmit={(e) => e.target.value=""}/>
            <input id="lName" value={lastname} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Last Name" onChange={(e)=> setLastName(e.target.value)} />
            <input id="email" value={email} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} />
            <textarea id="message" value={message} required className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" placeholder="Your Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button className="bg-white sm:w-[96%] w-[92%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">SUBMIT</button>
          </form> */}
          <form name="contact" method="POST" netlify className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'> 
            <h1 className='ml-5 mt-8 text-[40px] mb-10'>Contact Form</h1>
            <input type="hidden" name="form-firstname" value="contact" id="fName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" placeholder="Your First Name" />
            <input type="hidden" name="form-lastname" value="contact" id="fName" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" placeholder="Your Last Name" />
            <input type="hidden" name="form-email" value="contact" id="email" required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" placeholder="Your Email" />
            <textarea type="hidden" name="form-message" value="contact" id="message" required className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" placeholder="Your Message"></textarea>
            <button className="bg-white sm:w-[96%] w-[92%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">SUBMIT</button>
          </form>
        </div>
      </section>     
    </>
  )
}

export default Contact