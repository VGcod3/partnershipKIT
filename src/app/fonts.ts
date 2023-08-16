import { Roboto_Mono, Anonymous_Pro } from "next/font/google";
import LocalFont from 'next/font/local'


export const roboto_light = Roboto_Mono({
    preload: true,
    weight: "400",
    subsets: ['cyrillic', 'latin']
});
export const roboto_bold = Roboto_Mono({
    preload: true,
    weight: "700",
    subsets: ['cyrillic', 'latin']
});
export const anonymous_pro = Anonymous_Pro({
    preload: true,
    weight: "700",
    subsets: ['cyrillic', 'latin']
});

export const capture_it = LocalFont({
    preload: true,
    src: '../fonts/CaptureIt.ttf'
});
export const technos = LocalFont({
    preload: true,
    src: '../fonts/Technos.woff'
});