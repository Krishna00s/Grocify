import React from 'react'
import Heading from '../Heading/Heading'
import { TbCircleNumber1Filled } from "react-icons/tb";
import { TbCircleNumber2Filled } from "react-icons/tb";
import { TbCircleNumber3Filled } from "react-icons/tb";
import { TbCircleNumber4Filled } from "react-icons/tb";
import { BsTruck } from "react-icons/bs";
import { PiPlant } from "react-icons/pi";
import { PiFactory } from "react-icons/pi";
import { SlBadge } from "react-icons/sl";

const Process = () => {

    const renderSteps = steps.map(item => {
        return (
            <div className={`flex-1 basis-75 flex-col ${item.id % 2 === 0 ? 'md:-mt-110' : ''}`}>

                <div className='flex justify-center items-center'>
                    <span className='flex flex-col justify-center items-center text-8xl text-white bg-zinc-800 w-18 h-18 rounded-full outline-[3px] outline-offset-7 outline-zinc-800 outline-dashed ' >{item.number}</span>
                </div>

                <div className='flex gap-4 items-center mt-10'>

                    <span className='flex justify-center items-center bg-linear-to-b from-orange-400 to-orange-500 text-white w-15 h-15 text-4xl p-2 rounded-full'>{item.icon}</span>


                    <div>
                        <h4 className='text-2xl font-bold text-zinc-800'>{item.title}</h4>
                        <p className='text-zinc-600 text-sm font-semibold mt-2'>{item.para}</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-20'>
                <div className='w-fit mr-auto'>
                    <Heading Highlight='Our' text2='Process' />
                </div>

                <div className='flex flex-wrap md:mt-25 justify-center gap-y-17 items-center mt-10 md:pt-50'>
                    {renderSteps}
                </div>

            </div>
        </section>
    )
}

export default Process

const steps = [
    {
        id: 1,
        number: <TbCircleNumber1Filled />,
        title: "Sourcing",
        para: 'It is a long established fact that a reader',
        icon: <PiPlant />
    },
    {
        id: 2,
        number: <TbCircleNumber2Filled />,
        title: "Manufacturing",
        para: 'It is a long established fact that a reader',
        icon: <PiFactory />
    },
    {
        id: 3,
        number: <TbCircleNumber3Filled />,
        title: "Quality Control",
        para: 'It is a long established fact that a reader',
        icon: <SlBadge />
    },
    {
        id: 4,
        number: <TbCircleNumber4Filled />,
        title: "Logistics",
        para: 'It is a long established fact that a reader',
        icon: <BsTruck />
    },
]