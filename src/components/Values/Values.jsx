import React from 'react'
import Heading from '../Heading/Heading'
import { FaHeart, FaLeaf, FaSeedling } from 'react-icons/fa'
import { FaShield } from 'react-icons/fa6'
import FullBasket from '../../assets/basket-full-vegetables.png'

const Values = () => {

    const leftValues = value.slice(0, 2).map(item => {
        return (
            <div key={item.id} className='flex md:flex-row-reverse items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='md:text-right'>
                    <h3 className='text-zinc-800 font-bold text-3xl'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    const rightValues = value.slice(2).map(item => {
        return (
            <div key={item.id} className='flex items-center gap-7'>
                <div>
                    <span className='flex justify-center items-center text-white text-3xl bg-linear-to-b from-orange-400 to-orange-500 w-15 h-15 rounded-full'>{item.icon}</span>
                </div>

                <div className='text-left'>
                    <h3 className='text-zinc-800 font-bold text-3xl'>{item.title}</h3>
                    <p className='text-zinc-600 mt-2'>{item.para}</p>
                </div>
            </div>
        )
    })

    return (
        <section>
            <div className='max-w-350 mx-auto px-10 py-20'>
                <Heading Highlight='Our' text2='Value' />

                <div className='flex md:flex-row flex-col gap-15 md:gap-5 mt-15'>

                    {/* Left Values */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {leftValues}
                    </div>

                    {/* Middle Basket of Vegetables Image */}
                    <div className='md:flex w-1/2 hidden'>
                        <img src={FullBasket} />
                    </div>

                    {/* Right Values     */}
                    <div className='md:min-h-100 gap-15 flex flex-col justify-between'>
                        {rightValues}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values

const value = [
    {
        id: 1,
        title: 'Trust',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaHeart />
    },
    {
        id: 2,
        title: 'Always Fresh',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaLeaf />
    },
    {
        id: 3,
        title: 'Food Safety',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaShield />
    },
    {
        id: 4,
        title: '100% Organic',
        para: 'It is a long established fact that a reader will be distracted by the readable.',
        icon: <FaSeedling />
    },
]