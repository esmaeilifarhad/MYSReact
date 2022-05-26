import React, { useContext, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import { InsertToDetailApi } from '../../Api/RepeatTaskApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';
import DutyContext from './DutyContext';
import ManageDutyControl from './ManageDutyControl';
import { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';

const ShowCol = ({ data, rowIndex, header }) => {
    const queryClient = useQueryClient()
    const context = useContext(DutyContext);

    const mutation = useMutation(UpdateDutyApi, {
        onSuccess: () => {

            queryClient.invalidateQueries('GetDutyAllApi')
        }
    })

    if (rowIndex >= header.length) return null

   
  


    const changeRate = (rate, id) => {
        if (rate < 1) return
        if (rate > 5) return

        mutation.mutate({ id: id, rate: rate.toString() })
    }

    const handleChangeData = (e) => {

        const { value, checked } = e.target;
        let arr = [...context.checkedDuty]
        if (checked) {
            arr.push(value)
            context.FillCheckedDuty(arr)
        }
        else {
            let arr2 = arr.filter(x => x != value)
            context.FillCheckedDuty(arr2)
        }
    }

    data = data.filter(x => x.masterData.id == header[rowIndex].id)
    let rows = [<p style={{ color: "red" }}>{header[rowIndex].title}</p>]
    for (let index = 0; index < data.length; index++) {

        rows.push(
            <p style={{ borderStyle:"inset", padding: "5px" }} key={data[index].id}>
                <span><input type='checkbox'
                    onChange={handleChangeData}
                    value={data[index].id}
                    name='chkDutyDivideByMasterData' /></span>
                    <span> </span>
                <span>{index + 1}</span>
                <span> - </span>
                <span >{data[index].title}</span>
                <span> ( </span>
                <span style={{color:"red"}}>{data[index].rate}</span>
                <span> ) </span>

                <span style={{ whiteSpace: "nowrap" }}> <button
                    onClick={() => changeRate((parseInt(data[index].rate) + 1), data[index].id)}
                    style={{ backgroundColor: "green" }}
                    value="درست"
                >
                    <i className="fa fa-arrow-up"></i>
                </button>

                    <button
                        onClick={() => changeRate((parseInt(data[index].rate) - 1), data[index].id)}
                        style={{ backgroundColor: "red" }}
                        value="غلط" >
                        <i className="fa fa-arrow-down"></i></button>

                </span>
                <span><button className="editButton" onClick={() => { context.openModalMethod('update', data[index].id); }} >ویرایش</button></span>
                <span><button className="deleteButton" onClick={() => { context.openModalMethod('delete', data[index].id); }}>حذف</button></span>
            </p>
        )

    }

    return (
        <>
            {rows}
        </>
    )
}

const ShowData = ({ data }) => {
    let rows = []
    var header = []
    // console.log(data)

    for (let index = 0; index < data.length; index++) {
        let id = data[index].masterData.id
        let title = data[index].masterData.title

        if (header.find(x => x.id == id) == undefined) {
            header.push({ title: title, id: id })
        }
        else {

        }

        //rows.push(<Row>{data[index].masterData.title}</Row>)
    }

    const colStyle = {
        border: "1px dotted black",
        padding: "15px"
    }
    for (let i = 0; i < header.length; i++) {

        rows.push(
            <Row>
                <Col style={colStyle} md={4}><ShowCol rowIndex={i} header={header} data={data} /></Col>
                <Col style={colStyle} md={4}><ShowCol rowIndex={i + 1} header={header} data={data} /></Col>
                <Col style={colStyle} md={4}><ShowCol rowIndex={i + 2} header={header} data={data} /></Col>
            </Row>
        )

        i += 2

    }
    // const response=(res)=>{
    //     debugger
    // }
    //     for (let i = 0; i < header.length; i++) {

    //             rows.push(<Row><ShowCol header={header} response={response} data={data.filter(x => x.masterData.id == header[i].id)} /></Row>)
    //     }


    return (
        <>
            {rows}
        </>

    )
    // console.log(header)
}

const DutyDivideByMasterData = ({ data }) => {


    if (data.length == 0) return null

    return (
        <>
            <ShowData data={data} />
        </>
    )
}
export default DutyDivideByMasterData