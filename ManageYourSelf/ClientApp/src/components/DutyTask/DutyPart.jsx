import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Button } from 'react-bootstrap';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { GetDutyAllApi, UpdateDutyApi } from '../../Api/DutyApi';
import { PublicApi } from '../../Api/PublicApi';
import { todayShamsy8char } from '../../Helper/DatetimeUtility';
import MainContext from '../Common/MainContext';
import DutyList from '../Duty/DutyList';
import ListRepeatTask from '../RepeatTask/ListRepeatTask';
import RepeatTaskCreateEdit from '../RepeatTask/RepeatTaskCreateEdit';
import DutyContext from './DutyContext';
import DutyDivideByMasterData from './DutyDivideByMasterData';
import DutyExecutedToday from './DutyExecutedToday';
import DutyListAllExecuted from './DutyListAllExecuted';
import DutyModal from './DutyModal';
import DutyNotExecutedFuture from './DutyNotExecutedFuture';
import DutyNotExecutedToday from './DutyNotexecutedToday';
import DutyNotExecutedYesterday from './DutyNotExecutedYesterday';
import DutyRateToday from './DutyRateToday';
import ManageDutyControl from './ManageDutyControl';


const DutyPart = () => {
    useEffect(async () => {
    }, [type, refresh])

    const [checkedDuty, setCheckedDuty] = useState([])
    const [modalShow, setModalShow] = React.useState(false);
    const [id, setId] = useState(0)
    const [type, setType] = useState("")
    const [refresh, setRefresh] = useState(false)

    const context = useContext(MainContext);

    const queryClient = useQueryClient()


    const FillCheckedDuty = (data) => {
        setCheckedDuty(data)
    }
    // let type = ""
    const openModalMethod = (type, id) => {
        setType(type)
        setId(id)

        setModalShow(true)
    }
    const closeModalMethod = () => {
        setModalShow(false)

    }
    const mutation = useMutation(UpdateDutyApi, {
        onSuccess: () => {

            queryClient.invalidateQueries('GetDutyAllApi')
            queryClient.invalidateQueries('GetDutyAllRecord')
            setCheckedDuty([])
        }
    })

    const UpdateDuty = (type, checkedArray, dateTaskIsExecute) => {

        mutation.mutate({ type: type, checkedArray: checkedArray, dateTaskIsExecute: dateTaskIsExecute })
        debugger

    }
    let data = []
    var res = useQuery(["GetDutyAllApi"], async () => await GetDutyAllApi())

    if (res.data != undefined) {

        data = res.data.data
    }


    //-------------------------------------------------
    let dataRepeatTask = []
    //PublicApi("post", "RepeatTask/_Create", objData)
    var res2 = useQuery(["GetListRepeatTask"], async () => await PublicApi("post", "RepeatTask/GetTasksAllType"))

    if (res2.data != undefined) {

        dataRepeatTask = res2.data.data


    }

    //------------------------------------------------
    const refreshList = (param) => {

        if (param == true) {
            setRefresh(~refresh)
        }
    }

    return (<>
        <DutyContext.Provider value={{
            checkedDuty: checkedDuty,
            modalShow: modalShow,
            openModalMethod: openModalMethod,
            closeModalMethod: closeModalMethod,
            FillCheckedDuty: FillCheckedDuty,
            UpdateDuty: UpdateDuty
        }}>
            <Row style={{ backgroundColor: "black" /*backgroundImage: " linear-gradient(30deg, black, white)"*/ }}>
                <Col md={12}>
                    <ManageDutyControl />
                    <DutyRateToday
                        data={data.filter(x => x.isExecuted == true && x.dateTaskIsExecute == todayShamsy8char())}
                    />
                </Col>
            </Row>
            <Row style={{ marginTop: "2px" }}>
                <Col md={6}>

                    <Row>
                        <Col md={12} >

                            <DutyNotExecutedToday
                                data={data.filter(x => x.isExecuted == false && x.dateTaskIsExecute == todayShamsy8char())}
                            />
                        </Col>
                    </Row>

                    <Row style={{ backgroundColor: "black" /*backgroundImage: " linear-gradient(30deg, black, white)"*/ }}>
                        <Col md={12}>
                            <ManageDutyControl />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} >

                            <DutyDivideByMasterData
                                data={data.filter(x => x.isExecuted == false && x.dateTaskIsExecute == todayShamsy8char())}
                            />
                        </Col>
                    </Row>
                </Col>


                <Col md={4}>
                    <Row>
                        <Col md={12}>
                            <DutyNotExecutedYesterday
                                data={data.filter(x => x.isExecuted == false && x.dateTaskIsExecute < todayShamsy8char())} />
                        </Col>
                    </Row>

                    <Row>
                        <Col md={12}>
                            <DutyExecutedToday
                                data={data.filter(x => x.isExecuted == true && x.dateTaskIsExecute == todayShamsy8char())} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <DutyNotExecutedFuture
                                data={data.filter(x => x.isExecuted == false && x.dateTaskIsExecute > todayShamsy8char())}
                            />
                        </Col>
                    </Row>


                </Col>
                <Col md={2}>
                    <>
                        <div style={{ backgroundColor: "gray", borderRadius: "5px" }}>
                            <button className='newButton' onClick={() => {
                                context.openModalMethod(<RepeatTaskCreateEdit refreshList={refreshList} />);
                            }}>جدید</button>

                        </div>
                        <ListRepeatTask typeTask={0} data={dataRepeatTask.filter(x => x.typeTask == 0)} />
                        <ListRepeatTask typeTask={1} data={dataRepeatTask.filter(x => x.typeTask == 1)} />
                        <ListRepeatTask typeTask={2} data={dataRepeatTask.filter(x => x.typeTask == 2)} />
                    </>
                </Col>

            </Row>
            <Row>
                <Col md={12}>
                    <DutyListAllExecuted />
                </Col>
            </Row>
            <DutyModal
                id={id}
                type={type}
                show={modalShow}

                onHide={() => setModalShow(false)}
            />


        </DutyContext.Provider>
    </>)
}
export default DutyPart