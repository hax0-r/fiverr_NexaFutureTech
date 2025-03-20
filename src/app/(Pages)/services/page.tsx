import Wrapper from '@/app/Wrapper'
import React from 'react'
import ai1 from '../../../Assets/ShelfAutomation.avif'
import ai2 from '../../../Assets/TailoredManufacturingAutomation.avif'
import ai3 from '../../../Assets/RoboticProcessAutomation.jpg'
import ai4 from '../../../Assets/RevivingDormantAutomationSystems.avif'
import Image from 'next/image'
import Numbers from '@/app/Components/Numbers'

const OurServices = [
  {
    img: ai1,
    title: "for off the shelves solution",
    description: "We provide expert consultation on integrating off-the-shelf automation solutions to help businesses enhance efficiency without the need for custom-built systems. Whether it's selecting and optimizing a commercial robotic arm for pick-and-place tasks or advising on the best pre-engineered automation tools, we guide manufacturers in making informed decisions. Our services include solution assessment, configuration recommendations, process optimization strategies, and user training to ensure a seamless transition with minimal disruption. By leveraging existing technologies, we help manufacturers reduce costs and accelerate automation adoption."
  },
  {
    img: ai2,
    title: "Tailored Manufacturing Automation",
    description: "We provide expert consultation on developing customized automation strategies tailored to the specific needs of manufacturers. By analyzing workflows and identifying inefficiencies, we recommend and optimize automation solutions using advanced technologies . Our guidance ensures that manufacturers implement the right automation tools to enhance efficiency, streamline production, and maximize return on investment. With a focus on seamless adoption, we help businesses make their manufacturing processes more agile and competitive."
  },
  {
    img: ai3,
    title: "Robotic Process Automation (RPA)",
    description: "We streamline business processes by deploying intelligent software robots that automate repetitive, rule-based tasks. Our RPA solutions help organizations eliminate manual inefficiencies in areas such as data entry, reporting, and customer service. By using advanced RPA platforms, we develop tailored solutions that reduce errors, improve compliance, and accelerate workflow execution. This allows businesses to reallocate human resources to more strategic initiatives, increasing overall productivity and operational efficiency."
  },
  {
    img: ai4,
    title: "Reviving Dormant Automation Systems",
    description: "Many manufacturers have underutilized automation systems that fail to deliver their intended benefits. We specialize in restoring and optimizing these dormant systems to peak efficiency. Our team conducts detailed assessments, troubleshooting, and fine-tuning to ensure maximum performance and longevity. By reviving automation investments, we help companies recover lost productivity, reduce downtime, and achieve higher returns on their technology assets."
  },
]

const Services = () => {
  return (
    <Wrapper>
      <section className="py-14 lg:py-24 relative z-0 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="max-w-3xl mx-auto slidein [--slidein-delay:300ms] opacity-0 font-bold text-2xl  text-gray-100 mb-5 md:text-4xl md:leading-normal">
            Smart Automation,
            <span className="text-blue-200"> Better Efficiency </span>
          </h1>
          <p className="max-w-2xl mx-auto slidein [--slidein-delay:500ms] opacity-0 text-center text-base font-normal leading-7 text-blue-200 mb-9">
            Enhance productivity with our tailored automation solutions, from robotic systems to process optimization.</p>
        </div>
      </section>

      <div className="max-w-7xl w-full mx-auto md:p-5 p-3 md:mt-16 mt-10">

        <h2 className='text-center font-semibold md:text-5xl text-4xl slidein [--slidein-delay:700ms] opacity-0'>Our Services</h2>
        <div className="grid sm:grid-cols-2 grid-cols-1 md:mt-12 mt-8 gap-5">
          {
            OurServices.map((data, index) => (
              <div key={index} className="w-full flex slidein [--slidein-delay:800ms] opacity-0 transition-all duration-500 hover:-translate-y-2 pb-5 flex-col myShadow p-4 rounded-lg">
                <Image src={data.img} alt={data.title} className="rounded-lg h-80 object-cover" />
                <h3 className=' mt-7 text-xl font-semibold capitalize'>{data.title}</h3>
                <p className='mt-3  text-zinc-600'>{data.description}</p>
              </div>
            ))
          }
        </div>
      </div>

      <div className="md:mt-28 mt-10">
        <Numbers />
      </div>

      <div className="flex items-center justify-center max-w-4xl mx-auto flex-col  md:mt-28 mt-8 text-center p-5">
        <h2 className="md:text-4xl text-3xl font-semibold tracking-tight capitalize text-zinc-800 ">Subscribe to our newsletter</h2>
        <p className="mt-4 text-lg text-gray-500">
          Subscribe to our newsletter and stay updated with the latest trends, innovations, and insights in automation and smart manufacturing
        </p>
        <form action="https://api.web3forms.com/submit" method="POST" className="mt-6 flex max-w-xl w-full gap-x-2">
          <input type="hidden" name="access_key" value="1e2a1974-3994-4e26-bf6c-0b687aeef6e4" />
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

export default Services