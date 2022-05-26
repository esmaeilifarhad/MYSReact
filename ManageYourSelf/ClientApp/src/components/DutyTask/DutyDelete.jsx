import React, { useState } from 'react'
import { useEffect, useContext } from 'react';
import { PublicApi } from '../../Api/PublicApi';
import DutyContext from './DutyContext';
import { useQueryClient } from 'react-query';
import MainContext from '../Common/MainContext';
const DutyDelete = ({ id }) => {
    const context = useContext(DutyContext);
    const context2 = useContext(MainContext);
    const queryClient = useQueryClient()

    const [duty, setDuty] = useState({})

    const deleteMethod = async (id) => {

        const data = await PublicApi('delete', `Duty/_Delete${id}`)
        queryClient.invalidateQueries('GetDutyAllApi')
        queryClient.invalidateQueries('GetDutyAllRecord')
        context.closeModalMethod()
        context2.closeModalMethod()
    }
    useEffect(async () => {

        const data = await PublicApi('get', `Duty/_Get${id}`)
        // const data = await PublicApi('delete', `Duty/_Delete${id}`)
        setDuty(data)

        console.log(data)
    }, [])
    return (
        <>
            <p > آیا رکورد <span style={{ color: 'red' }}>{duty.title}</span>  حذف انجام شود ؟ </p>
            <button className='btn btn-danger' onClick={() => deleteMethod(id)}>بلی</button><span> </span>
            <button className='btn btn-success' onClick={() => { context.closeModalMethod() }}>خیر</button>
        </>
    )
}
export default DutyDelete