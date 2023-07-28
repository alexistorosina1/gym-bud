import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
    name: 'signup',
    initialState: {
        username: "",
        email: "",
        password: "",
        dob: "",
        location: "",
    },
    reducers: {
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setEmail: (state, action) => {
            state.email = action.payload;
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setDob: (state, action) => {
            state.dob = action.payload
        },
        setLocation: (state, action) => {
            state.location = action.payload
        },
    },
});

export const {
    setUsername,
    setEmail,
    setPassword,
    setDob,
    setLocation,
} = signupSlice.actions;

export default signupSlice.reducer;