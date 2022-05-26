import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { setCloseDialogModalAction } from "../../Toolkit/ModalSlice";
import axios from 'axios';
import { convertDateToslashless, AllDateNeedExist } from "../../Helper/DatetimeUtility";

import PersianDatePicker from './../Common/PersianDatePicker';
import Select from 'react-select';
import { CreateDuty } from "../../Api/DutyApi";
const FormDutyCreate = ({ parentChange, responseData }) => {
    const dispatch = useDispatch()

    const handleClose = () => {
        dispatch(setCloseDialogModalAction());
    }

    const [duty, setDuty] = useState({})
    const [masterData, setMasterData] = useState([])
    const [showDatePickerState, setShowDatePickerState] = useState(false)
    const [currentDatePickerState, setcurrentShowDatePickerState] = useState("")




    function handleChange(e) {
        var obj = { ...duty }

        switch (e.target.type) {
            case "text":
                obj[e.target.name] = e.target.value

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
        setDuty(obj)

    }


    const handleSubmit = async event => {
        event.preventDefault();
        var dataPass = { ...duty }
        dataPass.dateTaskIsExecute = parseInt(convertDateToslashless(duty.dateTaskIsExecute))
        dataPass.rate = dataPass.rate.toString()

        var res = await CreateDuty(dataPass)
        

        dispatch(setCloseDialogModalAction())
        responseData(res)
        parentChange(true)
        handleClose()



    }

    useEffect(() => {


        var x = AllDateNeedExist()
        getMasterData()
        setDuty({ isExecuted: false, dateTaskIsExecute: x.currentShamsyDateBySlash })

    }, [])

    const dateSelected = (param) => {
        var obj = duty
        obj["dateTaskIsExecute"] = param
        setDuty(obj)
        setShowDatePickerState(false)

    }
    const showDatePicker = (e) => {
        var dateSelect = e.target.value
        setcurrentShowDatePickerState(dateSelect)
        setShowDatePickerState(true)


    }

    const getMasterData = async () => {

        let res = await axios({
            method: 'post',
            url: `https://localhost:44349/api/MasterData/GetAllMasterData`,
            // data: {id:12},

        })
        if (res.status == 200) {
            debugger
            //  console.log(res)
            setMasterData(res.data.data)
        }

        // return res.data

    }
    const getSlectValue = (e) => {
        var obj = { ...duty }



        obj["masterDataId"] = e.value
        setDuty(obj)
    }
    return (
        <>
            <Container fluid>
                <Row>
                    <Col md={12}>
                        <Form onSubmit={handleSubmit}>

                            <div className="form-group">
                                <Select

                                    onChange={getSlectValue}
                                    //defaultValue={{ value: 4, label: 'کردستان' }}

                                    options={masterData} />
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1"></label>
                                <input type="text" value={duty.title} className="form-control" name="title" onChange={handleChange} placeholder="عنوان" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group">
                                <label for="exampleInputEmail1"></label>
                                <input type="text"
                                    value={duty.dateTaskIsExecute}
                                    className="form-control"
                                    name="dateTaskIsExecute"
                                    onClick={showDatePicker}
                                    autocomplete="off"
                                    onChange={handleChange}
                                    placeholder="تاریخ انجام" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                                <PersianDatePicker showDatePicker={showDatePickerState} dateSelected={dateSelected} currentDate={currentDatePickerState} />

                            </div>

                            <div className="form-group">
                                <label></label>
                                <input type="number" value={duty.rate} className="form-control"
                                    name="rate" onChange={handleChange}
                                    placeholder="rate" />
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-group">
                                <label></label>
                                <textarea className="form-control" value={duty.description}
                                    name="description" rows={10} onChange={handleChange}
                                    placeholder="توضیحات" ></textarea>
                                {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                            </div>

                            <div className="form-check">
                                <input type="checkbox" name="isExecuted" checked={duty.isExecuted} value={(duty.isExecuted ? true : false)} onChange={handleChange} />
                                <label for="exampleCheck1">انجام شده</label>
                            </div>




                            <button type="submit" className="btn btn-primary">ارسال</button>
                        </Form>

                    </Col>
                </Row>

            </Container>

        </>
    )

}
export default FormDutyCreate