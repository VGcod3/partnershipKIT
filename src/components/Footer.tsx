import React from 'react'
import Image from 'next/image'
import { footerSection } from './_content/_content'
const Footer = () => {
  return (
    <footer className='flex sm:justify-between justify-center items-center gap-10 flex-wrap p-2 min-h-[100px] bg-red-900 mt-20'>
        <div className="flex items-center gap-3">
        {footerSection.socialMedia.map((item) => (
           <Image className="bg-white rounded-full "  src={item.img} width={40} height={33} alt={item.link}/>
        ))}
        </div>
        <div className="">
          <Image src={footerSection.logo} width={200} height={100}  alt={footerSection.logo}></Image>
        </div>
        <div className="text-3xl p-4">{footerSection.year}</div>
    </footer>
        
  
  )
}

export default Footer