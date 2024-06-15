import Image from "next/image"
import facebook from "../../public/facebook.svg"
import instagram from "../../public/instagram.svg"
import linkedin from "../../public/linkedin.svg"
import telegram from "../../public/telegram.svg"
const Statistics = () => {
    return (
        <section className='container'>
            <h2 className='uppercase text-4xl md:text-5xl mb-16 text-center'>Статистика</h2>
            <div className="flex items-center flex-wrap justify-center gap-16 text-xl">
                <div className="flex items-center gap-2 rounded "><Image className="bg-white rounded-full "  src={telegram} width={33} height={33} alt="a" /><span>800+</span></div>
                <div className="flex items-center gap-2 rounded "><Image className="bg-white rounded-full " src={instagram} width={33} height={33} alt="a" /><span>2900+</span></div>
                <div className="flex  items-center gap-2 rounded "><Image className="bg-white rounded-full " src={linkedin} width={33} height={33} alt="a" /><span>300+</span></div>
                <div className="flex items-center gap-2 rounded "><Image className="bg-white rounded-full " src={facebook} width={33} height={33} alt="a" /><span>2100+</span></div>
            </div>
        </section>
    )
}

export default Statistics