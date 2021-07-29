import {createSlice} from '@reduxjs/toolkit'

export const HeroSectionInViewSlice = createSlice({
    name: 'inView',
    initialState: {
        inView: false,
    },
    reducers: {
        toggleInView: (state,action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.inView = action.payload;
        },
    },
    extraReducers: {
        // [fetchUserById.pending]: (state, action) => {
        //
        // },
        // [fetchUserById.fulfilled]: (state, action) => {
        //
        // },
        // [fetchUserById.rejected]: (state, action) => {
        //
        // },
    }
})

// Action creators are generated for each case reducer function
export const {toggleInView} = HeroSectionInViewSlice.actions;

// we can also select the values that we are using in the state as listed below

export const selectInViewVale = (state) => state.inView.inView.inView;


export default HeroSectionInViewSlice.reducer;