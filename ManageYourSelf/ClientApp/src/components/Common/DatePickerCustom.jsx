import React, { useState, useEffect } from "react";
import Taghvim from './Taghvim';
import PersianDatePicker2 from './PersianDatePicker2';


const DatePickerCustom = ({ visible, width }) => {
    const [refresh, setRefresh] = useState(false)
    let comp = null

    if (visible) {
        // comp= <Taghvim />
        comp = <PersianDatePicker2 width={width} />
    }
    else {
        comp = null
    }
    useEffect(() => {

    }, [refresh])




// window.addEventListener('click', function (e) {
//     var element = document.getElementById("myBtn")

//     if (element == null) return

//     if (element.contains(e.target)) {
//         console.log("Clicked in box")
//     } else {
//         console.log("Clicked outside the box")
//         var elem = document.getElementById("myBtn");
//         visible = false
//         setRefresh(~refresh)
//     }
// });

return (
    <div id="myBtn">

        {comp}

    </div>
)
}
export default DatePickerCustom