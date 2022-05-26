import React, { useEffect, useState, Component } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setCloseDialogModalAction } from "../../Toolkit/ModalSlice";
import axios from 'axios';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import PersianDatePicker from './../Common/PersianDatePicker';
import { formatDate, convertDateToslashless } from './../../Helper/DatetimeUtility';

const options = [
    { value: 1, label: 'تهران' },
    { value: 2, label: 'اصفهان' },
    { value: 4, label: 'کردستان' },
    { value: 5, label: 'یزد' },
    { value: 3, label: 'مشهد' }
]

const FormDutyEdit = ({ ID, parentChange, responseData }) => {

    const dispatch = useDispatch()
    const [duty, setDuty] = useState({})
    const [showDatePickerState, setShowDatePickerState] = useState(false)
    const [currentDatePickerState, setcurrentShowDatePickerState] = useState("")



    async function getById(id) {

        let res = await axios({
            method: 'post',
            url: `https://localhost:44349/api/Duty/GetDutyById?id=${id}`,
            // data: {id:12},

        })
        if (res.status == 200) {

            console.log(res.status)
        }

        return res.data

    }
    useEffect(() => {

        const id = { ID }

        getById(id.ID).then(res => {

            setDuty(res)
        })


    }, [])

    function handleChange(e) {
        var obj = { ...duty }

        switch (e.target.type) {
            case "text":
                //   setDuty({...duty,title:e.target.value})

                // obj.title=e.target.value
                obj[e.target.name] = e.target.value

                break;
            case "checkbox":
                //obj.isExecuted = e.target.checked
                obj[e.target.name] = e.target.checked
                // setDuty({...duty,isExecuted:e.target.checked})

                break;

            default:
                break;
        }
        setDuty(obj)

    }
    const getSlectValue = (e) => {
        
    }
    async function handleSubmit(e) {

        e.preventDefault()
        console.log(duty)

        let res = await axios({
            method: 'post',
            url: `https://localhost:44349/api/Duty/UpdateDuty`,
            data: duty,

        })
        if (res.status == 200) {
            // test for status you want, etc
            console.log(res)
            dispatch(setCloseDialogModalAction())
            responseData(res)
        }

        parentChange(true)

    }

    const dateSelected = (param) => {
        var obj = duty
        
        obj["dateTaskIsExecute"] = convertDateToslashless(param)
        setDuty(obj)
        setShowDatePickerState(false)

    }
    const showDatePicker = (e) => {

        var dateSelect = e.target.value
        setcurrentShowDatePickerState(dateSelect)
        setShowDatePickerState(true)


    }
    return (
        <>

            <Container fluid>
                <Row>
                    <Col md={12}>

                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                {/* <label for="exampleInputEmail1">عنوان</label> */}
                                <input type="text" value={duty.title} className="form-control" name="title" onChange={handleChange} placeholder="عنوان" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group">
                                {/* <label for="exampleInputEmail1">dateTaskIsExecute</label> */}
                                <input type="text"
                                    value={formatDate(duty.dateTaskIsExecute)}
                                    autoComplete="off"
                                    onClick={showDatePicker}
                                    className="form-control" name="dateTaskIsExecute" onChange={handleChange} placeholder="dateTaskIsExecute" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                <PersianDatePicker showDatePicker={showDatePickerState} dateSelected={dateSelected} currentDate={currentDatePickerState} />
                            </div>

                            <div className="form-check">
                                <input type="checkbox" name="isExecuted" checked={duty.isExecuted} value={duty.isExecuted} className="form-check-input" onChange={handleChange} />
                                <label for="exampleCheck1">انجام شده</label>
                            </div>

                            <Select
                                isMulti
                                onChange={getSlectValue}
                                defaultValue={{ value: 4, label: 'کردستان' }}

                                options={options} />
                            <button type="submit" className="btn btn-primary">ارسال</button>
                        </form>

                    </Col>
                </Row>

            </Container>


        </>
    )

}
export default FormDutyEdit