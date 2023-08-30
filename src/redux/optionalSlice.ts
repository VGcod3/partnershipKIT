import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { iOptional } from '@/types/sp';

const options: iOptional[] = [
    {
        name: 'Лого на плакатах',
        active: false,
        price: 100,
    },
    {
        name: 'Логотип на футболках',
        active: false,
        price: 100,
    },
    {
        name: 'Розсилка вакансій в телеграм боті',
        active: false,
        price: 50,
    },
]

const initialState = options


const optionalPacketsSlice = createSlice({
    name: 'optional',
    initialState,
    reducers: {
        toggleOptionActive: (state, action: PayloadAction<{ name: string }>) => {
            const { name } = action.payload;
            const option = state.find(sp => sp.name === name);
            if (option) {
                option.active = !option.active;
            }

        },
    },
});

export const { toggleOptionActive } = optionalPacketsSlice.actions;

export default optionalPacketsSlice.reducer;
