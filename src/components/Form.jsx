import React from 'react'
import emailjs from '@emailjs/browser'
import { useRef } from 'react'


const Form = () => {
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
        <div className="max-w-8xl mx-auto px-6 sm:px-12 lg:px-24">
            <div id="form" className="w-full bg-white px-6 sm:px-12 lg:px-24 py-20">
                <h2 className="text-3xl sm:text-4xl font-semibold text-center text-[#1f2a44] mb-4">
                    Get a Quote
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
                    {
                        `Now apply for a Presonal Loan  online, All you need to do is provide
            your details below application form.`
                    }
                </p>

                <form
                    ref={formRef}
                    onSubmit={sendEmail}
                    className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                                Name
                            </label>
                            <input
                                name='name'
                                type="text"
                                placeholder="Name"
                                className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                                E-mail
                            </label>
                            <input
                                name='email'
                                type="email"
                                placeholder="E-mail"
                                className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-semibold text-[#1f2a44] uppercase">
                                Phone
                            </label>
                            <input
                                name='phone'
                                type="tel"
                                placeholder="Phone"
                                className="border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mb-10">
                        <label name className="text-sm font-semibold text-[#1f2a44] uppercase">
                            Message
                        </label>
                        <textarea
                            name='message'
                            placeholder="Enter your message"
                            rows="5"
                            className="w-full border border-gray-300 px-4 py-3 rounded-sm focus:outline-none focus:border-[#1f2a44]"
                        />
                    </div>

                    <div>
                        <button
                            type="submit"
                            className="bg-[#232c4f] text-white px-24 py-4 text-sm font-semibold tracking-wide hover:bg-[#1b2342] transition-all"
                        >
                            SEND INQUIRY
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form
