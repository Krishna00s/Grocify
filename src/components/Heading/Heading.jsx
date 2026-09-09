import React from 'react'

const Heading = (props) => {
    return (
        <div className='w-fit mx-auto'>
            <h2 className='md:text-5xl text-[2.5rem] font-bold'><span className='text-orange-500'>{props.Highlight}</span> {props.text1} <span className='pt-1 underline decoration-orange-300 underline-offset-8 decoration-3'>{props.text2}</span></h2>
        </div>
    )
}

export default Heading
