import React from 'react'
import mainImage from '../pics/mainpic.jpg';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    window.location.reload(false)
    document.title = "Ansel Jobs | Investing Into Your Future"
  })
  
  return (
    <>
      <div>
          <div className="relative md:ml-16 ml-0">
            <div className="z-0 mt-16 mb-20 font-bold ml-16 md:ml-0"><h1 className="font-poppins font-bold inline sm:text-[100px] text-[55px]">Investing into Your</h1><h1 className="font-poppins font-bold inline text-blue-800 sm:text-[100px] text-[55px]"> Future</h1></div>
            <section className="">
              <div className="relative w-[100%] bg-blue-800"><img className="py-5 pl-5" src={mainImage}></img></div>    
            </section>
          </div>
      </div>
      <section className="relative m-auto max-w-6xl">
        <div className=" mt-32">
            <div className='mt-32'>
              <h1 className="p-5 font-poppins text-[35px] text-center lg:text-left">View Jobs Sectors</h1>
              <div className="flex flex-wrap flex-row text-[20px] justify-center text-center text-white mx-3 sm:mx-0">
                <div className="flex flex-col flex-wrap w-[350px] mr-1 mb-1">
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Healthcare</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Marketing</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">IT</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md">Science</div>
                </div>
                
                <div className="flex flex-col flex-wrap w-[350px] mr-1 mb-1">
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Retail</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Construction</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Pharmaceutical</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md">Logistics</div>
                </div>

                <div className="flex flex-col flex-wrap w-[350px] mr-1 mb-1">
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Finance & Accounting</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Business</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md mb-1">Engineering</div>
                  <div className="bg-gradient-to-tr from-blue-700 to-blue-800 py-10 rounded-md">Law</div>
                </div>
              </div>
            </div>

        </div>
        {/* <div className="mt-32">
            <h2 className="p-5 font-poppins text-[35px] text-center lg:text-left">View Recent Job Posts</h2>
            <div className="flex flex-wrap flex-row text-center text-blue-800">
                <div className="border-y-2 border-y-blue-800 h-52 w-[100%] p-8">
                    <h3>Electrical Engineer</h3>
                </div>

            </div>
        </div>
        <div className="mt-32 mb-20 h-96">
            <h2 className="p-5 font-poppins text-[35px] text-center lg:text-left">Testimonials</h2>
            <div className="flex flex-wrap flex-row justify-center">
                <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
                </div>
                <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
                </div>
                <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
                </div>
            </div>
        </div> */}
      </section>
    </>
  )
}

export default Home