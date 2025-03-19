import Wrapper from '@/app/Wrapper'
import React from 'react'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { IoMailOpenOutline } from 'react-icons/io5'
import { RiMvAiLine } from 'react-icons/ri'

const Contact = () => {
    return (
        <Wrapper>
            <section className="py-14 lg:py-24 relative z-0 bg-primary">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                    <h1 className="max-w-3xl mx-auto slidein [--slidein-delay:300ms] opacity-0 font-bold text-2xl  text-gray-100 mb-5 md:text-4xl md:leading-normal">
                        Let’s Connect & Elevate
                        <span className="text-blue-200"> Your Business </span>
                    </h1>
                    <p className="max-w-2xl mx-auto slidein [--slidein-delay:500ms] opacity-0 text-center text-base font-normal leading-7 text-blue-200 mb-9">
                        Have questions about automation solutions or need expert advice? Our team is here to help.
                        Whether you're looking for process automation, consulting, or support, we are just a message away.</p>
                </div>

                <div className="grid max-w-6xl mx-auto px-5 md:mt-20 mt-10 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                    <div className="glass flex items-center justify-center flex-col text-center gap-2 p-5">
                        <BiMapPin className="text-blue-50 w-10 h-10" />
                        <h3 className="text-2xl text-blue-50 font-semibold mt-2">Our Office</h3>
                        <p className="text-gray-300 ">123 Automation St, Tech City, USA</p>
                    </div>
                    <div className="glass flex items-center justify-center flex-col text-center gap-2 p-5">
                        <IoMailOpenOutline className="text-blue-50 w-10 h-10" />
                        <h3 className="text-2xl text-blue-50 font-semibold mt-2">Email Us</h3>
                        <p className="text-gray-300 ">support@yourcompany.com</p>
                    </div>
                    <div className="glass flex items-center justify-center flex-col text-center gap-2 p-5">
                        <BiPhone className="text-blue-50 w-10 h-10" />
                        <h3 className="text-2xl text-blue-50 font-semibold mt-2">Call Us</h3>
                        <p className="text-gray-300 ">+92 000 0 0000</p>
                    </div>
                </div>

            </section>
        </Wrapper>
    )
}

export default Contact