import Header from './components/Header';
import Hero from './components/Hero';
import AboutEbec from './components/AboutEbec';
import CSID from './components/CSID';
import ForCompany from './components/ForCompany';
import Portrait from './components/Portrait'
import Stats from './components/Stats';

import PartnershipSection from './components/Cart/PartnershipSection'

import Report from './components/Report';
import Partners from './components/Partners'
import AboutBest from './components/AboutBest'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <AboutEbec />
      <CSID />
      <ForCompany />
      <Portrait />
      <Stats />

      <PartnershipSection />

      <Report />
      <Partners />
      <AboutBest />
      <Contacts />
      <Footer />
    </main>
  )
}
