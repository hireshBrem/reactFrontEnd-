import React, { useState } from 'react'
import mainImage from '../pics/mainpic.jpg';
import { useEffect } from 'react';
import ReactLoading from 'react-loading';
import AnimatedPage from './AnimatedPage'

const Home = () => {

  useEffect(() => {
    document.title = "Ansel Jobs | Investing Into Your Future"
  })
  
  return (
    <>
      <AnimatedPage>
      {
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
        <div className="mt-32">
            <h2 className="p-5 font-poppins text-[35px] text-center lg:text-left">View Recent Job Posts</h2>
            <div className="flex flex-wrap flex-row text-center text-blue-800">
                <div className="text-[17px] w-[100%] px-5 py-2">
                  <div className='text-white bg-blue-800 rounded-md py-5'>
                    <h1 className='text-[30px] underline pb-5'>Staff for a hotel in Cornwall, UK</h1>
                    <div className='max-w-[500px] m-auto text-left bg-blue-800 text-white'>
                      <h1 className='text-[20px] font-helvetica text-left underline'>Job role: </h1>
                      <ul>
                        <li className='inline'>General assistant and waiter</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We require:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">experience in the relevant position</li>
                        <li className='list-disc'>good spoken english</li>
                        <li className='list-disc'>diligent and responsible candidates</li>
                        <li className='list-disc'>applicants with pre settled or settled status only</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We offer:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">pay £9.65 per hour</li>
                        <li className="list-disc">full-time work - 40 hours a week</li>
                        <li className="list-disc">accommodation provided for £250 per month</li>
                        <li className="list-disc">immediate start after an interview and approval by the employer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-[17px] w-[100%] px-5 py-2">
                  <div className='text-white bg-blue-800 rounded-md py-5'>
                    <h1 className='text-[30px] underline pb-5'>Kitchen helpers</h1>
                    <div className='max-w-[500px] m-auto text-left'>
                      <h1 className='text-[20px] font-helvetica text-left underline'>Job description: </h1>
                      <ul>
                        <li className='inline'>Mainline Links Ltd. are looking for 6 Kitchen Assistants for their site in Scotland from now until 1st November</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We require:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">good English</li>
                        <li className='list-disc'>previous experience is not required but would be an advantage</li>
                        <li className='list-disc'>responsible and reliable candidates</li>
                        <li className='list-disc'>only candidates with pre settled  or settled status</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We offer:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">pay £11.00 per hour</li>
                        <li className="list-disc">possibility to provide accommodation for 50 pounds per week per person, with all consumables, bed linen, Free sat TV, laundry and kitchen facilities included. All kitchens are fully equipped with refrigerators, freezers, cutlery, crockery, tables, chairs, pots and pans, etc. Your room will have all the furniture, curtains, pillows and duvets, internet access. Free meals on duty</li>
                        <li className="list-disc">Start now</li>
                        <li className="list-disc">temporary contract - until the end of October; there is a possibility that the temporary employment contract will become permanent</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-[17px] w-[100%] px-5 py-2">
                  <div className='text-white bg-blue-800 rounded-md py-5'>
                    <h1 className='text-[30px] underline pb-5'>Team Leader at a recycling plant in the UK, Birmingham</h1>
                    <div className='max-w-[500px] m-auto text-left'>
                      <h1 className='text-[20px] font-helvetica text-left underline'>Job description: </h1>
                      <ul>
                        <li className='inline'>Team Leader at a recycling plant in the UK, Birmingham. The team leader will support the activities of the management staff. Report to the Shift Manager</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">Key duties and responsibilities </h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">Compliance with established health and safety standards</li>
                        <li className='list-disc'>Assists in completion of risk assessments and SOPs where required</li>
                        <li className='list-disc'>Conduct regular behavior monitoring and record and conduct inspections accordingly</li>
                        <li className='list-disc'>Provide all team members with regular toolbox talks and inform them of any EHS, quality or performance issues / needs</li>
                        <li className='list-disc'>Ensure that all products are processed to the required quality standards</li>
                        <li className='list-disc'>Workflow flexibility in response to business needs</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">Specific duties:</h1> 
                      <ul className='pl-5 list-disc'>
                        <li className="">Assist with routine inventory checks when necessary as directed by the management team</li>
                        <li className="">Ensure production KPIs are implemented and achieved and opportunities for improvements, research and implementation when identified</li>
                        <li className="">Work closely with the management and maintenance teams to ensure all installations and equipment are cleaned, maintained and serviced to a high standard</li>
                        <li className="">Work with management team, report on KPIs and create action plans as neededAssists in the creation of operational plans to ensure objectives are met</li>
                        <li className="">Ensure that all goods and products are inspected and, where appropriate, if they do not meet the required standards, report to the management team</li>
                        <li className="">Ensure inventory levels are maintained as directed by the management team</li>
                        <li className="">Ensure that all facility cleaning procedures are completed in accordance with standards</li>
                        <li className="">To perform any other duties as required as requested by the management team</li>
                        <li className="">Be flexible in response to business needs</li>
                        <li className="">Communicate and work effectively with all employees</li>
                        <li className="">Support the management team in changing the environment, which includes tools and techniques such as Lean, Six Sigma, 5S and RCA. If necessary, training and mentoring should be provided</li>
                        <li className="">Establish individual accountability using a training and support process and performance management</li>
                        <li className="">Ensure that all performance issues are resolved quickly and professionally</li>
                        <li className="">Conduct annual evaluations with all direct reports</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We require:</h1> 
                      <ul className='pl-5 list-disc'>
                        <li className="">Extensive production and operational experience</li>
                        <li className="">Confident and influential communication at all levels</li>
                        <li className="">Experience in leading and managing operational staff</li>
                        <li className="">Possibility of moving to a higher position within 3-4 years</li>
                        <li className="">Knowledge of current quality practices, tools and technique</li>
                        <li className="">Knowledge and experience in the recycling sector is desirable but not essential</li>
                        <li className="">Broad knowledge of PTA work practices desired but not essential</li>
                        <li className="">Appropriate environmental qualification</li>
                        <li className="">Candidates with pre-settled status only</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We offer:</h1> 
                      <ul className='pl-5 list-disc'>
                        <li className="">salary £11.20 - £12.50 per hour</li>
                        <li className="">working hours at least 40 hours per week</li>
                        <li className="">accommodation in the factory area, £50 - £90 per week</li>
                        <li className="">immediate start after approval by the employer</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="text-[17px] w-[100%] px-5 py-2">
                  <div className='text-white bg-blue-800 rounded-md py-5'>
                    <h1 className='text-[30px] underline pb-5'>Product Line Operator / Sorter for recycling plant job in UK, Birmingham area</h1>
                    <div className='max-w-[500px] m-auto text-left'>
                      <h1 className='text-[20px] font-helvetica text-left underline'>Main Responsibilities: </h1>
                      <ul>
                        <li className='inline'>Strict adherence to established health and safety standards</li>
                        <li className='inline'>Ensure that all inspections are carried out in accordance with company requirements</li>
                        <li className='inline'>Report issues to line manager or a member of the management team</li>
                        <li className='inline'>Remove all contaminants from the material as specified for your work area</li>
                        <li className='inline'>Ensure quality is maintained to the highest possible standard</li>
                        <li className='inline'>Take extra care of process and procedures</li>
                        <li className='inline'>Perform any tasks as required by a member of the management team</li>
                        <li className='inline'>Flexibility in working according to the needs of the business</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We require:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">Good spoken English and ability to communicate with everyone in the team</li>
                        <li className='list-disc'>Opportunity to develop with the company</li>
                        <li className='list-disc'>Good organization skills</li>
                        <li className='list-disc'>Reliability</li>
                        <li className="list-disc">Ability to meet the physical demands of the job</li>
                        <li className='list-disc'>Ability to take initiative on your own while working</li>
                        <li className='list-disc'>Flexibility in performing different tasks. A good team player</li>
                        <li className='list-disc'>Flexibility in performing different tasks. A good team player.Candidates with pre-settled status only</li>
                      </ul>
                      <h1 className="text-[20px] font-helvetica text-left underline">We offer:</h1> 
                      <ul className='pl-5'>
                        <li className="list-disc">salary £9.50 - £9.75 per hour</li>
                        <li className="list-disc">working hours at least 40 hours per week</li>
                        <li className="list-disc">accommodation in the factory area, £50 - £90 per week</li>
                        <li className="list-disc">immediate start after approval by the employer</li>
                      </ul>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </section>
    </>
    }
    </AnimatedPage>
    </>
  )
}

export default Home


// <div className="mt-32 mb-20 h-96">
//             <h2 className="p-5 font-poppins text-[35px] text-center lg:text-left">Testimonials</h2>
//             <div className="flex flex-wrap flex-row justify-center">
//                 <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
//                 </div>
//                 <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
//                 </div>
//                 <div className="w-[40%] h-40 border-blue-800 border-2 m-3 mx-1">
//                 </div>
//             </div>
//         </div>