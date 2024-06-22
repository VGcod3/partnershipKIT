import React from 'react'
import Image from 'next/image'
import { partnersSection } from "../_content/_content"
const Partners = () => {
  return (
    <section className='container'>
        <h2 className='uppercase text-3xl md:text-5xl my-16 text-center'>Наші партнери</h2>
        <ul className='flex justify-center items-center gap-20 flex-wrap bg-black p-5 rounded-md'>
            {partnersSection.map((partner, index) => (
                <li className='basis-40' key={index}>
                    <Image className='w-full h-full object-contain object-center' src={partner.image} alt={partner.image} width={partner.width} height={partner.height}></Image>
                </li>))}
           
        </ul>
    </section>
  )
}

export default Partners