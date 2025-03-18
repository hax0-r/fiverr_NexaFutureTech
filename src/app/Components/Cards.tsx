import React from 'react'
import { AiOutlineSolution } from 'react-icons/ai'
import { FaRobot } from 'react-icons/fa6'
import { MdOutlinePrecisionManufacturing } from 'react-icons/md'

const CardData = [
    {
        title: 'Shelves Solutions',
        description: 'We provide automation solutions that are tailored to your business needs, ensuring that your operations are streamlined and efficient.',
        icon: <AiOutlineSolution />
    },
    {
        title: 'Manufacturing Automation',
        description: 'We provide automation solutions that are tailored to your business needs, ensuring that your operations are streamlined and efficient.',
        icon: <MdOutlinePrecisionManufacturing />
    },
    {
        title: 'Robot Process Automation',
        description: 'We provide automation solutions that are tailored to your business needs, ensuring that your operations are streamlined and efficient.',
        icon: <FaRobot />
    },
]

const Cards = () => {
    return (
        <>
            {
                CardData.map((data, index) => (
                    <div key={index} className="w-full flex items-center py-8 transition-all duration-500 hover:-translate-y-2 justify-center flex-col myShadow p-5 rounded-lg">
                        <div className=" bg-blue-50 text-4xl w-16 h-16 flex items-center justify-center rounded-lg">
                            {data.icon}
                        </div>
                        <h3 className='text-center mt-7 text-xl font-semibold'>{data.title}</h3>
                        <p className='mt-3 text-center text-zinc-700'>{data.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Cards