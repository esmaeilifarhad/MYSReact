import React, { useState } from 'react';
//import { calDayOfWeeknumber, todayShamsy } from '../../Helper/DatetimeUtility';
import { addDayReturnDate, FindFirstAndLastDayOfWeek, Utl_Date_AddDayToData, convertDateToslashless, calDayOfWeeknumber, todayShamsy, calDayOfWeek, AllDateNeedExist } from './../../Helper/DatetimeUtility';

import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import { useDispatch, useSelector } from 'react-redux';
import { setDateAction } from "../../Toolkit/HelperSlice";
import { setShowDialogModalAction, setTagAction, setTitleAction } from '../../Toolkit/ModalSlice';
import { useEffect } from 'react';

const ObjectRow = ({ year, month, day, holyDays, dateSelected, currentDate }) => {

    const dispatch = useDispatch()
    const styleControlDay = (param) => {

        var obj = {}

        if (param.find(x => x == "friday")) {
            obj.color = "red"
        }
        if (param.find(x => x == "today")) {
            obj.backgroundColor = "green"
        }
        if (param.find(x => x == "isDateHolyDay")) {
            obj.color = "#bd0808"
            obj.cursor = "pointer"
        }
        if (param.find(x => x == "otherMonth")) {
            obj.color = "#d1cbcb8f"
        }


        if (param.find(x => x == "defaultDate")) {
            obj.backgroundColor = "red"
        }
        obj.textAlign = "center"
        return obj
    }
    const ttt = (date, param2) => {

        dateSelected(date)

    }

    //--------------------------------------------
    var status = false
    //-----------------------------------------------------
    var dateSelect = year + "" + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day)
    // var z = calDayOfWeeknumber(dateSelect)
    var firstAndLastDayWeek = FindFirstAndLastDayOfWeek(dateSelect)
    var today = todayShamsy()
    var rows = []

    const isHolyDay = (date) => {
        var monthDay = date.split("/")[1] + "" + date.split("/")[2]

        var res = holyDays.find(x =>
            x.value == monthDay)

        return res

    }
    for (var i = 0; i < 7; i++) {
        //console.log(firstAndLastDayWeek[0].split("/")[2])
        var dateNoSlash = convertDateToslashless(firstAndLastDayWeek[0])
        var tomarrowDay = Utl_Date_AddDayToData(dateNoSlash, i)

        var dayOfWeeknumber = calDayOfWeeknumber(tomarrowDay)
        var justDay = tomarrowDay.split("/")[2]
        var justMonth = tomarrowDay.split("/")[1]
        var justYear = tomarrowDay.split("/")[0]
        //--آیا تاریخ مذکور تعطیل است

        var isDateHolyDay = isHolyDay(tomarrowDay)
        //-----------آیا تاریخ مذکور در ماه جاری میباشد
        if (today.split("/")[0] == year && today.split("/")[1] == month) {
            status = false
        }
        else {
            status = true
        }

        var arrayStyles = []
        if (justMonth != month) {

            arrayStyles.push("otherMonth")
        }
        //امروز
        if (today.split("/")[2] == justDay && status == false) {
            arrayStyles.push("today")

        }
        //تاریخ پیشفرض انتخاب شده
        if (currentDate.split("/")[2] == justDay && currentDate.split("/")[1] == justMonth) {
            arrayStyles.push("defaultDate")

        }
        //جمعه
        if (dayOfWeeknumber == 6) {
            arrayStyles.push("friday")

        }//عادی
        if (isDateHolyDay != undefined) {
            arrayStyles.push("isDateHolyDay")

        }

        let dateSelected = tomarrowDay
        let arrayStyles2 = arrayStyles
        rows.push(<td style={styleControlDay(arrayStyles)} onClick={() => ttt(dateSelected, arrayStyles2)}>{justDay}</td>)


    }

    return (
        <>
            {rows}
        </>
    )
}
const DayBody = ({ year, month, lastMonth, holyDays, dateSelected, currentDate }) => {

    var rows = []
    for (var k = 1; k <= lastMonth;) {

        rows.push(<tr><ObjectRow key={k} year={year} month={month} day={k} holyDays={holyDays} dateSelected={dateSelected} currentDate={currentDate
        } /></tr>)
        //el=<tr><ObjectRow year={year} month={month} day={k} /></tr>
        k += 7
    }


    return (
        <>
            {rows}
        </>
    )
}
const SelectDate = ({ responseData, monthProp, yearProp }) => {
    const [currentYear, setCurrentYear] = useState({})
    const [currentMonth, setCurrentMonth] = useState({})


    var today = todayShamsy()
    const dispatch = useDispatch()
    var dataData = AllDateNeedExist()
    var defaultMonth
    var rows = []
    var month = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
    for (let index = 1; index <= 12; index++) {
        if (parseInt(dataData.currentShamsyMonth) == index) {
            defaultMonth = { value: index, label: (index + " - " + month[index - 1]) }
        }
        if (monthProp == index) {
            defaultMonth = { value: index, label: (index + " - " + month[index - 1]) }
        }
        rows.push({ value: index, label: (index + " - " + month[index - 1]) })

    }
    var rowsYear = []
    var defaultYear = {}
    for (let index = 1250; index < 1550; index++) {
        // if (today.split("/")[0] == index) {
        //     debugger
        //     defaultYear.value = index
        //     defaultYear.label = index
        // }
        if (yearProp == index) {

            defaultYear.value = yearProp
            defaultYear.label = yearProp
        }
        // else if (today.split("/")[0] == index) {
        //     debugger
        //     defaultYear.value = index
        //     defaultYear.label = index
        // }

        rowsYear.push({ value: index, label: index })
    }

    const getSlectValueMonth = (e) => {


        //const month2 = { month: e.value }
        setCurrentMonth({ value: e.value, label: (e.value + " - " + month[e.value - 1]) })
        //dispatch(setDateAction(month2))

    }
    const getSlectValueYear = (e) => {

        // const year = { year: e.value }
        setCurrentYear({ label: e.value, value: e.value })
        // dispatch(setDateAction(year))
    }

    useEffect(() => {

        // const isEmpty = Object.keys(currentYear).length === 0;
        if (Object.keys(currentYear).length === 0) {

            setCurrentYear(defaultYear)
        }
        if (Object.keys(currentMonth).length === 0) {

            setCurrentMonth(defaultMonth)
        }
        if (Object.keys(currentYear).length === 0 && Object.keys(currentMonth).length === 0) {
            responseData([])
        }
        else {

            responseData(currentYear.value + "/" + (currentMonth.value < 10 ? "0" + currentMonth.value : currentMonth.value))

        }
    }, [currentYear, currentMonth])
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <Select
                        //isMulti
                        onChange={getSlectValueYear}
                        value={currentYear}
                        defaultValue={currentYear}

                        defa
                        options={rowsYear} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Select
                        //isMulti
                        onChange={getSlectValueMonth}
                        //components={animatedComponents}
                        value={currentMonth}
                        defaultValue={currentMonth}
                        options={rows} />
                </div>
            </div>




        </>
    )
}
const PersianDatePicker = ({ showDatePicker, dateSelected, currentDate }) => {
    const [selectDate, setSelectDate] = useState([])
    if (showDatePicker == false) {
        return ""
    }
    const holyDays = [
        { value: '0101', label: "نوروز" },
        { value: '0102', label: "نوروز" },
        { value: '0103', label: "نوروز" },
        { value: '0104', label: "نوروز" },
        { value: '0314', label: "رحلت امام خمینی" },
        { value: '0315', label: "قیام 15 خرداد" },
        { value: '0703', label: "رحلت رسول اکرم" },
        { value: '1229', label: "ملی شدن نفت" },
        { value: '0113', label: "سیزده به در" },
    ]

  



    var today = todayShamsy()
    var splitdate = today.split('/');
    var year = ""
    var month = ""
    //-------------

    // فرم ثبت
    if (currentDate == undefined) {
        if (selectDate.length == 0) {
            //نمایش تاریخ امروز
            year = parseInt(splitdate[0])
            month = parseInt(splitdate[1])
        }
        else {
            //نمایش تاریخ انتخاب شده
            var q = selectDate.split("/")
            year = parseInt(q[0])
            month = parseInt(q[1])
        }
    }
    // فرم ویرایش
    else {

        if (selectDate.length == 0 && currentDate.length == 0) {
            //نمایش تاریخ امروز
            year = parseInt(splitdate[0])
            month = parseInt(splitdate[1])
        }
        else if (currentDate.length != 0 && selectDate.length == 0) {
            //نمایش تاریخ موجود در ویرایش
            var q = currentDate.split("/")
            year = parseInt(q[0])
            month = parseInt(q[1])
        }
        else {
            //نمایش تاریخ انتخاب شده
            var q = selectDate.split("/")
            year = parseInt(q[0])
            month = parseInt(q[1])

        }
    }



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

        setSelectDate(response)

    }

    window.addEventListener('click', function (e) {

        var x = document.getElementById('clickbox')

        if (x != null) {
            if (document.getElementById('clickbox').contains(e.target)) {
                console.log("Clicked in Box");
            } else {
                console.log("Clicked outside Box");
            }
        }
    })

    return (
        <div id='clickbox' className='clsCustomDatePicker'>
            <SelectDate responseData={responseData} monthProp={month} yearProp={year} />

            <table className="table">
                <tr><th>ش</th><th>ی</th><th>د</th><th> س</th><th>چ</th><th>پ</th><th>ج</th></tr>
                <DayBody year={year} month={month} lastMonth={lastMonth} holyDays={holyDays} dateSelected={dateSelected} currentDate={currentDate} />
            </table>

        </div>
    )
}

export default PersianDatePicker
