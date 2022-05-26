import { createSlice } from "@reduxjs/toolkit"



function setDate(state, action) {
    
    if (action.payload.year != undefined)
        state.selectDate.year = action.payload
    if (action.payload.month != undefined)
        state.selectDate.month = action.payload

}

const HelperSlice = createSlice({
    name: 'Helper',
    initialState: { selectDate: {} },

    reducers: {

        setDate,

    }
})

export const {
    setDate: setDateAction,
} = HelperSlice.actions;

export default HelperSlice.reducer;