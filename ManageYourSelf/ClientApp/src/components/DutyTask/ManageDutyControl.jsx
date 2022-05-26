import React, { useContext, useState } from 'react'
import { useMutation, useQueryClient } from 'react-query'
import { UpdateDuty } from '../../Api/DutyApi'
import { AllDateNeedExist, convertDateToslashless } from '../../Helper/DatetimeUtility'
import PersianDatePicker from '../Common/PersianDatePicker'
import PersianDatePicker2 from '../Common/PersianDatePicker2'
import DutyContext from './DutyContext'
import { useEffect } from 'react';
import DatePickerCustom from './../Common/DatePickerCustom';
import { Accordion, Card } from 'react-bootstrap'
const ManageDutyControl = () => {
    const [showDatePickerState, setShowDatePickerState] = useState(false)
    const [currentDatePickerState, setcurrentShowDatePickerState] = useState("")
    const [dateTransfer, setDateTransfer] = useState("")

    useEffect(() => {
        setDateTransfer(AllDateNeedExist().currentShamsyDateBySlash)
    }, [])
    const queryClient = useQueryClient()
    const context = useContext(DutyContext);

    const showDatePicker = (e) => {

        var dateSelect = e.target.value
        setcurrentShowDatePickerState(dateSelect)
        setShowDatePickerState(~showDatePickerState)


    }



    function handleChange(e) {
        var obj = {}

        switch (e.target.type) {
            case "text":
                obj[e.target.name] = e.target.value
                setDateTransfer(e.target.value)
                break;

            case "textarea":
                obj[e.target.name] = e.target.value

                break;
            case "number":
                obj[e.target.name] = parseInt(e.target.value)

                break;
            case "checkbox":
                obj[e.target.name] = e.target.checked
                // obj[""]=
                break;

            default:
                break;
        }
        // setDuty(obj)

    }

    const dateSelected = (param) => {
        
        var obj = {} //duty
        obj["dateTaskIsExecute"] = param
        setDateTransfer(param)
        setShowDatePickerState(false)

    }
    const ManageDuty = (type) => {
        let checkedArray = context.checkedDuty

        if (type == 4) {
            if (dateTransfer.length == 10) {
                context.UpdateDuty(type, checkedArray, parseInt(convertDateToslashless(dateTransfer)))
            }
        }
        else {
            context.UpdateDuty(type, checkedArray)
        }


    }

    let box = document.querySelector('.datePersianPicker');

    let width = 0
    if (box != null) {
        width = box.offsetWidth;
        let height = box.offsetHeight;

    }
    return (<>
        <div style={{ display: "flex" }}>
            <button className="newButton" onClick={() => { context.openModalMethod('create'); }}>جدید</button>
            <button onClick={() => ManageDuty(2)}>انجام</button>
            <button onClick={() => ManageDuty(5)}>انجام نشده</button>
            <button onClick={() => ManageDuty(3)}>فردا</button>
            <button onClick={() => ManageDuty(1)}>انتقال به امروز</button>
            <div>
                <input type="text"

                    className='datePersianPicker'
                    name="dateTaskIsExecute"
                    onClick={showDatePicker}
                    autocomplete="off"
                    value={dateTransfer}
                    onChange={handleChange}
                    placeholder="تاریخ انجام" />
                {/* <DatePickerCustom visible={showDatePickerState} width={width} /> */}
                <PersianDatePicker showDatePicker={showDatePickerState}
                    dateSelected={dateSelected} currentDate={dateTransfer} />
            </div>
            {/* <PersianDatePicker2 showDatePicker={showDatePickerState}
            dateSelected={dateSelected} currentDate={currentDatePickerState} /> */}
            <button onClick={() => ManageDuty(4)}> انتقال</button>

        </div>
        {/* <Accordion defaultActiveKey="2">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Accordion Item #1</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Accordion Item #2</Accordion.Header>
                <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est laborum.
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
   */}
    </>)
}
export default ManageDutyControl