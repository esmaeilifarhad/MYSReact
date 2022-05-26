import React, { useContext, useState } from 'react'
import { useEffect } from 'react';
import { GetDutyExecutedTodayApi, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import DutyContext from './DutyContext';

const GetDutyExecutedToday = ({ setMainRefresh, mainRefresh }) => {
    const [listData, setListData] = useState([])
    const [refresh, setRefresh] = useState(false)

    const context = useContext(DutyContext);

    useEffect(async () => {
        var data = await GetDutyExecutedTodayApi()
        setListData(data.data)
    }, [refresh, mainRefresh])
    const updateRecord = async (obj) => {
        var data = await UpdateDutyApi(obj)
        setRefresh(~refresh)
        setMainRefresh(~mainRefresh)
    }
    const getCheckBoxesChecked = async (e) => {
        const { value, checked } = e.target;
        var createArray = []
        for (let index = 0; index < listData.length; index++) {
            const element = listData[index];

            if (element.id == value) {
                element.isExecuted = checked

                updateRecord(element)
            }
            createArray.push(element)
        }

        setListData(createArray)

    }

    const changeData=()=>{
        context.setMyData("Rahim")
    }
    return (<>
        <p><span>Value : </span> <span>{context.myData}</span></p>
<button onClick={changeData}>تغییر</button>
        <table className='table table-bordered table-striped '>
            <tr>
                <th>#</th>
                <th>عملیات</th>
                <th>عنوان</th>
            </tr>
            {
                listData.map((item, index) => (
                    <tr>
                        <td>{(index + 1)}</td>
                        <td><input type='checkbox' value={item.id} checked={item.isExecuted} name='chkDuty' onChange={getCheckBoxesChecked} /></td>
                        <td>بالا و پایین</td>
                        <td>{item.title}</td>
                    </tr>
                )
                )
            }
        </table>
    </>)
}
export default GetDutyExecutedToday