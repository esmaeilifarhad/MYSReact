import React, { useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';

const divStyle = {
    position: "absolute",
    backgroundColor: "chartreuse",
    padding: "0px 10px 0px 10px",
    borderRadius: "0% 0% 50% 50%",
    zIndex: 10,
    top: 27,
    left: "50%"

}
const DutyRateToday = ({ data }) => {
    
    let sumRate=0
    for (let index = 0; index < data.length; index++) {
        
        sumRate+=parseInt(data[index].rate);

    }
    return (
        <>
            <div style={divStyle}>
                <p style={{ color: "red" }}>{sumRate}</p>
            </div>
        </>
    )
}
export default DutyRateToday