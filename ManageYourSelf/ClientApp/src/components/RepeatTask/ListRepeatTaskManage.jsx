import React, { useState } from 'react'
import { useQuery, useMutation, queryCache, QueryClient, useQueryClient } from "react-query"
import { ListRepeatTaskApi, ListRepeatTaskQuery } from '../../Api/RepeatTaskApi'
import Pagination from '../Common/Pagination'
import { useDispatch } from 'react-redux';
import { setShowDialogModalAction, setTagAction, setTitleAction } from '../../Toolkit/ModalSlice';
import RepeatTaskEdit from './RepeatTaskCreateEdit';
import { Button } from 'react-bootstrap';

const ListRepeatTaskManage = () => {

 
    const [modalShow, setModalShow] = useState(false);
    const [perPageCount, setperPageCount] = useState(10)
    const [currentPage, setCurrentPage] = useState(1)

    const queryClient = useQueryClient()

    let data2 = []
    let totalCount = 0


    var { data = [], isLoading } = ListRepeatTaskQuery({ skip: (currentPage - 1), take: perPageCount })
    if (data.data != undefined) {

        data2 = data.data.data
        console.log(data2)
        totalCount = data.data.totalCount
    }


    //شماره بندی ردیف ها
    const showNumberRecords = (page) => {

        return (((currentPage - 1) * perPageCount) + page + 1)
    }

    const paginateMethod = (pageNumber) => {

        setCurrentPage(pageNumber + 1)

        queryClient.invalidateQueries('ListRepeatTaskManage')

    }

    const PerPageChangeMethod = (perPage) => {

        setCurrentPage(1)
        setperPageCount(parseInt(perPage))

    }

    const typeTaskMethod = (typetask) => {
        let tag = ""
        switch (typetask) {
            case 0:
                tag = "روزانه"
                break;
            case 1:
                tag = "هفتگی"
                break;
            case 2:
                tag = "ماهانه"
                break;
            default:
                break;
        }
        return (
            <p>{tag}</p>
        )
    }

    //فرم ویرایش
    const RepeatTaskEdit = (id) => {
    //   <RepeatTaskEdit />;
     
    }

    //گرفتن جواب سرور از  کامپوننت فرزند
    const responseData = (response) => {

        // setResponseServer(response.data)

        // var tag = <p>{response.data}</p>;

        // dispatch(setTagAction(tag));
        // dispatch(setTitleAction(response.data));
        // dispatch(setShowDialogModalAction());

    }
    //بعد از ثبت ویرایش کامپوننت پدر را رفرش میکنیم
    const refreshListAfterUpdate = (param) => {
        // setCurrentPage(1)
        // setRefresh(~refresh)
    }
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Launch modal with grid
            </Button>

             {/* <RepeatTaskEdit show={modalShow} onHide={() => setModalShow(false)} />  */}

            <table className="table table-hover table-bordered table-striped">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>عنوان</th>
                        <th>نوع</th>
                        <th colSpan={2}>عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data2.map((item, index) => (
                            <tr>
                                <td style={{ color: "red" }}>{showNumberRecords(index)}</td>
                                <td>
                                    {item.title}

                                </td>
                                <td>
                                    {
                                        typeTaskMethod(item.typeTask)
                                    }
                                </td>

                                <td><button onClick={() => RepeatTaskEdit(item.id)} className="editButton" >ویرایش</button></td>
                                <td><button className="deleteButton">حذف</button></td>

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
export default ListRepeatTaskManage