import { play } from "@/app/fonts"

export default function Footer() {
    return <footer className="w-full p-8">
        <div className="max-w-7xl mx-auto h-full flex flex-col md:flex-row justify-between items-center gap-5">
            <div className="socials flex gap-5">
                <a href="https://www.facebook.com/BEST.Lviv/">
                    <img src="/facebookWhite.svg" alt="facebook" className="w-8 md:w-auto" />
                </a>
                <a href="https://www.instagram.com/best_lviv/">
                    <img src="/instagramWhite.svg" alt="instagram" className="w-8 md:w-auto" />
                </a>
                <a href="https://www.linkedin.com/company/bestlviv/">
                    <img src="/linkedinWhite.svg" alt="linkedin" className="w-8 md:w-auto" />
                </a>
                <a href="https://t.me/bestlviv">
                    <img src="/telegramWhite.svg" alt="telegram" className="w-8 md:w-auto" />
                </a>
            </div>
            <img src="/BestLogo.svg" alt="best logo" className=' h-14 md:h-20' />
            <p className={`${play.className} text-5xl`}>2023</p>
        </div>
    </footer>
}