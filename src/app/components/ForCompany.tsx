import Image from "next/image";
import { capture_it, europeextendedRegular } from "../fonts";
import AnimatedElement from '@/hooks/AnimatedElement';

const possibilities = [
    'Залучитись до розвитку інженерної молоді України',
    "З допомогою амбітних та вмотивованих студентів знайти нові погляди на розв’язання своєї проблеми",
    "Знайти та підтримати цікаві ідеї, які стануть в пригоді в майбутньому",
    "Виявити таланти учасників та  знайти перспективних працівників",
    "Це ваша інвестиція в молодь та можливість підвищити відомість вашої компанії серед студентської спільноти.",
    "Зробіть перші кроки в майбутнє — розвивайте молодих інженерів спільно з нами!"
]

export default function ForCompany() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center max-w-6xl px-6 mx-auto gap-8 lg:gap-14 my-12">
            {/* <AnimatedElement direction="bottom"> */}
            <h3 className={`${capture_it.className} uppercase text-4xl lg:text-5xl text-center`}>Для компанії BEC - це можливість:</h3>
            {/* </AnimatedElement> */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-11">
                {
                    possibilities.map((pos, i) => (
                        // <AnimatedElement delay={i % 2 ? 0.4 : 0.2} direction={i % 2 ? 'right' : 'left'}>
                        <div className="flex gap-4 items-center mx-auto max-w-lg h-[45vw] max-h-64 px-20 py-12 relative text-2xl ">
                            <Image src='/topFrame.svg' alt="top frame" width={420} height={220} className="absolute top-0 right-0 w-4/5 " />
                            <Image src='/bottomFrame.svg' alt="bottom frame" width={420} height={220} className="absolute bottom-0 left-0 w-4/5 " />
                            <p className={`relative z-10 text-center text-sm md:text-lg ${europeextendedRegular.className}`}>
                                {pos}
                            </p>
                        </div>
                        // </AnimatedElement>
                    ))
                }

            </div>
        </section>
    )
}