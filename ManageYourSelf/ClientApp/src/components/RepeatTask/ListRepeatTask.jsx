import React, { useContext, useState } from 'react'
import { useQuery, useMutation, queryCache, QueryClient, useQueryClient } from "react-query"
import { RepeatTaskApi, InsertToDetailApi } from '../../Api/RepeatTaskApi'
import { useEffect } from 'react';
import MainContext from './../Common/MainContext';
import RepeatTaskDelete from './RepeatTaskDelete';
import RepeatTaskCreateEdit from './RepeatTaskCreateEdit';
import { PublicApi } from '../../Api/PublicApi';

const ListRepeatTask = ({ typeTask, data }) => {
    
    const [repeatTask, setRepeatTask] = useState([])
    const [refresh, setRefresh] = useState(false)

    const context = useContext(MainContext);
    const queryClient = useQueryClient()

    


    async function handleChange(e) {

        var objArray = []
        for (let index = 0; index < data.length; index++) {
            if (data[index].isExecuted) {

                objArray.push(data[index].id)
            }
        }

        if (e.target.checked)
            objArray.push(parseInt(e.target.value))
        else {

            objArray = objArray.filter(x => x !== parseInt(e.target.value))
        }

        await InsertToDetailApi({ ids: objArray, typeTask: typeTask })
        queryClient.invalidateQueries('GetListRepeatTask')
        //  setRefresh(~refresh)
    }



    const objStyle = {}
    switch (typeTask) {

        case 0:
            objStyle.backgroundImage = "linear-gradient(30deg, red, white)"
            break;
        case 1:
            objStyle.backgroundImage = "linear-gradient(30deg, orange, white)"
            break;
        case 2:
            objStyle.backgroundImage = "linear-gradient(30deg, green, white)"
            break;

        default:
            break;
    }


    return (
        <>
            <table className='table table-bordered table-striped' style={objStyle}>
                {
                    data.map((item, index) => (
                        <tr>
                            <td>
                                <span><input checked={item.isExecuted} value={item.id} onChange={handleChange} type="checkbox" /></span>
                                <span> </span>
                                <span>{item.title}</span>
                                <span style={{ cursor: "pointer" }} className='fa fa-edit' onClick={() => {
                                    context.openModalMethod(<RepeatTaskCreateEdit id={item.id} />);
                                }}></span>
                                <span style={{ cursor: "pointer" }} className='fa fa-remove' onClick={() => { context.openModalMethod(<RepeatTaskDelete id={item.id} />); }}></span>
                            </td>
                        </tr>
                    )
                    )
                }
            </table>

        </>
    )
}
export default ListRepeatTask