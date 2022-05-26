import React, { useState, createContext } from 'react'
import { Row, Col } from 'react-bootstrap';
import ListRepeatTask from '../RepeatTask/ListRepeatTask';
import ListRepeatTaskManage from './../RepeatTask/ListRepeatTaskManage';
import DutyList from './DutyList';
import DutyNotExecuted from './DutyNotExecuted';
import GetDutyExecutedToday from './GetDutyExecutedToday';
import { useEffect } from 'react';
import DutyContext from './DutyContext';
import { GetDutyExecutedTodayApi } from '../../Api/DutyApi';
const MainDuty = () => {
    const [mainRefresh, setMainRefresh] = useState(false)
    const [myData, setMyData] = useState("first")

    useEffect(async () => {
    }, [mainRefresh])
    return (<>
        <DutyContext.Provider value={{ myData: myData, setMyData: setMyData }}>
            <Row>
                <Col md={3}>
                    <DutyNotExecuted mainRefresh={mainRefresh} setMainRefresh={setMainRefresh} />
                </Col>
                <Col md={3}>
                    <GetDutyExecutedToday mainRefresh={mainRefresh} setMainRefresh={setMainRefresh} />
                </Col>
                <Col md={2} >
                    <ListRepeatTask typeTask={0} />
                </Col>
                <Col md={2}>
                    <ListRepeatTask typeTask={1} />
                </Col>
                <Col md={2}>
                    <ListRepeatTask typeTask={2} />
                </Col>

            </Row>

            <Row>
                <Col md={12} >

                    <DutyList />
                </Col>
            </Row>
        </DutyContext.Provider>
    </>)
}
export default MainDuty