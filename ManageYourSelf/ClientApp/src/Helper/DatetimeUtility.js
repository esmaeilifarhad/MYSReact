import moment from 'jalali-moment'
import React from 'react';


export const DateTest = () => {
    return moment("2022-03-06", 'YYYY/MM/DD').locale('fa').format('YYYY/MM/DD')

};

export const AllDateNeedExist = (str) => {
    
    var obj = {}

    const m = moment();
    var today = moment().format('jYYYY/jM/jD');//Today
    var todayarray = today.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]//.substring(2, 4)
    //-------------------

    obj.currentShamsyDateSlashless = todayShamsy8char()
    obj.currentShamsyDateBySlash = todayShamsy()
    obj.currentShamsyMonth = mounth
    obj.currentShamsyDay = rooz
    obj.currentShamsyYear = year
    obj.tomarrowShamsyDateBySlash = addDayReturnDate(1)
    obj.yesterdayShamsyDateBySlash = addDayReturnDate(-1)
    obj.dayOfWeekShamsyNumber = calDayOfWeeknumber(todayShamsy())
    obj.dayOfWeekShamsystring = calDayOfWeek(todayShamsy())
    return obj

};
//   =>  ****/**/**
export const todayShamsy = () => {

    const m = moment();
    var today = moment().format('jYYYY/jM/jD');//Today

    var todayarray = today.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]//.substring(2, 4)
    today = year + "/" + mounth + "/" + rooz

    return today;
}
export const todayShamsy8char = () => {

    const m = moment();
    var today = moment().format('jYYYY/jM/jD');//Today


    var todayarray = today.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]//.substring(2, 4)
    today = year + "" + mounth + "" + rooz
    return today

}

export const calDayOfWeek = (date) => {
    /*
    str.substr(1, 4);
    */
    if (date == undefined) {
        return "undefined"
    }
    date = date.toString()

    var mounth = ""
    var rooz = ""

    if (date.length == 8) {
        date = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2)
    }
    var arrayDate = date.split("/")
    mounth = (parseInt(arrayDate[1]) <= 9) ? "0" + parseInt(arrayDate[1]) : parseInt(arrayDate[1])
    rooz = (parseInt(arrayDate[2]) <= 9) ? "0" + parseInt(arrayDate[2]) : parseInt(arrayDate[2])

    date = arrayDate[0] + mounth + rooz;

    //date = date.replace(/\//g, '');
    date = date.substr(date.length - 6); // 13980203=> 980203

    const m = moment();
    const numberWeek = moment(date, 'jYYjMMjDD').weekday();
    let day;
    switch (numberWeek) {
        case 0:
            day = "یکشنبه";
            break;
        case 1:
            day = "دوشنبه";
            break;
        case 2:
            day = "سه شنبه";
            break;
        case 3:
            day = "چهارشنبه";
            break;
        case 4:
            day = "پنج شنبه";
            break;
        case 5:
            day = "جمعه";
            break;
        case 6:
            day = "شنبه";
    }
    return day;
}

export const baghyMandeYaer = (str) => {
    const m = moment();
    //366
    if (IsKabise(str) == true) {
        var second = (m.jDayOfYear() - 1) * 86400
        var x = CurrentTime()
        second = parseInt(x.slice(0, 2)) * 3600 + parseInt(x.slice(2, 4)) * 60 + parseInt(x.slice(4, 6)) + second
        return 100 - ((second * 100) / (366 * 86400)).toFixed(3)
    }
    //365
    if (IsKabise(str) == false) {
        var second = (m.jDayOfYear() - 1) * 86400
        var x = CurrentTime()
        second = parseInt(x.slice(0, 2)) * 3600 + parseInt(x.slice(2, 4)) * 60 + parseInt(x.slice(4, 6)) + second
        return (100 - ((second * 100) / (365 * 86400)).toFixed(3)).toString().substr(0, 5)
    }
}
export const IsKabise = (str) => {
    //moment.jIsLeapYear(1391) // true
    //moment.jIsLeapYear(1392) // false
    if (str == undefined) {
        return "undefined"
    }
    str = str.replace(/\//g, '')
    str = str.toString()
    if (str.length == 6) {
        if (parseInt("13" + str.slice(0, 2)) % 4 == 3)
            return true
        else
            return false
    }
    if (str.length == 8) {
        if (parseInt(str.slice(0, 4)) % 4 == 3)
            return true
        else
            return false

        return str.slice(0, 4)
    }

}
export const CurrentTime = () => {
    var d = new Date();
    var hour = d.getHours();  /* Returns the hour (from 0-23) */
    var minute = d.getMinutes();  /* Returns the minutes (from 0-59) */
    var second = d.getSeconds();
    return (hour <= 9 ? "0" + hour : hour) + "" + (minute <= 9 ? "0" + minute : minute) + "" + (second <= 9 ? "0" + second : second)
}
export const foramtTime = (str) => {
    if (str == undefined) {
        return "undefined"
    }

    return str.slice(0, 2) + ":" + str.slice(2, 4) + ":" + str.slice(4, 6)


}

export const baghyMandeDay = () => {
    //86400
    var x = CurrentTime()
    var second = parseInt(x.slice(0, 2)) * 3600 + parseInt(x.slice(2, 4)) * 60 + parseInt(x.slice(4, 6))
    return (100 - (second * 100) / 86400).toFixed(2)


}
//991012=>1399/10/12  & 13991012 =>1399/10/12
export const formatDate = (str) => {

    const m = moment();
    var today = moment().format('jYYYY/jM/jD');//Today
    var todayarray = today.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]


    if (str == undefined) {
        return "undefined"
    }

    str = str.toString()

    if (str.length == 6) {
        return year + "/" + str.slice(2, 4) + "/" + str.slice(4, 6)
    }
    if (str.length == 8) {
        return str.slice(0, 4) + "/" + str.slice(4, 6) + "/" + str.slice(6, 8)
    }

}
//شنبه 0 - یکشنبه 1 - جمعه 6
export const calDayOfWeeknumber = (date) => {
    /*
    str.substr(1, 4);
    */

    date = date.toString()

    var mounth = ""
    var rooz = ""

    if (date.length == 8) {
        date = date.substr(0, 4) + "/" + date.substr(4, 2) + "/" + date.substr(6, 2)
    }
    var arrayDate = date.split("/")
    mounth = (parseInt(arrayDate[1]) <= 9) ? "0" + parseInt(arrayDate[1]) : parseInt(arrayDate[1])
    rooz = (parseInt(arrayDate[2]) <= 9) ? "0" + parseInt(arrayDate[2]) : parseInt(arrayDate[2])

    date = arrayDate[0] + mounth + rooz;

    //date = date.replace(/\//g, '');
    date = date.substr(date.length - 6); // 13980203=> 980203

    const m = moment();
    const numberWeek = moment(date, 'jYYjMMjDD').weekday();
    let day;
    switch (numberWeek) {
        case 0:
            day = 1;
            break;
        case 1:
            day = 2;
            break;
        case 2:
            day = 3;
            break;
        case 3:
            day = 4;
            break;
        case 4:
            day = 5;
            break;
        case 5:
            day = 6;
            break;
        case 6:
            day = 0;
    }
    return day;
}

