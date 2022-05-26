import React, { useContext, useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useQuery, useQueryClient } from "react-query";
import { PublicApi } from "../../Api/PublicApi";
import MainContext from "../Common/MainContext";
import Spinner from 'react-bootstrap/Spinner'

const RepeatTaskDelete = ({ id, refreshList }) => {
    const context = useContext(MainContext);
    const [obj, setObj] = useState({})
    const queryClient = useQueryClient()


    useEffect(async () => {
        const data = await PublicApi('get', `RepeatTask/_Get${id}`)
        setObj(data)
    }, [])

    const deleteMethod = async (id) => {

        const data = await PublicApi('delete', `RepeatTask/_Delete${id}`)
        // queryClient.invalidateQueries('GetDutyAllApi')
        queryClient.invalidateQueries('GetListRepeatTask')
        context.closeModalMethod()
    }

    return (
        <>


            <Tabs
            >
                <Tab eventKey="home" title="Home">
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>

                    <p > آیا رکورد <span style={{ color: 'red' }}>{obj.title}</span>  حذف انجام شود ؟ </p>
                    <button className='btn btn-danger' onClick={() => deleteMethod(id)}>بلی</button><span> </span>
                    <button className='btn btn-success' onClick={() => { context.closeModalMethod() }}>خیر</button>
                </Tab>
                <Tab eventKey="profile" title="Profile">
                    <p>fg2</p>
                </Tab>
                <Tab eventKey="contact" title="Contact" >
                    <p>fg3</p>
                </Tab>
            </Tabs>
        </>
    )
}
export default RepeatTaskDelete