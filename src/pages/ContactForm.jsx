import React from 'react'

const ContactForm = () => {
  return (
    <div className='w-full md:h-screen p-6 flex items-center justify-center'>
      <div className='w-full bg-[#DAF3F7] gap-5 border-2 md:py-12 md:px-24 border-[#6dd4d6] rounded-xl p-5 flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full flex flex-col gap-2 items-center justify-center md:items-start'>
            <h1 className='text-[8vw] md:text-[4vw] text-center md:text-left font-[spaceBold] capitalize'>We are <span>here</span> to <br /> assist <span>you</span>.</h1>
            <p className='text-[3vw] md:text-left md:text-[1.2vw] text-center mt-4 font-[spaceRegualar]'>Ready to transform your space? Contact us for a free consultation and quote.</p>

            <div className='flex p-2 gap-3 items-center '>
              <h4 className='text-2xl'>
                <i className="ri-phone-line"></i>
              </h4>
              <p className='text-[3vw] md:text-xl font-[spaceRegualar]'>9897096111, 9911500639</p>
            </div>
            <div className='flex p-2 gap-3 items-center '>
              <h4 className='text-2xl'>
                <i className="ri-mail-line"></i>
              </h4>
              <p className='text-[3vw] md:text-xl font-[spaceRegualar]'>Contact@capitalvenue.in </p>
            </div>
            <div className='flex p-2 gap-3 items-center '>
              <h4 className='text-2xl'>
                <i className="ri-map-pin-line"></i>
              </h4>
              <p className='text-[3vw] md:text-xl font-[spaceRegualar]'>Hastsal village, Uttam Nagar, New Delhi</p>
            </div>

            <div className='flex mt-8 gap-5 items-center justify-center'>
                <h4 className='text-2xl'>
                <i className="ri-facebook-fill"></i>
              </h4>
                <h4 className='text-2xl'>
                <i className="ri-instagram-line"></i>
              </h4>
                <h4 className='text-2xl'>
               <i className="ri-linkedin-fill"></i>
              </h4>
                <h4 className='text-2xl'>
               <i className="ri-youtube-line"></i>

              </h4>
            </div>
        </div>
        <div className='w-full flex p-2 flex-col items-center justify-center'>
          <div className='w-full p-5 gap-5 flex flex-col bg-white border-2 border-[#6dd4d6] rounded-xl'>
            <div className='w-full flex flex-col md:flex-row gap-5'>
              <div className='w-full'>
                <h1 className='font-[spaceRegualar]'>Name</h1>
              <input type="text" placeholder='Your Name' className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none'/>
              </div>
              <div className='w-full'>
                <h1 className='font-[spaceRegualar]'>Name</h1>
              <input type="text" placeholder='Your Name' className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none'/>
              </div>
            </div>
             <div>
                <h1 className='font-[spaceRegualar]'>Phone</h1>
              <input type="text" placeholder='Your phone number' className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none'/>
              </div>
              <div>
                <h1 className='font-[spaceRegualar]'>Message</h1>
              <textarea rows={4} placeholder='Your Message' className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none'/>
              </div>
              <button className='bg-[#6BD1D3] p-3 w-full rounded-md font-[spaceBold]'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
