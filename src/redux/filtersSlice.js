import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    filters: {
        name: "" 
        },
        };


const slice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        changeFilter: ( state, actions ) => {
            state.filters.name = actions.payload;
        },
    }
});

export const  filtersSlice = slice.reducer;
export const { changeFilter } = slice.actions;
export const selectNameFilter = state => state.filters.filters.name;