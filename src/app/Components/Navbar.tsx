"use client";
import Link from 'next/link';
import { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import { IoClose } from 'react-icons/io5';
import logo from '../../Assets/logo.png'
import Image from 'next/image';

const Navbar = () => {

    const [navbar, setNavbar] = useState(false)

    return (
        <>
            <div className="bg-primary  w-full h-24 flex items-center justify-center">
                <div className='max-w-7xl slidein [--slidein-delay:300ms] opacity-0 w-full mx-auto p-5 flex items-center justify-between'>
                    <Link href={"/"} className="flex items-center gap-3 text-white">
                        <Image src={logo} alt="logo" className='w-12' />
                        <h2 className='font-medium text-4xl md:block hidden uppercase'>Ne<span className='italic'>x</span>aFuturTech</h2>
                    </Link>
                    <ul className='md:flex hidden items-center space-x-10 text-white'>
                        <li><Link href={"/"}>Home</Link></li>
                        <li><Link href={"/#about"}>About Us</Link></li>
                        <li><Link href={"/services"}>Services</Link></li>
                        <li><Link href={"/contact"}>Contact Us</Link></li>
                    </ul>
                    <FaBars onClick={() => setNavbar(true)} className='text-2xl text-gray-100 md:hidden cursor-pointer' />
                </div>

                {/* responsive navbar */}

                <div className={`fixed bg-primary text-white overflow-hidden transition-all duration-500 top-0 ${navbar ? "w-full" : "w-0"} left-0 z-50`}>
                    <div className=" w-full px-10 relative pt-6 min-h-screen">
                        <IoClose onClick={() => setNavbar(false)} className='absolute top-6 right-7 text-3xl' />
                        <Image src={logo} alt="logo" className='w-12' />
                        <ul className='flex mt-8 flex-col space-y-7'>
                            <li><Link onClick={() => setNavbar(false)} href={"/"}>Home</Link></li>
                            <li><Link onClick={() => setNavbar(false)} className="text-nowrap" href={"/#about"}>About Us</Link></li>
                            <li><Link onClick={() => setNavbar(false)} href={"/services"}>Services</Link></li>
                            <li><Link onClick={() => setNavbar(false)} className="text-nowrap" href={"/contact"}>Contact Us</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Navbar