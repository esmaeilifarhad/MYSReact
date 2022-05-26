import { createSlice } from "@reduxjs/toolkit"


function setShowDialogModal(state,action){
    
    state.modalStatus=true

}
function setTag(state,action){
    
    state.tag=action.payload

}
function setTitle(state,action){
    
    state.title=action.payload

}

function setCloseDialogModal(state,action){
    
    state.modalStatus=false
}



const ModalSlice=createSlice({
    name:'Modal',
    initialState:{ modalStatus:false,tag:{}},
    
    reducers:{
        setShowDialogModal,
        setCloseDialogModal,
        setTag,
        setTitle
    }
})

export const{
    setShowDialogModal:setShowDialogModalAction,
    setCloseDialogModal:setCloseDialogModalAction,
    setTag:setTagAction,
    setTitle:setTitleAction
}=ModalSlice.actions;

export default  ModalSlice.reducer;