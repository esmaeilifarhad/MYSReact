import React, { createContext } from "react";

const MainContext = createContext({
    modalShow: false,
    openModalMethod: () => { },
    closeModalMethod: () => { },
})
export default MainContext