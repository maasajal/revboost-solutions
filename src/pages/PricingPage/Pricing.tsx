import React from 'react'
import { IoCheckmarkDoneCircleOutline } from 'react-icons/io5'

// Define the Pricing component as a React functional component
const Pricing: React.FC = () => {
  return (
    <div>
       <section className='bg-green-950'>
            <p className='text-center text-white inter font-bold py-10 text-4xl md:text-6xl lg:text-6xl'>
                <span className='text-green-500'>Choose the plan</span> that fits <br />
                your business needs!
            </p>
            <hr className='text-green-900 pb-5 w-[65%] mx-auto' />
            <div className='w-[65%] mx-auto pb-5 grid grid-cols-1 pl-5 md:flex md:justify-around lg:flex lg:justify-around'>
                <p className='flex items-center gap-x-3 inter text-white text-[16px]'>
                    <IoCheckmarkDoneCircleOutline /> No credit card required
                </p>
                <p className='flex items-center gap-x-3 inter text-white text-[16px]'>
                    <IoCheckmarkDoneCircleOutline /> No hidden charges
                </p>
                <p className='flex items-center gap-x-3 inter text-white text-[16px]'>
                    <IoCheckmarkDoneCircleOutline /> Straightforward pricing
                </p>
                <p className='flex items-center gap-x-3 inter text-white text-[16px]'>
                    <IoCheckmarkDoneCircleOutline /> Cancel anytime
                </p>
            </div>
       </section>
    </div>
  )
}

export default Pricing
