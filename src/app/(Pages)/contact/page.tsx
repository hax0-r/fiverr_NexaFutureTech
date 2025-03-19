import Wrapper from '@/app/Wrapper'
import React from 'react'
import { BiMapPin, BiPhone } from 'react-icons/bi'
import { IoMailOpenOutline } from 'react-icons/io5'
import img from '../../../Assets/contactPeople.png'
import Image from 'next/image'

const Contact = () => {
    return (
        <Wrapper>
            <section className=" relative z-0">
                <div className="py-14 lg:py-24 bg-primary">

                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
                        <h1 className="max-w-3xl mx-auto slidein [--slidein-delay:300ms] opacity-0 font-bold text-2xl  text-gray-100 mb-5 md:text-4xl md:leading-normal">
                            Let’s Connect & Elevate
                            <span className="text-blue-200"> Your Business </span>
                        </h1>
                        <p className="max-w-2xl mx-auto slidein [--slidein-delay:500ms] opacity-0 text-center text-base font-normal leading-7 text-blue-200 mb-9">
                            Have questions about automation solutions or need expert advice? Our team is here to help.
                            Whether you're looking for process automation, consulting, or support, we are just a message away.</p>
                    </div>

                    <div className="grid max-w-4xl mx-auto px-5 md:mt-20 mt-10 sm:grid-cols-2 grid-cols-1 gap-4 w-full">
                        <div className="glass slidein [--slidein-delay:700ms] opacity-0 flex items-center justify-center flex-col text-center gap-2 p-5">
                            <IoMailOpenOutline className="text-blue-50 w-10 h-10" />
                            <h3 className="text-2xl text-blue-50 font-semibold mt-2">Email Us</h3>
                            <p className="text-gray-300 ">support@yourcompany.com</p>
                        </div>
                        <div className="glass slidein [--slidein-delay:900ms] opacity-0 flex items-center justify-center flex-col text-center gap-2 p-5">
                            <BiPhone className="text-blue-50 w-10 h-10" />
                            <h3 className="text-2xl text-blue-50 font-semibold mt-2">Call Us</h3>
                            <p className="text-gray-300 ">+92 000 0 0000</p>
                        </div>
                    </div>
                </div>

                <div className="md:mt-20 mt-10 mx-auto max-w-7xl flex items-center justify-between md:flex-row flex-col gap-5 p-5">
                    <div className="md:max-w-[50%] w-full ">
                        <h2 className="text-2xl font-semibold text-zinc-800 md:text-start text-center">Get in Touch with Us</h2>
                        <p className='text-zinc-500 mt-3 md:text-start text-center'>Reach out to us, and let’s discuss how we can drive innovation and success together.</p>
                        <form action="https://api.web3forms.com/submit" method="POST" className="grid md:grid-cols-2 grid-cols-1 gap-4 md:mt-8 mt-5">
                            <input type="hidden" name="access_key" value="1e2a1974-3994-4e26-bf6c-0b687aeef6e4" />
                            <input name='Name' required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Enter Name" />
                            <input name='Email' required type="email" className="p-3 border rounded-lg border-zinc-200" placeholder="Enter Email " />
                            <input name='Phone' required type="number" className="p-3 border rounded-lg border-zinc-200" placeholder="Enter Phone Number" />
                            <input name='Address' required type="text" className="p-3 border rounded-lg border-zinc-200" placeholder="Enter Address" />
                            <textarea name="Message" rows={5} className="p-3 resize-none border rounded-lg border-zinc-200 w-full md:col-span-2" placeholder="Message..."></textarea>
                            <button className='bg-primary md:col-span-2 text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:bg-primary/80 rounded-lg'>Send Message</button>
                        </form>
                    </div>
                    <div className="md:max-w-[40%] w-full ">
                        <Image src={img} alt='img' />
                    </div>
                </div>
            </section>
        </Wrapper >
    )
}

export default Contact