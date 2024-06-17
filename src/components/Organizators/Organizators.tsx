import Image from "next/image"

import { organizatorsSection } from "../_content/_content"


const Organizators = () => {
    return (
        <section className='container'>
            <h2 className='uppercase text-3xl md:text-5xl my-16 text-center'>Організатор події</h2>
            <div className="flex justify-center flex-wrap gap-10">
                <div className="basis-[600px]">
                    <h3 className='uppercase text-xl md:text-2xl font-semibold '>{organizatorsSection.title}</h3>
                    <p className="mb-7">{organizatorsSection.description}</p>
                    <div className="flex justify-evenly">
                        {organizatorsSection.statistics.map((item) => (
                            <div className="text-center">
                                <span className="block text-3xl">{item.value}</span>
                                {item.title}
                            </div>
                        ))}

                    </div>
                </div>
                <div className="basis-96">
                    <Image className="bg-white p-2 rounded-md" src={organizatorsSection.logo} width={384} height={100} alt="a"></Image>
                </div>
            </div>

        </section>
    )
}

export default Organizators