import React, { useContext, useEffect, useState } from "react";
import { Modal, Row, Col, Container, Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useQueryClient } from "react-query";
import { PublicApi } from "../../Api/PublicApi";
import MainContext from "../Common/MainContext";



const RepeatTaskCreateEdit = ({ id }) => {
    const context = useContext(MainContext);
    const [objData, setObjData] = useState({})
    const queryClient = useQueryClient()

    useEffect(async () => {
        if (id > 0) {

            let data = await PublicApi("get", `RepeatTask/_Get${id}`)

            debugger
            setObjData(data)
        }
        else {
            // setDuty()
        }

    }, [])

    function handleChange(e) {

        var obj = { ...objData }
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
                break;

            case "select-one":
                obj[e.target.name] = e.target.value
                break;

            default:
                break;
        }
        //console.log(obj)
        setObjData(obj)

    }

    const handleSubmit = async event => {
        event.preventDefault();



        if (id > 0) {
            let { data } = await PublicApi("post", "RepeatTask/CreateUpdate", objData)
        }
        else {
            let { data } = await PublicApi("post", "RepeatTask/CreateUpdate", objData)
        }
        queryClient.invalidateQueries('GetListRepeatTask')
        context.closeModalMethod()
    }


    return (
        <>
            <Form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label></label>
                    <input type="text"
                        value={objData.title}
                        className="form-control" name="title"
                        onChange={handleChange} placeholder="عنوان" />
                </div>


                <div className="form-group">
                    <label></label>
                    <select className="form-control" onChange={handleChange} name="TypeTask">
                        <option selected={objData.typeTask == 0} value={0}>روزانه</option>
                        <option selected={objData.typeTask == 1} value={1}>هفتگی</option>
                        <option selected={objData.typeTask == 2} value={2}>ماهانه</option>
                        <option value={3}>سالانه</option>
                    </select>
                </div>

                <div className="form-group">
                    <label></label>
                    <textarea className="form-control"
                        name="description"
                        rows={10}
                        onChange={handleChange}
                        value={objData.description}
                        placeholder="توضیحات" ></textarea>
                </div>


                <button type="submit" className="btn btn-primary">ارسال</button>
            </Form>
        </>
    )

}
export default RepeatTaskCreateEdit