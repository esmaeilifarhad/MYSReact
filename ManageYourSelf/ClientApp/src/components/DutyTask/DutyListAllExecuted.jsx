import React, { useContext, useState, useEffect } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi } from '../../Api/DutyApi'
import { PublicApi } from '../../Api/PublicApi'
import { AllDateNeedExist, formatDate } from '../../Helper/DatetimeUtility'
import MainContext from '../Common/MainContext'
import Pagination from '../Common/Pagination'
import DutyCreateUpdate from './DutyCreateUpdate'
import DutyDelete from './DutyDelete'


let perPageCount = 10
let currentPage = 0
let search = ""
const DutyListAllExecuted = () => {

    // const [perPageCount, setperPageCount] = useState(5)
    // const [currentPage, setCurrentPage] = useState(1)

    const context = useContext(MainContext);

    const queryClient = useQueryClient()

    let today = AllDateNeedExist().currentShamsyDateBySlash
    useEffect(() => {



        console.log(AllDateNeedExist())
    }, [])
    //---------------------
    let data = []
    let totalCount = 0


    const mutation = useMutation(async () => await PublicApi("get", `Duty/GetDuty?skip=${currentPage}&&take=${perPageCount}&&search=${search}`), {
        onSuccess: () => {

            queryClient.invalidateQueries('GetDutyAllRecord')
        }
    })

    var res = useQuery(["GetDutyAllRecord"], async () => await PublicApi("get", `Duty/GetDuty?skip=${currentPage}&&take=${perPageCount}&&search=${search}`))

    if (res.data != undefined) {

        data = res.data.data.data
        totalCount = res.data.data.totalCount

    }

    //شماره بندی ردیف ها
    const showNumberRecords = (page) => {

        return (((currentPage) * perPageCount) + page + 1)
    }
    //شماره های هر صفحه
    const paginateMethod = (pageNumber) => {


        currentPage = (pageNumber)
        mutation.mutate()
    }
    //تغییر نمایش تعداد رکورد
    const PerPageChangeMethod = (perPage) => {

        currentPage = 0
        perPageCount = parseInt(perPage)
        mutation.mutate()
    }
    //جستجو
    const searchDutyMethod = (str) => {

        currentPage = 0
        search = str
        mutation.mutate()

    }

    return (
        <>
            <div className="table-responsive">

                <button className="newButton" >جدید</button>
                <input type={"text"} placeholder={"جستجو"} onChange={(e) => { searchDutyMethod(e.currentTarget.value) }} />
                <table className="table table-hover table-bordered table-striped table-dark">
                    <thead>

                        <tr>
                            <th>#</th>

                            <th>عنوان</th>
                            <th>انجام شده</th>

                            <th>تاریخ</th>
                            <th colSpan="2" style={{ textAlign: "center" }}>عملیات</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={item.id}>
                                    <td style={{ color: "red", textAlign: "center" }}>{showNumberRecords(index)}</td>

                                    <td>{item.title}</td>
                                    <td style={{ textAlign: "center" }}>{(item.isExecuted) ? <span style={{ color: "green" }} className='fa fa-check'></span> : <span style={{ color: "red" }} className='fa fa-close'></span>}</td>

                                    <td style={{ textAlign: "center" }}>{formatDate(item.dateTaskIsExecute)}</td>
                                    <td style={{ textAlign: "center" }}><button className="editButton" onClick={() => { context.openModalMethod(<DutyCreateUpdate id={item.id} />) }} >ویرایش</button></td>
                                    <td style={{ textAlign: "center" }}><button className="deleteButton" onClick={() => {
                                        context.openModalMethod(<DutyDelete id={item.id} />);
                                    }}>حذف</button></td>
                                </tr>

                            )
                            )
                        }
                    </tbody>
                </table>
                <Pagination total={totalCount} currentPage={currentPage + 1} perPage={perPageCount} onPageChange={paginateMethod} onPerPageChange={PerPageChangeMethod} />
            </div>
   
        </>
    )

}

export default DutyListAllExecuted
