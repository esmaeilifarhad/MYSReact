import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import {  ListMenuPagination, useQueryMenuList } from "../../ReactQuery";
import { ListMenu } from "../../ReactQuery/MenuQuery";
import DutyCreateUpdateModal from "../Duty/DutyCreateUpdateModal";
import Pagination from './../Common/Pagination';
import MenuCreateUpdateModal from "./MenuCreateUpdateModal";

const MenuList = () => {
    //const [totalCount, setTotalCount] = useState(0)
    const [perPageCount, setperPageCount] = useState(5)
    const [currentPage, setCurrentPage] = useState(1)

    const [id, setId] = useState(0)
    const [modalShow, setModalShow] = React.useState(false);

    //--------------------------

    var { data = [], isLoading } = ListMenu((currentPage - 1), perPageCount)


    var totalCount = data.totalCount

    var menu = []
    //var { data = [], isLoading } = useQueryMenuList()
    if (data.data != undefined)
        menu = data.data

    //شماره بندی ردیف ها
    const showNumberRecords = (page) => {
       
        return (((currentPage - 1) * perPageCount) + page + 1)
    }

    const paginateMethod = (pageNumber) => {

        setCurrentPage(pageNumber + 1)
    }

    const PerPageChangeMethod = (perPage) => {

        setCurrentPage(1)
        setperPageCount(parseInt(perPage))

    }

    const newFormModal = () => {

    }

    return (
        <>

            <MenuCreateUpdateModal
                id={id}

                show={modalShow}
                onHide={() => setModalShow(false)}
            />

            <NavLink to="/CreateAndEditMenuForm/0">
                <button className="newButton" >جدید</button>
            </NavLink>

            <Button variant="primary" onClick={() => { setModalShow(true); setId(0) }}>
                جدید
            </Button>

            <input type={"text"} placeholder={"جستجو"} />
            <table className="table table-hover table-bordered table-striped table-dark">
                <thead>

                    <tr>
                        <th>#</th>
                        <th>id</th>
                        <th>Title</th>
                        <th>Order</th>

                        <th colSpan="2" style={{ textAlign: "center" }}>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        menu.map((item, index) => (
                            <tr>

                                <td style={{ color: "red" }}>{showNumberRecords(index)}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.order}</td>
                                <td>
                                    <NavLink
                                        to={{
                                            pathname: `/CreateAndEditMenuForm/${item.id}`,
                                            query: {
                                                title: item.title,
                                            }

                                        }}
                                    >
                                        <button className="editButton" >ویرایش</button>
                                    </NavLink>


                                    <button className='editButton' onClick={() => {
                                        setModalShow(true);
                                        setId(item.id)

                                    }}>
                                        ویرایش
                                    </button>
                                    
                                </td>
                                <td>
                                    <NavLink to={{
                                        pathname: `/DeleteMenu/${item.id}`,
                                        query: {
                                            id: item.id,
                                            title: item.title,
                                            test: "جهت تست و ارسال 2 دیتا برای"
                                        }
                                    }}>
                                        <button className="deleteButton" >حذف</button>
                                    </NavLink>

                                </td>
                            </tr>

                        )
                        )
                    }
                </tbody>
            </table>

            <Pagination total={totalCount} currentPage={currentPage} perPage={perPageCount} onPageChange={paginateMethod} onPerPageChange={PerPageChangeMethod} />


        </>
    )
}
export default MenuList