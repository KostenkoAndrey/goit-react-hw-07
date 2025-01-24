import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
axios.defaults.baseURL = "https://6791115baf8442fd7378e6ce.mockapi.io";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async (_, thunkAPI) => {
    try {
        const { data }  = await axios.get("/contacts");
        return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
});

export const addContact = createAsyncThunk("contacts/addContact", async ( body, thunkAPI) => {
    try {
        const { data } = await axios.post("/contacts", body);
        return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
});

export const deleteContact = createAsyncThunk("contacts/deleteContact", async ( taskId, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/contacts/${taskId}`);
        return data;
    } catch (e) {
        thunkAPI.rejectWithValue(e.message);
    }
});

