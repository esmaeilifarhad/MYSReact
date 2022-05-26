import React, { useContext, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';
import DutyContext from './DutyContext';
import ManageDutyControl from './ManageDutyControl';
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const DutyNotExecutedToday = ({ data }) => {
    const context = useContext(DutyContext);
    //-------------------------------------
    const queryClient = useQueryClient()
    const mutation = useMutation(UpdateDutyApi, {
        onSuccess: () => {

            queryClient.invalidateQueries('GetDutyAllApi')
        }
    })

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

    function getcheckboxes() {

      //  var node_list = document.getElementsByTagName('input');
        var node_list = document.getElementsByName('chkDutyNotExecutedToday');
        var checkboxes = [];
        for (var i = 0; i < node_list.length; i++) {
            var node = node_list[i];
            if (node.getAttribute('type') == 'checkbox') {
                checkboxes.push(node);
            }
        }
        return checkboxes;
    }
    function toggle(e) {
        const { value, checked } = e.target;

        let checkboxes = [];
        checkboxes = getcheckboxes();
        let arr = [...context.checkedDuty]
        for (var i = 0; i < checkboxes.length; i < i++) {
            
            checkboxes[i].checked = checked;


            if (checked) {
                arr.push(checkboxes[i].value)
                context.FillCheckedDuty(arr)
            }
            else {
                let arr2 = []//arr.filter(x => x != checkboxes[i].value)
                context.FillCheckedDuty(arr2)
            }

        }
        
    }


    const changeRate = (rate, id) => {
        if (rate < 1) return
        if (rate > 5) return

        mutation.mutate({ id: id, rate: rate.toString() })
    }
    if (data.length == 0) {
        return null
    }
    const colorRate = (rate) => {

        rate = parseInt(rate)
        switch (rate) {
            case 1: return { color: "red" }
            case 2: return { color: "orange" }
            case 3: return { color: "black" }
            case 4: return { color: "blue" }
            case 5: return { color: "green" }
            default:
                break;
        }
    }
    return (<>

        
        <div className="table-responsive">
            {/* <button className="newButton" onClick={() => { context.openModalMethod('create'); }}>
                جدید
            </button> */}
            <span>وظایف انجام نشده امروز</span>
            <span> </span>
            <span style={{ backgroundColor: "gray", padding:"0px 5px 0px 5px",color:"white"}}>{formatDate(data[0].dateTaskIsExecute)}  {calDayOfWeek(data[0].dateTaskIsExecute)}</span>
            <span>   </span>
          
            <table className='table table-bordered table-striped '>
                <tr >
                    <th>#</th>
                    <th><input type="checkbox" onChange={(e) => { toggle(e) }} /></th>
                    <th>Rate Change</th>
                    <th>Rate</th>
                    <th>عنوان</th>
                    {/* <th>تاریخ</th> */}
                    <th colSpan={2}>عملیات</th>
                </tr>
                {
                    data.map((item, index) => (
                        <tr style={colorRate(item.rate)} key={item.id}>
                            <td style={{ textAlign: "center" }}>{(index + 1)}</td>
                            <td style={{ textAlign: "center" }}>
                                <input type='checkbox'
                                    onChange={handleChangeData}
                                    value={item.id}

                                    // checked={item.isExecuted}
                                    name='chkDutyNotExecutedToday' />
                            </td>
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
                            {/* <td style={{ textAlign: "center" }}>{formatDate(item.dateTaskIsExecute)}  {calDayOfWeek(item.dateTaskIsExecute)}</td> */}
                            <td><button className="editButton" onClick={() => { context.openModalMethod('update', item.id); }} >ویرایش</button></td>
                            <td><button className="deleteButton" onClick={() => { context.openModalMethod('delete',item.id); }}>حذف</button></td>
                        </tr>
                    )
                    )
                }
            </table>
        </div>


    </>)
}
export default DutyNotExecutedToday