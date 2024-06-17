import Image from "next/image"

import { statisticsSection } from "../_content/_content"
const Statistics = () => {
    return (
        <section className='container'>
            <h2 className='uppercase text-4xl md:text-5xl mb-16 text-center'>Статистика</h2>
            <div className="flex items-center flex-wrap justify-center gap-16 text-xl">
            {statisticsSection.items.map((item) => ( 
                <div className="flex items-center gap-2 rounded ">
                    <Image className="bg-white rounded-full "  src={item.img} width={33} height={33} alt={item.title}/>
                    <span>{item.value + "+"}</span>
                    </div>))}
               
            </div>
            <div className="bg-white">
                <h3 className="uppercase text-4xl md:text-5xl mb-16 text-center">Статистика минулої події</h3>
            </div>
        </section>
    )
}

export default Statistics