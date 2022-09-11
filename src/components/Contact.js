import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { NavLink } from "react-router-dom";
import {sendMail} from './helper/Mail';

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
    e.preventDefault()
    // sendMail()
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
    document.title = "Ansel Jobs | Contact Us";
  })
  
  return (
    <>
      <section className='m-2'>
        <div className="bg-blue-800 w-[90%] m-auto flex flex-wrap flex-col font-poppins text-white shadow-2xl rounded mt-28">
          {/* <form onSubmit={(e) => {postContact(e)}} className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'> 
            <h1 className='ml-5 mt-8 text-[40px] mb-10'>Contact Form</h1>
            <input id="fName" value={firstname} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your First Name" onChange={(e)=> setFirstName(e.target.value)} onSubmit={(e) => e.target.value=""}/>
            <input id="lName" value={lastname} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Last Name" onChange={(e)=> setLastName(e.target.value)} />
            <input id="email" value={email} required className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" placeholder="Your Email" onChange={(e)=> setEmail(e.target.value)} />
            <textarea id="message" value={message} required className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" placeholder="Your Message" onChange={(e)=> setMessage(e.target.value)}></textarea>
            <button className="bg-white sm:w-[96%] w-[92%] m-3 rounded-md p-1 text-blue-800 font-poppins" type="submit">SUBMIT</button>
          </form> */}
          <form name="contact" method="post" className='sm:max-w-xl max-w-xs m-auto text-[20px] mb-10'>
            <input type="hidden" name="form-name" value="contact" />
            <p>
              <label><input className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="text" name="name" placeholder='Name'/></label>
            </p>
            <p>
              <label><input className="bg-transparent m-3 p-3 border-b-2 sm:w-[96%] w-[92%]" type="email" name="email" placeholder='Email'/></label>
            </p>
            <p>
              <label><textarea className="bg-transparent border-2 rounded m-3 sm:w-[96%] w-[92%] h-40 p-3 mt-6" name="message" placeholder='Enter Your Comments'></textarea></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>

        </div>
      </section>     
    </>
  )
}

export default Contact