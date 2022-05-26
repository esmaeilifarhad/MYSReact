import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty } from '../../Api/DutyApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';
import DutyContext from './DutyContext';

const DutyNotExecutedFuture = ({ data }) => {
    const context = useContext(DutyContext);
    // let data = []
    // var res = useQuery(["GetDutyAllApi"], async () => await GetDutyAllApi())


    // if (res.data != undefined) {

    //     data = res.data.filter(x => x.isExecuted == false && x.dateTaskIsExecute > todayShamsy8char())

    // }

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

        //mutation.mutate({ id: value, isExecuted: checked })
    }

    if (data.length == 0) {
        return null
    }
    return (
        <div style={{ backgroundImage: " linear-gradient(30deg, #3ce898, white)" }}>
            <p>وظایف انجام نشده آینده</p>
            {/* {context.checkedDuty.map((item, index) => (
                <p>{index + 1} <span> - </span> {item}</p>
            ))} */}
            <div className="table-responsive">
                <table className='table table-bordered table-striped '>
                    <tr>
                        <th>#</th>
                        <th><input type="checkbox" /></th>
                        <th>Rate Change</th>
                        <th>عنوان</th>
                    </tr>
                    {
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td style={{ textAlign: "center" }}>{(index + 1)}</td>
                                <td style={{ textAlign: "center" }}>
                                    <input type='checkbox' value={item.id} autoComplete={false} onChange={handleChangeData}
                                     /*checked={item.isExecuted}*/ name='chkDuty' /></td>
                                <td style={{ textAlign: "center" }}>
                                    <button style={{ backgroundColor: "green" }}
                                        value="درست"
                                    >
                                        <i className="fa fa-arrow-up"></i>
                                    </button>

                                    <button style={{ backgroundColor: "red" }}
                                        value="غلط" >
                                        <i className="fa fa-arrow-down"></i></button>


                                </td>
                                <td>{item.title}</td>
                                <td>{formatDate(item.dateTaskIsExecute)}  {calDayOfWeek(item.dateTaskIsExecute)}</td>

                            </tr>
                        )
                        )
                    }
                </table>
            </div>


        </div>)
}
export default DutyNotExecutedFuture