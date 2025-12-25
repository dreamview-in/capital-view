import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'
import { Link } from 'react-router-dom'


const Cont = () => {
    const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      'service_ixiu0l5',
      'template_2mdht1k',
      formRef.current,
      'I_zWlo6A90h-4iW0w'
    )
    .then(() => {
      alert('Message sent successfully')
      formRef.current.reset()
    })
    .catch((error) => {
      console.error(error)
      alert('Failed to send message')
    })
  }
  return (
    <div className='w-full md:h-screen p-6 flex md:mt-0 mt-[12vh] items-end justify-center'>
      <div className='w-full bg-[#DAF3F7] gap-5 border-2 md:py-12 md:px-24 border-[#6dd4d6] rounded-xl p-5 flex flex-col md:flex-row items-center justify-center'>
        <div className='w-full flex flex-col gap-2 items-center justify-center md:items-start'>
          <h1 className='text-[6vw] md:text-[2vw] text-center md:text-left font-[spaceBold] capitalize'>Contact us for enquiries related to your <span>specific </span> financing <span>needs </span>.</h1>
          <p className='text-[3vw] md:text-left md:text-[1.2vw] text-center mt-4 font-[spaceRegualar]'>To become a referral partner with one of India’s leading loan distribution platforms.</p>

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
            <p className='text-[3vw] md:text-xl font-[spaceRegualar]'>    Majlis park, Gali No- 7, Near ram mandir, Delhi, North West 110033</p>
          </div>

          <div className='flex mt-8 gap-5 items-center justify-center'>
            <Link to="https://www.instagram.com/capital_venue/" className='text-2xl cursor-pointer'><i className="ri-instagram-fill"></i></Link>
                        <Link to="https://x.com/capital_venue" className='text-2xl cursor-pointer'><i className="ri-twitter-x-fill"></i></Link>
                        <Link to='https://www.facebook.com/share/1AdFnryQ7Y/' className='text-2xl cursor-pointer'><i className="ri-facebook-circle-fill"></i></Link>
          </div>
        </div>
        <div className='w-full flex p-2 flex-col items-center justify-center'>
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className='w-full p-6 bg-white rounded-xl border-2 border-[#6dd4d6] '>
            <div className='w-full p-5 gap-5 flex flex-col bg-white rounded-xl'>
              <div className='w-full flex flex-col md:flex-row gap-5'>
                <div className='w-full'>
                  <h1 className='font-[spaceRegualar]'>Name</h1>
                  <input
                    name='name'
                    type="text"
                    required
                    placeholder='Your Name'
                    className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none' />
                </div>
                <div className='w-full'>
                  <h1 className='font-[spaceRegualar]'>Email</h1>
                  <input
                    name='email'
                    type="text"
                    required
                    placeholder='Your Email ID'
                    className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none' />
                </div>
              </div>
              <div>
                <h1 className='font-[spaceRegualar]'>Phone</h1>
                <input
                  name='phone'
                  required
                  type="text"
                  placeholder='Your phone number'
                  className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none' />
              </div>
              <div>
                <h1 className='font-[spaceRegualar]'>Message</h1>
                <textarea name='message' rows={4} placeholder='Your Message' className='w-full px-3 py-2  border-gray-300 rounded-md bg-[#0000001a] outline-none' />
              </div>
              <button type='submit' className='bg-[#6BD1D3] cursor-pointer p-3 w-full rounded-md font-[spaceBold]'>Contact us</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Cont
