import React, { useState, useContext } from 'react'
import { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { GetDutyNotExecuted, UpdateDuty, UpdateDutyApi } from '../../Api/DutyApi';
import DutyCreateUpdateModal from './DutyCreateUpdateModal';
import DutyContext from './DutyContext';

const DutyNotExecuted = ({ setMainRefresh, mainRefresh }) => {
    const [listData, setListData] = useState([])
    const [id, setId] = useState(0)
    const [refresh, setRefresh] = useState(false)
    const [modalShow, setModalShow] = React.useState(false);

    const context = useContext(DutyContext);

    useEffect(async () => {
        var data = await GetDutyNotExecuted()

        setListData(data.data)


    }, [refresh, mainRefresh])
    const updateRecord = async (obj) => {
        var data = await UpdateDutyApi(obj)
        setRefresh(~refresh)
        setMainRefresh(~mainRefresh)
        //console.log(data)
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

    const changeData = () => {
        context.setMyData("Farhad")
    }

    return (<>

        <p><span>مقدار : </span> <span>{context.myData}</span></p>

        <button onClick={changeData}>تغییر</button>

        <Button variant="primary" onClick={() => { setModalShow(true); setId(0) }}>
            جدید
        </Button>

        <DutyCreateUpdateModal
            id={id}

            show={modalShow}
            onHide={() => setModalShow(false)}
        />

        <table className='table table-bordered table-striped '>
            <tr>
                <th >#</th>
                <th><input type="checkbox" /></th>
                <th>عملیات</th>
                <th>عنوان</th>
                <th colSpan={2}>عملیات</th>
            </tr>
            {
                listData.map((item, index) => (
                    <tr>
                        <td style={{ textAlign: 'center' }}>{(index + 1)}</td>
                        <td style={{ textAlign: 'center' }}><input type='checkbox' value={item.id} checked={item.isExecuted}
                            name='chkDuty'
                            onChange={getCheckBoxesChecked} /></td>
                        <td>
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
                        <td>
                            <button className='editButton' onClick={() => {
                                setModalShow(true);
                                setId(item.id)

                            }}>
                                ویرایش
                            </button>
                        </td>
                    </tr>
                )
                )
            }
        </table>
    </>)
}
export default DutyNotExecuted