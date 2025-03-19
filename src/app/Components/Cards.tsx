import React from 'react'

interface ServicesProps {
    title: string,
    description: string,
    icon: React.ReactNode
}

interface Services {
    ourServices: ServicesProps[]
}

const Cards: React.FC<Services> = ({ ourServices }) => {
    return (
        <>
            {
                ourServices.map((data, index) => (
                    <div key={index} className="w-full flex items-center py-8 transition-all duration-500 hover:-translate-y-2 justify-center flex-col myShadow p-5 rounded-lg">
                        <div className=" bg-blue-50 text-4xl w-16 h-16 flex items-center justify-center rounded-lg">
                            {data.icon}
                        </div>
                        <h3 className='text-center mt-7 text-xl font-semibold'>{data.title}</h3>
                        <p className='mt-3 text-center text-zinc-600'>{data.description}</p>
                    </div>
                ))
            }
        </>
    )
}

export default Cards