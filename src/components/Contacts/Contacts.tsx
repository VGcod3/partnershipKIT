import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
const Contacts = () => {
    return (
        <section className='container'>
            <h2 className="uppercase text-3xl md:text-5xl my-16 text-center">Контакти</h2>
            <div className="flex flex-wrap justify-center gap-10">
                <Card className="basis-96" >
                    <CardHeader>
                        <div className="w-full">
                            <img className="w-full h-full aspect-[497/348] object-cover" src="https://picsum.photos/400/500" alt="img" />
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <CardTitle>Ім'я Прізвище</CardTitle>
                        <CardDescription>Відповідальна за кооперативні зв'язки</CardDescription>

                    </CardContent>
                    <CardFooter className="flex-col">
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="tel:0670000000"><Mail size={12}/>067 000 0000</a></CardDescription>
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="mailto:name.surname@best-eu.org"><Phone size={12}/> name.surname@best-eu.org</a> </CardDescription>
                    </CardFooter>
                </Card>
                <Card className="basis-96" >
                    <CardHeader>
                        <div className="w-full">
                            <img className="w-full h-full aspect-[497/348] object-cover" src="https://picsum.photos/400/500" alt="img" />
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <CardTitle>Ім'я Прізвище</CardTitle>
                        <CardDescription>Відповідальна за кооперативні зв'язки</CardDescription>

                    </CardContent>
                    <CardFooter className="flex-col">
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="tel:0670000000"><Mail size={12}/>067 000 0000</a></CardDescription>
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="mailto:name.surname@best-eu.org"><Phone size={12}/> name.surname@best-eu.org</a> </CardDescription>
                    </CardFooter>
                </Card>
                <Card className="basis-96" >
                    <CardHeader>
                        <div className="w-full">
                            <img className="w-full h-full aspect-[497/348] object-cover" src="https://picsum.photos/400/500" alt="img" />
                        </div>
                    </CardHeader>
                    <CardContent className="text-center">
                        <CardTitle>Ім'я Прізвище</CardTitle>
                        <CardDescription>Відповідальна за кооперативні зв'язки</CardDescription>

                    </CardContent>
                    <CardFooter className="flex-col">
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="tel:0670000000"><Mail size={12}/>067 000 0000</a></CardDescription>
                        <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="mailto:name.surname@best-eu.org"><Phone size={12}/> name.surname@best-eu.org</a> </CardDescription>
                    </CardFooter>
                </Card>
            
        
            
            </div>
        </section>
    )
}

export default Contacts