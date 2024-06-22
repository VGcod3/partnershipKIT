import PartnershipSection from "../components/Cart/PartnershipSection";
import IntroSection from "@/components/Intro/Intro"
import DescriptionSection from "@/components/Description/Description"
import Contacts from "@/components/Contacts/Contacts"
import Portrait from "@/components/Portrait/Portrait"
import Statistics from "@/components/Statistics/Statistics"
import Organizators from "@/components/Organizators/Organizators"
import Partners from "@/components/Partners/Partners"
import ForPartners from "@/components/ForPartners/ForPartners"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-20 items-center justify-between overflow-x-hidden">
      <IntroSection />
      <DescriptionSection />
      <ForPartners />
      <PartnershipSection />
      <Statistics />
      <Portrait />
      <Partners />
      <Organizators />
      <Contacts />
    </main>
  );

}
