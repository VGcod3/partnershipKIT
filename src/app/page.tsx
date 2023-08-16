
import Header from './components/Header';
import Hero from './components/Hero';
import AboutEbec from './components/AboutEbec';
import CSID from './components/CSID';
import ForCompany from './components/ForCompany';
import Portrait from './components/Portrait'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
      <Header />
      <Hero />
      <AboutEbec />
      <CSID />
      <ForCompany />
      <Portrait />
    </main>
  )
}
