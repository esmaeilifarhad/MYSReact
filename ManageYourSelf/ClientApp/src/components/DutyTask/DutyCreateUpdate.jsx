import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import { PublicApi } from '../../Api/PublicApi';
import DutyContext from './DutyContext';
import Select from 'react-select';
import { useEffect } from 'react';
import { useMutation } from 'react-query';
import { useQueryClient } from 'react-query';
import { AllDateNeedExist, convertDateToslashless, Utl_Date_FormatDate } from '../../Helper/DatetimeUtility';
import PersianDatePicker from '../Common/PersianDatePicker';
import MainContext from '../Common/MainContext';


const DutyCreateUpdate = ({ id, date }) => {

    const context = useContext(DutyContext);
    const context2 = useContext(MainContext);
    const [masterData, setMasterData] = useState([])
    const [duty, setDuty] = useState({})
    const [showDatePickerState, setShowDatePickerState] = useState(false)
    const [currentDatePickerState, setcurrentShowDatePickerState] = useState("")
    const [dateTransfer, setDateTransfer] = useState("")


    const queryClient = useQueryClient()


    useEffect(async () => {
        if (id > 0) {

            let data = await PublicApi("get", `Duty/_Get${id}`)

            data.dateTaskIsExecute = Utl_Date_FormatDate(data.dateTaskIsExecute)

            setDateTransfer(data.dateTaskIsExecute)
            setDuty(data)
        }
        else {
            if (date == undefined) {
                setDateTransfer(AllDateNeedExist().currentShamsyDateBySlash)
                setDuty({ dateTaskIsExecute: AllDateNeedExist().currentShamsyDateBySlash, rate: 1 })
            }
            else {
                // var obj = { ...duty }
                // debugger
                //obj["dateTaskIsExecute"] = convertDateToslashless(date)
                setDuty({ dateTaskIsExecute: convertDateToslashless(date), rate: 1 })
                setDateTransfer(date)
            }


        }
        getMasterData()
    }, [])





    const handleSubmit = async event => {
        event.preventDefault();

        duty["dateTaskIsExecute"] = convertDateToslashless(duty["dateTaskIsExecute"])

        if (id > 0) {
            let { data } = await PublicApi("post", "Duty/UpdateDuty", duty)
        }
        else {
            let { data } = await PublicApi("post", "Duty/_Create", duty)
        }

        queryClient.invalidateQueries('GetDutyAllApi')
        queryClient.invalidateQueries('GetDutyAllRecord')
        context.closeModalMethod()
        context2.closeModalMethod()
    }
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
        console.log(obj)
        setDuty(obj)

    }
    const getMasterData = async () => {
        let { data } = await PublicApi("post", "MasterData/GetAllMasterData")
        setMasterData(data.filter(q => q.category.title == "پروژه"))
    }
    const getSlectValue = (e) => {
        var obj = { ...duty }
        obj["masterDataId"] = e.value
        setDuty(obj)
    }
    const showDatePicker = (e) => {

        var dateSelect = e.target.value
        setcurrentShowDatePickerState(dateSelect)
        setShowDatePickerState(~showDatePickerState)


    }
    const dateSelected = (param) => {

        var obj = { ...duty } //duty
        obj["dateTaskIsExecute"] = param
        setDuty(obj)
        setDateTransfer(param)
        setShowDatePickerState(false)

    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <div className="form-group">
                    <Select
                        value={masterData.find(x =>
                            x.value ==
                            duty.masterDataId)}
                        // defaultValue={masterData[3]}
                        onChange={getSlectValue}
                        options={masterData} />
                </div>


                <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="text"
                        value={duty.title}
                        className="form-control" name="title"
                        onChange={handleChange} placeholder="عنوان" />
                </div>

                <div className="form-group">
                    <label for="exampleInputEmail1"></label>
                    <input type="text"
                        className="form-control"
                        name="dateTaskIsExecute"
                        // value={duty.dateTaskIsExecute}
                        value={dateTransfer}
                        onClick={showDatePicker}
                        autocomplete="off"
                        onChange={handleChange}
                        placeholder="تاریخ انجام" />
                    <PersianDatePicker showDatePicker={showDatePickerState}
                        dateSelected={dateSelected} currentDate={dateTransfer} />
                </div>

                <div className="form-group">
                    <label></label>
                    <input type="number" className="form-control"
                        name="rate" onChange={handleChange}
                        value={duty.rate}
                        placeholder="rate" />
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div className="form-group">
                    <label></label>
                    <textarea className="form-control"
                        name="description"
                        rows={10}
                        onChange={handleChange}
                        value={duty.description}
                        placeholder="توضیحات" ></textarea>
                    {/* <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small> */}
                </div>

                <div className="form-check">
                    <input type="checkbox" name="isExecuted" onChange={handleChange} />
                    <label for="exampleCheck1">انجام شده</label>
                </div>
                <button type="submit" className="btn btn-primary">ارسال</button>
            </Form>

        </>
    )
}
export default DutyCreateUpdate