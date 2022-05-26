import React, { useContext, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { GetDutyAllApi, GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import { calDayOfWeek, formatDate, todayShamsy8char } from '../../Helper/DatetimeUtility';
import DutyContext from './DutyContext';

const DutyNotExecutedYesterday = ({ data }) => {
    const context = useContext(DutyContext);


    //const queryClient = useQueryClient()

    // const mutation = useMutation(UpdateDutyApi, {
    //     onSuccess: () => {

    //         queryClient.invalidateQueries('GetDutyAllApi')
    //     }
    // })

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

    function getcheckboxes() {

        //  var node_list = document.getElementsByTagName('input');
        var node_list = document.getElementsByName('chkDutyNotExecutedYesterday');
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


    if (data.length == 0) {
        return null
    }

    return (
        <div style={{ backgroundImage: " linear-gradient(30deg, #aeb2b6, white)" }}>
            <p>وظایف انجام نشده گذشته</p>
             {/* {context.checkedDuty.map((item, index) => (
                <p>{index + 1} <span> - </span> {item}</p>
            ))}  */}
            <div className="table-responsive">
                <table className='table table-bordered table-striped '>
                    <tr>
                        <th>#</th>
                        <th><input type="checkbox" onChange={(e) => { toggle(e) }}/></th>
                        <th>Rate Change</th>
                        <th>عنوان</th>
                    </tr>
                    {
                        data.map((item, index) => (
                            <tr key={item.id}>
                                <td style={{ textAlign: "center" }}>{(index + 1)}</td>
                                <td style={{ textAlign: "center" }}>
                                    <input type='checkbox' value={item.id} onChange={handleChangeData} name='chkDutyNotExecutedYesterday' /></td>
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
export default DutyNotExecutedYesterday