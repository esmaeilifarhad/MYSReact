
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { useDispatch } from 'react-redux';
import { formatDate } from "../../Helper/DatetimeUtility";
import { setCloseDialogModalAction, setShowDialogModalAction, setTagAction, setTitleAction } from "../../Toolkit/ModalSlice";
import Pagination from './../Common/Pagination';
import FormDutyCreate from './FormDutyCreate';
import FormDutyEdit from './FormDutyEdit';
import { getDuty } from './../../Api/DutyApi';
import { ListDuty } from "../../ReactQuery";
import RepeatTaskEdit from '../RepeatTask/RepeatTaskCreateEdit';
const DutyList = () => {

    const dispatch = useDispatch()

    // const handleShow = () => {
    //     dispatch(setShowDialogModalAction());

    // }


    const [Duty, setDuty] = useState([])
    const [searchDuty, setSearchDuty] = useState("")
    const [totalCount, setTotalCount] = useState(0)
    const [perPageCount, setperPageCount] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const [refresh, setRefresh] = useState(false)
    const [responseServer, setResponseServer] = useState("")


    useEffect(async () => {


        var res = await getDuty(0, perPageCount, searchDuty)

        setDuty(res.data.data)
        setTotalCount(res.data.totalCount)


    }, [perPageCount, refresh])
    //گرفتن جواب سرور از  کامپوننت فرزند
    const responseData = (response) => {

        setResponseServer(response.data)

        var tag = <p>{response.data}</p>;

        dispatch(setTagAction(tag));
        dispatch(setTitleAction(response.data));
        dispatch(setShowDialogModalAction());

    }
    //بعد از ثبت ویرایش کامپوننت پدر را رفرش میکنیم
    const refreshListAfterUpdate = (param) => {
        setCurrentPage(1)
        setRefresh(~refresh)
    }
    //فرم ویرایش
    const editDutyForm = (id) => {

        var tag = <FormDutyEdit ID={id} parentChange={refreshListAfterUpdate} responseData={responseData} />;
        dispatch(setTagAction(tag));
        dispatch(setTitleAction("فرم ویرایش تسک"));
        dispatch(setShowDialogModalAction());

    }
    const detailDutyForm = (id) => {
        var tag = <p>detail</p>;
        dispatch(setTagAction(tag));
        dispatch(setTitleAction("فرم جزئیات تسک"));
        dispatch(setShowDialogModalAction());

    }

    //با کلیک بر روی هر صفحه اطلاعات صفحه مربوطه نمایش میدهد
    const paginateMethod = (pageNumber) => {
        setCurrentPage(pageNumber + 1)
        axios({
            method: 'get',
            url: `https://localhost:44349/api/Duty/GetDuty?skip=${pageNumber}&take=${perPageCount}&search=${searchDuty}`,
            responseType: 'json'
        })
            .then(function (response) {
                debugger
                setDuty(response.data.data.data)

            });


    }
    const searchDutyMethod = (str) => {
        debugger
        setSearchDuty(str)
        axios({
            method: 'get',
            url: `https://localhost:44349/api/Duty/GetDuty?skip=${0}&take=${perPageCount}&search=${str}`,
            responseType: 'json'
        })
            .then(function (response) {
                setDuty(response.data.data)
                // setTotalCount(response.data.totalCount)
                totalCount = response.data.totalCount
            });

    }
    const PerPageChangeMethod = (perPage) => {
        setCurrentPage(1)
        setperPageCount(parseInt(perPage))

    }
    //شماره بندی ردیف ها
    const showNumberRecords = (page) => {

        return (((currentPage - 1) * perPageCount) + page + 1)
    }
    var tag = null
    const newFormModal = () => {
        tag = <FormDutyCreate parentChange={refreshListAfterUpdate} responseData={responseData} />
        dispatch(setTagAction(tag));
        dispatch(setTitleAction("فرم ایجاد تسک"));
        dispatch(setShowDialogModalAction());

    }

    return (
        <>
            <div className="table-responsive">

                <button className="newButton" onClick={newFormModal}>جدید</button>
                <input type={"text"} placeholder={"جستجو"} onChange={(e) => { searchDutyMethod(e.currentTarget.value) }} />
                <table className="table table-hover table-bordered table-striped table-dark">
                    <thead>

                        <tr>
                            <th>#</th>
                            <th>id</th>
                            <th>Title</th>
                            <th>isExecuted</th>
                            <th>masterDataId</th>
                            <th>dateTaskIsExecute</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Duty.map((item, index) => (
                                <tr>
                                    <td style={{ color: "red" }}>{showNumberRecords(index)}</td>
                                    <td>{item.id}</td>
                                    <td>{item.title}</td>
                                    <td>{(item.isExecuted) ? "true" : "false"}</td>
                                    <td>{item.masterDataId}</td>
                                    <td>{formatDate(item.dateTaskIsExecute)}</td>
                                    <td><button onClick={() => editDutyForm(item.id)} className="editButton" >ویرایش</button></td>
                                    <td><button className="deleteButton">حذف</button></td>
                                </tr>

                            )
                            )
                        }
                    </tbody>
                </table>
                <Pagination total={totalCount} currentPage={currentPage} perPage={perPageCount} onPageChange={paginateMethod} onPerPageChange={PerPageChangeMethod} />
            </div>


        </>
    )

}

export default DutyList