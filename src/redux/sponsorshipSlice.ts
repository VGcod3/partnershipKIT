import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iSellingPoint } from '@/types/sp';

const sellingPoints: iSellingPoint[] = [
    {
        compulsory: true,
        active: true,
        name: 'Basic',
        price: 600,
        annotation: "Обов'язковий",
        services: [
            `Участь у нетворкінгу`,
            `2 Instagram Stories`,
            `Логотип на сайті проєкту`,
            `Логотип компанії на brand wall`
        ]
    },
    {
        compulsory: false,
        active: false,
        name: 'Engineer',
        price: 600,
        annotation: "4 left",
        services: [
            'Завдання для CS(Case Study)/ID(Innovative Design)',
            `Надання судді, ментора`,
            `Воркшоп`,
            `Номінація від компанії`,
            `Лого на плакатах`,
            `Логотип на футболках`
        ]
    },
    {
        compulsory: false,
        active: false,
        name: 'Brand',
        price: 250,
        annotation: '',
        services: [
            `Розміщення банера компанії на події`,
            `Розіграш на інфостійках`,
            `День з компанією`,
            `Пост у нашій сторінці LinkedIn`,
            `Пост у нашому Telegram - каналі`
        ]
    },

]

// Initialize chosenSponsorships with compulsory items
const initialState = sellingPoints

const sponsorshipSlice = createSlice({
    name: 'sponsorship',
    initialState,
    reducers: {
        toggleSponsorship: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const sponsorship = state.find(sp => sp.name === name);

            if (sponsorship && !sponsorship.compulsory) {
                sponsorship.active = !sponsorship.active;
            }
        },
    },
});

export const { toggleSponsorship } = sponsorshipSlice.actions;

export default sponsorshipSlice.reducer;
