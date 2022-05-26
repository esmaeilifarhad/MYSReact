import React, { useRef, useState } from 'react';
import {
    FindFirstAndLastDayOfWeek,
    Utl_Date_AddDayToData,
    convertDateToslashless,
    calDayOfWeeknumber,
    todayShamsy, AllDateNeedExist
} from './../../Helper/DatetimeUtility';


const PersianDatePicker2 = ({ showDatePicker, dateSelected, currentDate, width }) => {
    

    if (showDatePicker == false) {
        return ""
    }
    const holyDays = [
        { value: '0101', label: "نوروز" },
        { value: '0102', label: "نوروز" },
        { value: '0103', label: "نوروز" },
        { value: '0104', label: "نوروز" },
        { value: '0703', label: "رحلت رسول اکرم" },
        { value: '1229', label: "ملی شدن نفت" },
        { value: '0113', label: "سیزده به در" },
    ]


    var today = todayShamsy()
    var splitdate = today.split('/');
    var year = ""
    var month = ""
    //-------------





    //-------
    var lastMonth = 0
    if (month <= 6) {
        lastMonth = 31
    }
    if (month >= 7 && month <= 11) {
        lastMonth = 30
    }
    if (month == 12) {
        lastMonth = 29
    }
    //کبیسه
    if (year % 4 == 3) {
        lastMonth = 30
    }
    //-----------------
    var dayWeek = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج شنبه", "جمعه"]
    //------------------

    //گرفتن جواب سرور از  کامپوننت فرزند
    const responseData = (response) => {


    }



    return (
        <div id='clickbox' className='clsCustomDatePicker' style={{ width: width }}>
            <p>test</p>
        </div>
    )
}

export default PersianDatePicker2
