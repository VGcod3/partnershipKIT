import PartnershipSection from "../components/Cart/PartnershipSection";
import IntroSection from "@/components/Intro/Intro"
import DescriptionSection from "@/components/Description/Description"
import Contacts from "../components/Contacts/Contacts"
import Portrait from "../components/Portrait/Portrait"
import Statistics from "../components/Statistics/Statistics"
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col space-y-20 items-center justify-between overflow-x-hidden">
       <IntroSection/>
       <DescriptionSection/>
      <PartnershipSection />
      <Statistics />
      <Portrait />
      <Contacts />
    </main>
  );

}
