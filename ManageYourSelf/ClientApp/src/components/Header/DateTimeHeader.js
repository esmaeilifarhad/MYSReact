import React,{useEffect,useState} from "react";
import { DateTest,todayShamsy,todayShamsy8char,calDayOfWeek,baghyMandeYaer, CurrentTime,foramtTime,baghyMandeDay} from './../../Helper/DatetimeUtility';

const DateTimeHeader=()=>{
    
const [forceUpdate,setForceUpdate]=useState(true);

useEffect(()=>{
    const timer = setInterval(() => {
        setForceUpdate(~forceUpdate)
    }, 1000);
});


    return(
        <table className="table">
            <tr>
                <td>امروز</td>
                <td>روز</td>
                <td>ساعت</td>
                <td>سال </td>
                <td>روز </td>
            </tr>
            <tr>
                <td>{todayShamsy()}</td>
                <td>{calDayOfWeek(todayShamsy())}</td>
                <td>{foramtTime(CurrentTime())}</td>
                <td>{baghyMandeYaer(todayShamsy())}</td>
                <td>{baghyMandeDay()}</td>
            </tr>

        </table>
    )

}
export default DateTimeHeader