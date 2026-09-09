import React, { useEffect, useState } from 'react'
import Heading from '../Heading/Heading'
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import userdata from './TestimonialUserData';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Testimonials = () => {
  const [users, setUsers] = useState([]);
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => {
      const MaxIndex = users.length - 3;
      return prev + 3 > MaxIndex ? MaxIndex : prev + 3;
    })
  }

  const prevSlide = () => {
    setIndex((prev) =>
      (prev - 3 < 0 ? 0 : prev - 3));
  }

  useEffect(() => {
    const fetchusers = async () => {
      const data = await userdata();
      setUsers(data)
    }

    fetchusers();
  }, [])

  return (
    <section>
      <div className='max-w-350 px-10 py-20 mx-auto'>
        <Heading Highlight='Customers' text2='Saying' />

        <div >
          <div className='flex justify-end gap-2 py-5'>
            <button onClick={prevSlide} className='flex justify-center items-center text-3xl h-10 w-12 rounded-lg bg-zinc-100 text-zinc-800 hover:bg-linear-to-b hover:to-orange-500 hover:from-orange-400 cursor-pointer hover:text-white'>
              <RiArrowLeftSLine />
            </button>

            <button onClick={nextSlide} className='flex justify-center items-center text-3xl h-10 w-12 rounded-lg bg-zinc-100 text-zinc-800 hover:bg-linear-to-b hover:to-orange-500 hover:from-orange-400 cursor-pointer hover:text-white'>
              <RiArrowRightSLine />
            </button>
          </div>

          
          <div className='md:flex gap-10'>
            {users.slice(index, index + 3).map(dets => (
              <div key={dets.id} className='px-5 mt-5 py-3 h-60 rounded-xl border bg-zinc-100'>
                <div className='flex'>
                  <div className='w-20 h-20'>
                    <img className='h-20 w-20 p-1 border-3 border-orange-400 rounded-full' src={dets.image} />
                  </div>
                  <div className=''>
                    <h4 className='py-1 px-3 text-xl font-bold text-zinc-600'>
                      {dets.name}
                    </h4>
                    <p className='px-3 text-sm text-zinc-700'>
                      {dets.testimonial.occupation}
                    </p>
                    <span className='px-3 text-xl text-yellow-500'>
                      {dets.testimonial.rating}
                    </span>
                  </div>

                </div>
                <div className='flex items-center justify-center pt-7  px-2'>
                  <p className='text-sm text-zinc-600'>
                    {dets.testimonial.feedback}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Testimonials
