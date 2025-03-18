import Wrapper from '@/app/Wrapper'
import React from 'react'
import img2 from '../../../Assets/img2.jpg'
import img1 from '../../../Assets/img1.png'
import img3 from '../../../Assets/img3.png'
import Image from 'next/image'
import Cards from '@/app/Components/Cards';
import Link from 'next/link';

const Home = () => {
    return (
        <Wrapper>
            <div className='bg-primary min-h-[calc(100vh-6rem)]'>
                <div className="max-w-7xl p-5 flex md:flex-row flex-col gap-10 items-center justify-between w-full mx-auto min-h-[calc(100vh-8rem)]">
                    <div className="text-white md:max-w-[50%] w-full">
                        <h1 className="md:text-5xl slidein [--slidein-delay:300ms] opacity-0 capitalize text-3xl font-semibold leading-tight">Smart Automation for Smarter Manufacturing</h1>
                        <p className="mt-5 text-blue-200 slidein [--slidein-delay:500ms] opacity-0">We optimize manufacturing with cutting-edge automation, reducing costs and increasing efficiency. Let NexafuturTech transform your operations for a smarter future.</p>
                        <button className='px-12 slidein [--slidein-delay:700ms] opacity-0 py-3.5 rounded-full bg-white text-primary cursor-pointer mt-6 font-medium transition-all duration-500 hover:bg-transparent hover:text-white border border-white'>Get Started</button>
                    </div>
                    <div className="md:max-w-[50%] slidein [--slidein-delay:400ms] opacity-0 w-full flex items-center justify-center">
                        <Image src={img1} className='float-image' alt='img' />
                    </div>
                </div>
            </div>

            <div className="max-w-7xl w-full mx-auto p-5 md:mt-16 mt-10">

                <h2 className='text-center font-semibold text-4xl'>Our Services</h2>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:mt-12 mt-8 md:gap-8 gap-4">
                    <Cards />
                </div>
                <div className="flex items-center justify-center w-full mt-10">
                    <Link href={"/services"} className='px-10 py-3 block bg-primary transition-all duration-500 hover:opacity-80 text-white rounded-full'>Read More</Link>
                </div>
            </div>

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col gap-6 mx-auto p-5 md:mt-16 mt-10">
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight md:text-3xl text-2xl'>Empowering Innovation through Automation Excellence</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>We aim to revolutionize automation and manufacturing by leading the integration of manual processes with advanced technologies. With dedication and passion, we strive to propel businesses into a new era of efficiency and sustainable growth, fostering innovation in the industry.</p>
                </div>
                <div className="md:max-w-[35%] w-full">
                    <Image src={img2} className='-scale-x-100' alt='img' />
                </div>
            </div>

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col-reverse gap-6 mx-auto p-5 md:mt-1 mt-2">
                <div className="md:max-w-[35%] w-full">
                    <Image src={img3} alt='img' />
                </div>
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight text-3xl'>About Us</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>At NexafuturTech, we specialize in helping manufacturers embrace automation to enhance efficiency, reduce costs, and drive innovation. With expertise in integrating off-the-shelf solutions, custom automation, and process optimization, we empower businesses to stay ahead in the competitive manufacturing landscape. Our mission is to bridge the gap between technology and industry, ensuring seamless automation for a smarter future.</p>
                </div>
            </div>

            <div className="flex items-center justify-center max-w-4xl mx-auto flex-col  md:mt-20 mt-14 text-center p-5">
                <h2 className="md:text-4xl text-3xl font-semibold tracking-tight capitalize text-zinc-800 ">Subscribe to our newsletter</h2>
                <p className="mt-4 text-lg text-gray-500">
                    Subscribe to our newsletter and stay updated with the latest trends, innovations, and insights in automation and smart manufacturing
                </p>
                <form className="mt-6 flex max-w-xl w-full gap-x-2">
                    <input
                        id="email-address"
                        name="email"
                        type="email"
                        required
                        placeholder="Enter your email"
                        autoComplete="email"
                        className="border-zinc-300 w-full flex-auto rounded-md border px-3.5 py-2"
                    />
                    <button className='bg-primary  text-white px-7 py-3 font-medium cursor-pointer transition-all duration-500 hover:opacity-80 rounded-lg'>Subscribe</button>
                </form>
            </div>

        </Wrapper>
    )
}

export default Home