import { Roboto_Mono, Anonymous_Pro, Open_Sans, Play } from "next/font/google";
import LocalFont from 'next/font/local'

export const play = Play(
    {
        weight: "700",
        preload: true,
        subsets: ['latin']
    }
)

export const open_sans = Open_Sans({
    preload: true,
    weight: "600",
    subsets: ['cyrillic', 'latin']
});
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
export const anonymous_pro_bold = Anonymous_Pro({
    preload: true,
    weight: "700",
    subsets: ['cyrillic', 'latin']
});
export const anonymous_pro_regular = Anonymous_Pro({
    preload: true,
    weight: "400",
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
export const europeextendedCbold = LocalFont({
    preload: true,
    src: '../fonts/europeextendedc_bold.otf'
})
export const europeextendedRegular = LocalFont({
    preload: true,
    src: '../fonts/europeextendedc.otf'
})
export const disketMonoRegular = LocalFont({
    preload: true,
    src: '../fonts/Disket-Mono-Regular.ttf'
})
export const disketMonoBold = LocalFont({
    preload: true,
    src: '../fonts/Disket-Mono-Bold.ttf',
})
export const newZelek = LocalFont({
    preload: true,
    src: '../fonts/New_Zelek.ttf',
})
export const montBold = LocalFont({
    preload: true,
    src: '../fonts/Mont-Bold.woff2',
})
export const montSemiBold = LocalFont({
    preload: true,
    src: '../fonts/Mont-SemiBold.woff2',
})