//اختلاف بین دو تاریخ
export const Utl_Date_NumberDaysTwoDate = (firstDate, secondDate) => {

    var firstDate = moment(firstDate, 'jYYYY/jM/jD ').format('M/D/YYYY')//'1/1/2014'
    var secondDate = moment(secondDate, 'jYYYY/jM/jD ').format('M/D/YYYY')//'1/1/2014'


    var startDay = new Date(firstDate);
    var endDay = new Date(secondDate);
    var millisecondsPerDay = 1000 * 60 * 60 * 24;

    var millisBetween = startDay.getTime() - endDay.getTime();
    var days = millisBetween / millisecondsPerDay;

    // Round down.
    return (Math.floor(days));

}

export const addDayReturnDate = (nDays) => {
    const m = moment();
    m.add(nDays, 'day')
    var newDate = m.format('jYYYY/jM/jD')

    newDate = convertDateToslashless(newDate)
    return newDate
}
export const Utl_Date_AddDayToData = (date, n) => {

    if (date == "") return
    if (date == null) return
    if (date == undefined) return
    const m = moment(Utl_Date_FormatDate(date), 'jYYYY/jM/jD');
    m.add(n, 'day')
    var newDate = m.format('jYYYY/jM/jD')

    var todayarray = newDate.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]//.substring(2, 4)
    newDate = year + "/" + mounth + "/" + rooz

    return newDate
}
//980809|13980809  =>1398/08/09  input parameter
export const Utl_Date_FormatDate = (str) => {

    const m = moment();
    var today = moment().format('jYYYY/jM/jD');//Today
    var todayarray = today.split("/")
    var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
    var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
    var year = todayarray[0]


    if (str == undefined) {
        return "undefined"
    }

    str = str.toString()

    if (str.length == 6) {
        return year + "/" + str.slice(2, 4) + "/" + str.slice(4, 6)
    }
    if (str.length == 8) {
        return str.slice(0, 4) + "/" + str.slice(4, 6) + "/" + str.slice(6, 8)
    }

}
//1401/01/10  => 14010110
export const convertDateToslashless = (str) => {
    if (str == "") {
        return undefined
    }
    if (str == undefined) {
        return undefined
    }
    if (str.length == 8) {
        return str
    }
    if (str.length == 10) {
        var todayarray = str.split("/")
        var mounth = (parseInt(todayarray[1]) <= 9) ? "0" + parseInt(todayarray[1]) : parseInt(todayarray[1])
        var rooz = (parseInt(todayarray[2]) <= 9) ? "0" + parseInt(todayarray[2]) : parseInt(todayarray[2])
        var year = todayarray[0]
        var today = year + "" + mounth + "" + rooz
        return today
    }
}
//پیدا کردن تاریخ اول و آخر هفته بر اساس پارامتر ورودی روز
export const FindFirstAndLastDayOfWeek = (str) => {
    let firstLast = []
    let dayNumberWeek = calDayOfWeeknumber(str)
    let firstWeek = Utl_Date_AddDayToData(str, (-dayNumberWeek))
    let lastWeek = Utl_Date_AddDayToData(str, (6 - dayNumberWeek))
    firstLast.push(firstWeek)
    firstLast.push(lastWeek)

    return firstLast
}

//convert  2020-10-28T12:24:04.347 /Date(1445975227197)/ to format Date Milady
export const Utl_Date_convertDateToFormatDate = (date) => {

    var date = new Date(date.match(/\d+/).map(Number)[0])

    var date = new Date(date);
    date.toLocaleString()
    var mm = (date.getMonth() + 1).toString();
    var dd = date.getDate();
    var yyyy = date.getFullYear();
    if (mm < 10) mm = "0" + mm;
    if (dd < 10) dd = "0" + dd;
    return "" + yyyy.toString() + "-" + mm + "-" + dd;
}
//convert milday to shamsy
export const Utl_Date_ConvertMiladyToJalaly = (mildayDate) => {
    var m = moment(mildayDate, 'YYYY/M/D')
    var res = m.format('jYYYY/jMM/jDD')
    return res;
}


