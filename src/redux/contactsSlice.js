import { createSlice, createSelector } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";


export const initialState = {
    contacts:{
        items: [],
        loading: false,
        error: null,
    },
};


const slice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(fetchContacts.pending, state => {
                state.contacts.loading = true;
                state.contacts.error = null;
            })
            .addCase(fetchContacts.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = actions.payload;
            })
            .addCase(fetchContacts.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            .addCase(addContact.pending, state => {
                state.contacts.loading = true;
            })
            .addCase(addContact.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items.push(actions.payload);
            })
            .addCase(addContact.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            .addCase(deleteContact.pending, state => {
                state.contacts.loading = true;
            })
            .addCase(deleteContact.fulfilled, ( state, actions ) => {
                state.contacts.loading = false;
                state.contacts.error = null;
                state.contacts.items = state.contacts.items.filter( task => task.id !== actions.payload.id)
            })
            .addCase(deleteContact.rejected, ( state, actions ) =>{
                state.contacts.loading = false;
                state.contacts.error = actions.payload;
            })
            },

})

export const contactsSlice = slice.reducer;
export const selectContacts = state => state.contacts.contacts.items;
export const selectFilteredContacts = createSelector([ selectContacts, selectNameFilter ], ( contacts, filter )=> {
return contacts.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()))}); 
