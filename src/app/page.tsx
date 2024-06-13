import PartnershipSection from "../components/Cart/PartnershipSection";
import IntroSection from "@/components/Intro/Intro";
import DescriptionSection from "@/components/Description/Description";

export default function Home() {
    return (

        <main className="flex min-h-screen flex-col items-center justify-between overflow-x-hidden">
            <IntroSection/>
            <DescriptionSection/>
            <PartnershipSection/>
        </main>
    );
}
