import React from 'react'

const Numbers = () => {
    return (
        <div className="bg-primary md:p-10 p-5">
            <div className="max-w-7xl my-5 w-full mx-auto py-5 text-center">

                <h2 className="text-white font-semibold md:text-3xl text-2xl">Smart Automation Consultancy for Smarter Businesses

                </h2>
                <p className="max-w-5xl w-full mx-auto text-blue-100 mt-3">We help businesses harness the power of automation to optimize processes, improve efficiency, and drive success. With a proven track record of delivering innovative solutions, we are committed to transforming industries through smart automation strategies.</p>

                <div className="grid text-white md:grid-cols-4 grid-cols-2 gap-5 gap-y-10 md:mt-16 mt-10">

                    <div className="">
                        <h2 className="font-semibold text-4xl mb-2">100+</h2>
                        <p className="text-blue-200">Successful Implementations</p>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-4xl mb-2">10k</h2>
                        <p className="text-blue-200"> Engaged Community</p>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-4xl mb-2">1000+</h2>
                        <p className="text-blue-200">
                            Total Processes
                        </p>
                    </div>
                    <div className="">
                        <h2 className="font-semibold text-4xl mb-2">98%</h2>
                        <p className="text-blue-200">Happy Clients</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Numbers