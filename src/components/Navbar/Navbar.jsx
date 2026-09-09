import { useEffect, useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { TbMenu3 } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [isScrolled, setisScrolled] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            setisScrolled(window.scrollY > 10)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    })

    return (
        <header className={`bg-white fixed top-0 left-0 right-0 z-1 ${isScrolled ? 'shadow-lg transition-all duration-500': ''}`}>
            <nav className='max-w-350 px-10 flex justify-between mx-auto md:h-[14vh] h-[12vh] items-center'>

                {/* Logo */}
                <Link to="/" className='text-3xl font-bold'>
                    Gr<span className='text-orange-500'>O</span>cify
                </Link>

                {/* Desktop Menu */}
                <ul className='md:flex items-center gap-x-15 hidden'>
                    <li>
                        <Link to="/" className='font-semibold tracking-wider text-orange-500'>Home</Link>
                    </li>
                    <li>
                        <Link To="/#aboutus" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</Link>
                    </li>
                    <li>
                        <Link To="/#process" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</Link>
                    </li>
                    <li>
                        <Link To="/#contactus" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</Link>
                    </li>
                </ul>

                {/* Nav Actions */}
                <div className='flex gap-x-5 items-center'>
                    {/* Input Field */}
                    <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                        <input className='flex-1 h-[5vh] px-3 focus:outline-none' type="text" name="text" id="text" placeholder='Search...' autoComplete='off' />

                        <button className='bg-linear-to-b from-blue-600 to-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl'>
                            <IoSearch />
                        </button>
                    </div>

                    <a href="#" className='text-2xl text-zinc-800'>
                        <IoMdHeart />
                    </a>

                    <a href="#" className='text-2xl text-zinc-800'>
                        <HiShoppingBag />
                    </a>
                    {/* Hamburger */}
                    <a href="#" className='text-3xl text-zinc-800 md:hidden' onClick={toggleMenu}>
                        {showMenu ? <TbMenu3 /> : <FiMenu />}
                    </a>

                </div>

                {/* Mobile Menu */}
                <ul className={`flex flex-col shadow-xl gap-y-12 bg-orange-400/20  items-center backdrop-blur-lg rounded-xl p-10 gap-x-15 md:hidden absolute top-30 -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
                    <li>
                        <a href="/" className='font-semibold tracking-wider text-orange-500'>Home</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
                    </li>
                    <li>
                        <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>

                    <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                        <input className='flex-1 h-[5vh] px-3 focus:outline-none' type="text" name="text" id="text" placeholder='Search...' autoComplete='off'/>

                        <button className='bg-linear-to-b from-blue-600 to-orange-500 text-white w-10 h-10 flex items-center justify-center rounded-full text-xl'>
                            <IoSearch />
                        </button>
                    </li>

                </ul>
            </nav>
        </header>
    )
}

export default Navbar
