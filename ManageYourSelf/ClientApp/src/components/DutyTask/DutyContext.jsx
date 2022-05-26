import React, { createContext } from "react";

const DutyContext = createContext({
    checkedDuty: [],
    modalShow:false,
    openModalMethod:()=>{},
    closeModalMethod: () => { },

    FillCheckedDuty: () => { },
    UpdateDuty: () => { }


})
export default DutyContext