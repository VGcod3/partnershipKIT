import React from 'react'
import { portraitSection } from '../_content/_content'
const Portrait = () => {
    return (
        <section className='grid grid-cols-1 lg:grid-cols-3 lg:grid-rows-2 rows-3 gap-6 container'>
            <div className="lg:row-span-2 row-start-2 justify-self-center">
                <img src="https://picsum.photos/400/500" alt="portrait" className="lg:w-full lg:h-full aspect-[400/529] object-cover"></img>
            </div>
            {/* <div className='col-span-2 flex  flex-col justify-between basis-auto'> */}

                <h2 className= "lg:col-span-2 uppercase text-4xl md:text-5xl lg:mb-5 lg:text-left text-center">Портрет учасника</h2>



                <div className="lg:col-span-2 content-end">
                    <p className='uppercase text-base md:text-xl lg:text-left text-center mb-10'> Студент Національного Університету «Львівська Політехніка»</p>
                    <div className="flex justify-between gap-3">
                        <div>
                            <h3 className="mb-3">Статистика по курсах університету:</h3>
                            <ul className="list-disc pl-4 space-y-2 text-sm" >
                                {portraitSection.course.map((item) => (<li key={item.title}>{item.title}: {item.value}</li>))}
                                
                            </ul>
                        </div>
                        <div>
                            <h3 className="mb-3">Статистика по курсах університету:</h3>
                            <ul className="list-disc pl-4 space-y-2 text-sm">
                            {portraitSection.specialisation.map((item) => (<li key={item.title}>{item.title}: {item.value}</li>))}
                            </ul>
                        </div>
                    </div>

                </div>
            {/* </div> */}


        </section>
    )
}

export default Portrait