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
import { contactsSection } from "../_content/_content";
const Contacts = () => {
    return (
        <section className='container'>
            <h2 className="uppercase text-3xl md:text-5xl my-16 text-center">Контакти</h2>
            <div className="flex flex-wrap justify-center gap-10">
            {contactsSection.map((item) => (
                  <Card className="basis-96" >
                  <CardHeader>
                      <div className="w-full">
                          <img className="w-full h-full aspect-[497/348] object-cover" src={item.img} alt={item.name_surname} />
                      </div>
                  </CardHeader>
                  <CardContent className="text-center">
                      <CardTitle>{item.name_surname}</CardTitle>
                      <CardDescription>{item.description}</CardDescription>

                  </CardContent>
                  <CardFooter className="flex-col">
                      <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="tel:0670000000"><Mail size={12}/>{item.phone}</a></CardDescription>
                      <CardDescription><a className="hover:underline inline-flex gap-2 items-center" href="mailto:name.surname@best-eu.org"><Phone size={12}/> {item.mail}</a> </CardDescription>
                  </CardFooter>
              </Card>
            ))}
              
              
        
            
            </div>
        </section>
    )
}

export default Contacts