import Wrapper from '@/app/Wrapper'
import React from 'react'
import ai2 from '../../../Assets/ai2.jpg'
import ai3 from '../../../Assets/ai3.jpg'
import img1 from '../../../Assets/img1.png'
import Image from 'next/image'
import Cards from '@/app/Components/Cards';
import Link from 'next/link';
import { AiOutlineSolution } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa6'
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'
import { SiInductiveautomation } from 'react-icons/si'

const ourServices = [
    {
        title: 'Off-the-Shelf Automation',
        description: 'Integrating ready-made automation solutions to improve efficiency quickly.',
        icon: <AiOutlineSolution />
    },
    {
        title: 'Manufacturing Automation',
        description: 'Designing tailored automation systems using robotics, AI, and IoT to optimize workflows.',
        icon: <MdOutlinePrecisionManufacturing />
    },
    {
        title: 'Robot Process Automation',
        description: 'Automating repetitive business tasks with intelligent software robots to boost productivity.',
        icon: <FaRobot />
    },
    {
        title: 'Reviving Dormant Automation',
        description: 'Restoring and optimizing underutilized automation systems to maximize.',
        icon: <SiInductiveautomation />
    },
]

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
                <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 md:mt-12 mt-8 gap-4">
                    <Cards ourServices={ourServices} />
                </div>
                <div className="flex items-center justify-center w-full mt-10">
                    <Link href={"/services"} className='px-10 py-3 block bg-primary transition-all duration-500 hover:opacity-80 text-white rounded-full'>View All</Link>
                </div>
            </div>

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col gap-6 mx-auto p-5 md:mt-16 mt-10">
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight md:text-3xl text-2xl'>Empowering Innovation through Automation Excellence</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>We aim to revolutionize automation and manufacturing by leading the integration of manual processes with advanced technologies. With dedication and passion, we strive to propel businesses into a new era of efficiency and sustainable growth, fostering innovation in the industry.</p>
                </div>
                <div className="md:max-w-[38%] w-full">
                    <Image src={ai2} className='rounded-lg' alt='img' />
                </div>
            </div>

            <div id='about' className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col-reverse gap-6 mx-auto p-5 md:mt-28 mt-5">
                <div className="md:max-w-[40%] w-full">
                    <Image src={ai3} alt='img' className='rounded-lg myShadow' />
                </div>
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight text-3xl'>About Us</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>At NexafuturTech, we specialize in helping manufacturers embrace automation to enhance efficiency, reduce costs, and drive innovation. With expertise in integrating off-the-shelf solutions, custom automation, and process optimization, we empower businesses to stay ahead in the competitive manufacturing landscape. Our mission is to bridge the gap between technology and industry, ensuring seamless automation for a smarter future.</p>
                </div>
            </div>

            <div className="bg-primary md:p-10 p-5 md:mt-20 mt-10">
        <div className="max-w-7xl my-5 w-full mx-auto py-5 text-center">

          <h2 className="text-white font-semibold md:text-3xl text-2xl">We Help To Grow Your Business</h2>
          <p className="max-w-5xl w-full mx-auto text-blue-100 mt-3">Our expertise in automation has empowered businesses to achieve remarkable milestones. From successfully completed projects to a growing online presence, we take pride in our impact. Join the companies that trust us to enhance efficiency, boost engagement, and drive success. </p>

          <div className="grid text-white md:grid-cols-4 grid-cols-2 gap-5 gap-y-10 md:mt-16 mt-10">

            <div className="">
              <h2 className="font-semibold text-4xl mb-2">142+</h2>
              <p className="text-blue-200">Successful Implementations</p>
            </div>
            <div className="">
              <h2 className="font-semibold text-4xl mb-2">30k</h2>
              <p className="text-blue-200"> Engaged Community</p>
            </div>
            <div className="">
              <h2 className="font-semibold text-4xl mb-2">53M</h2>
              <p className="text-blue-200">
                Total Processes
              </p>
            </div>
            <div className="">
              <h2 className="font-semibold text-4xl mb-2">95%</h2>
              <p className="text-blue-200">Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
            
            <div className="flex items-center justify-center max-w-4xl mx-auto flex-col  md:mt-20 mt-8 text-center p-5">
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