import Link from "next/link"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import logo from '../../Assets/logo-3.png'
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <footer className="w-full mt-10 bg-zinc-50 md:pt-8 pt-4">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    {/*Grid*/}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <Link
                                href="/"
                                className="flex justify-center lg:justify-start"
                            >
                               <Image src={logo} alt="logo" className='w-40' />
                            </Link>
                            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                                Trusted in more than 100 countries &amp; 5 million customers. Have any
                                query ?
                            </p>
                            <Link
                                href="/contact"
                                className="py-2.5 px-5 h-9 block w-fit bg-primary rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-primary/80 lg:mx-0"
                            >
                                Contact us
                            </Link>
                        </div>
                        {/*End Col*/}
                        <div className="lg:mx-auto text-left ">
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Quick Links</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6">
                                    <Link
                                        href="/"
                                        className="text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        href="/#about"
                                        className=" text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        href="/services"
                                        className=" text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className=" text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/*End Col*/}
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-gray-900 font-medium mb-7">Resources</h4>
                            <ul className="text-sm  transition-all duration-500">
                                <li className="mb-6">
                                    <Link
                                        href="mailto:jai.poinoosawmy@outlook.com "
                                        className="text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        jai.poinoosawmy@outlook.com 
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        href="tel:+310617065516"
                                        className=" text-gray-600 hover:text-gray-900 transition-all duration-500"
                                    >
                                        +31(0)617065516 
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*Grid*/}
                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-gray-500 ">
                                ©<Link href="/">NexaFuturTech</Link> 2025, All rights
                                reserved.
                            </span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                <Link
                                    href="javascript:;"
                                    className="w-9 h-9 rounded-full bg-primary flex justify-center items-center transition-all duration-500 hover:bg-primary/80"
                                >
                                    <FaInstagram className="text-white" />
                                </Link>
                                <Link
                                    href="javascript:;"
                                    className="w-9 h-9 rounded-full bg-primary flex justify-center items-center transition-all duration-500 hover:bg-primary/80"
                                >
                                    <FaLinkedinIn className="text-white" />
                                </Link>
                                <Link
                                    href="javascript:;"
                                    className="w-9 h-9 rounded-full bg-primary flex justify-center items-center transition-all duration-500 hover:bg-primary/80"
                                >
                                    <FaFacebookF className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer