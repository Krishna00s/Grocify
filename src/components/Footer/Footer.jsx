import React from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";

const Footer = () => {
    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex gap-y-12 flex-wrap max-w-350 mx-auto px-10'>

                <div className='flex-1 basis-75'>
                    {/* Logo */}
                    <a href="#" className='text-3xl font-bold'>
                        Gr<span className='text-orange-500'>O</span>cify
                    </a>

                    <p className='text-zinc-600 text-sm mt-5 mb-5'>Bred for a high content of beneficial substances. <br />Our Products are all fresh and healthy.</p>

                    <a className='font-semibold text-sm' href="#">2025 &copy; All Rights Reserved</a>
                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='font-bold text-zinc-800 text-2xl'>Company</h5>
                    </li>
                    <li className='mt-6'>
                        <a className='text-zinc-800  hover:text-orange-500' href="#">About</a>
                    </li>
                    <li className='mt-6'>
                        <a className='text-zinc-800  hover:text-orange-500' href="#">FAQ's</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='font-bold text-zinc-800 text-2xl'>Support</h5>
                    </li>
                    <li className='mt-6'>
                        <a className='text-zinc-800  hover:text-orange-500' href="#">Support center</a>
                    </li>
                    <li className='mt-6'>
                        <a className='text-zinc-800  hover:text-orange-500' href="#">Feedback</a>
                    </li>
                    <li className='mt-6'>
                        <a className='text-zinc-800  hover:text-orange-500' href="#">Contact us</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='font-bold text-zinc-800 text-2xl'>Stay Connected</h5>
                    </li>
                    <li className='mt-6'>
                        <p>
                            Questions or Feedback? <br /> We'd love to hear from you.
                        </p>
                    </li>
                    <li className='flex items-center mt-6 gap-2'>
                        <textarea className='bg-white h-20 text-sm rounded-lg px-3 py-3 outline-orange-300' type="text" placeholder='Type your questions or feedbacks here...' />
                        <button className='flex justify-center items-center h-20 w-10 bg-linear-to-b to-orange-400 from-orange-500 text-white text-4xl cursor-pointer hover:to-orange-500 hover:scale-95 rounded-xl'>
                            <MdKeyboardArrowRight />
                        </button>
                    </li>
                </ul>
            </div>


        </footer>
    )
}

export default Footer
