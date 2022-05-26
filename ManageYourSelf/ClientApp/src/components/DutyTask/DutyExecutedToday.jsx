import React, { useState, useContext } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';
import DutyContext from './DutyContext';

const DutyExecutedToday = ({ data }) => {

    const context = useContext(DutyContext);
    const queryClient = useQueryClient()

    const mutation = useMutation(UpdateDutyApi, {
        onSuccess: () => {

            queryClient.invalidateQueries('GetDutyAllApi')
        }
    })

    const changeRate = (rate, id) => {
        if (rate < 1) return
        if (rate > 5) return

        mutation.mutate({ id: id, rate: rate.toString() })
    }

    // const handleChangeData = (e) => {
        
    //     const { value, checked } = e.target;

    //     mutation.mutate({ id: value, isExecuted: checked })
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
    }

    const handleChangeAll = (e) => {
        const { value, checked } = e.target;

    }
    if (data.length == 0) {
        return null
    }

    return (<>
        <span>وظایف انجام شده امروز : </span>
        <span> </span>
        <span style={{ backgroundColor: "gray", padding: "0px 5px 0px 5px", color: "white" }}>{formatDate(data[0].dateTaskIsExecute)}  {calDayOfWeek(data[0].dateTaskIsExecute)}</span>
        <span>   </span>
        <div className="table-responsive">
            <table className='table table-bordered table-striped '>
                <tr>
                    <th>#</th>
                    <th><input type="checkbox" onChange={handleChangeAll} /></th>
                    <th>Rate Change</th>
                    <th>Rate</th>
                    <th>عنوان</th>
                </tr>
                {
                    data.map((item, index) => (
                        <tr key={item.id}>
                            <td style={{ textAlign: "center" }}>{(index + 1)}</td>
                            <td style={{ textAlign: "center" }}><input type='checkbox' value={item.id}
                                onChange={handleChangeData}
                                 name='chkDuty' /></td>
                            <td style={{ textAlign: "center" }}>
                                <button
                                    onClick={() => changeRate((parseInt(item.rate) + 1), item.id)}
                                    style={{ backgroundColor: "green" }}
                                    value="درست"
                                >
                                    <i className="fa fa-arrow-up"></i>
                                </button>

                                <button
                                    onClick={() => changeRate((parseInt(item.rate) - 1), item.id)}
                                    style={{ backgroundColor: "red" }}
                                    value="غلط" >
                                    <i className="fa fa-arrow-down"></i></button>


                            </td>
                            <td style={{ textAlign: "center" }}>{item.rate}</td>
                            <td>{item.title}</td>
                            {/* <td>{formatDate(item.dateTaskIsExecute)}  {calDayOfWeek(item.dateTaskIsExecute)}</td> */}

                        </tr>
                    )
                    )
                }
            </table>
        </div>


    </>)
}
export default DutyExecutedToday