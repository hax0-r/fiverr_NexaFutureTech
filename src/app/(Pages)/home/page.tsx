import Wrapper from '@/app/Wrapper'
import React from 'react'
import img from '../../../Assets/robot.png'
import img1 from '../../../Assets/img1.jpg'
import Image from 'next/image'
import Cards from '@/app/Components/Cards';
import Link from 'next/link';

const Home = () => {
    return (
        <Wrapper>
            <div className='bg-primary min-h-[calc(100vh-6rem)]'>
                <div className="max-w-7xl p-5 flex md:flex-row flex-col gap-10 items-center justify-between w-full mx-auto min-h-[calc(100vh-8rem)]">
                    <div className="text-white md:max-w-[50%] w-full">
                        <h1 className="md:text-5xl slidein [--slidein-delay:300ms] opacity-0 capitalize text-3xl font-semibold leading-tight">Empowering Innovation through Automation Excellence</h1>
                        <p className="mt-5 text-blue-200 slidein [--slidein-delay:500ms] opacity-0">We aim to revolutionize automation and manufacturing by leading the integration of manual processes with advanced technologies. With dedication and passion, we strive to propel businesses into a new era of efficiency and sustainable growth, fostering innovation in the industry.</p>
                        <button className='px-12 slidein [--slidein-delay:700ms] opacity-0 py-3.5 rounded-full bg-white text-primary cursor-pointer mt-6 font-medium transition-all duration-500 hover:opacity-80'>Get Started</button>
                    </div>
                    <div className="md:max-w-[38%] slidein [--slidein-delay:400ms] opacity-0 w-full flex items-center justify-center">
                        <Image src={img} alt='img' />
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

            <div className="max-w-7xl w-full flex items-center justify-between md:flex-row flex-col gap-6 mx-auto p-5 md:mt-20 mt-10">
                <div className="md:max-w-[50%] w-full">
                    <h2 className='font-semibold leading-tight text-3xl'>Empowering Innovation through Automation Excellence</h2>
                    <p className='text-zinc-500 md:text-lg mt-4'>We aim to revolutionize automation and manufacturing by leading the integration of manual processes with advanced technologies. With dedication and passion, we strive to propel businesses into a new era of efficiency and sustainable growth, fostering innovation in the industry.</p>
                </div>
                <div className="md:max-w-[40%] w-full">
                    <Image src={img1} alt='img' />
                </div>

            </div>

        </Wrapper>
    )
}

export default Home