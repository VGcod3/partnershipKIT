
import Header from './components/Header';
import Hero from './components/Hero';
import AboutEbec from './components/AboutEbec';
import CSID from './components/CSID';
import ForCompany from './components/ForCompany';
import Portrait from './components/Portrait'
import Stats from './components/Stats';
import Offers from './components/Offers';
import Additional from './components/Additional'
import Cart from './components/Cart';
import Report from './components/Report';
import Partners from './components/Partners'
import AboutBest from './components/AboutBest'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

import Providers from '@/redux/Providers';


export default function Home() {
  return (
    <Providers>
      <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
        <Header />
        <Hero />
        <AboutEbec />
        <CSID />
        <ForCompany />
        <Portrait />
        <Stats />
        <Offers />
        <Additional />
        <Cart />
        <Report />
        <Partners />
        <AboutBest />
        <Contacts />
        <Footer />
      </main>
    </Providers>
  )
}
