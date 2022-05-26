import React, { useState } from 'react'
import { useQuery, useMutation, queryCache, QueryClient, useQueryClient } from "react-query"
import { RepeatTaskApi, InsertToDetailApi } from '../../Api/RepeatTaskApi'

const ListRepeatTask = ({ typeTask}) => {

    const [task, setTask] = useState([])
    const [duty, setDuty] = useState({})

    const queryClient = useQueryClient()

    const mutation = useMutation(InsertToDetailApi, {
        onSuccess: () => {
            debugger
            queryClient.invalidateQueries('ListRepeatTasks')
        }
    })

    let data = []
    function handleChange(e) {
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
        debugger
        mutation.mutate({ ids: objArray, typeTask: typeTask })
    }



    var res = useQuery(["ListRepeatTasks"], async () => await RepeatTaskApi(typeTask))
    if (res.data != undefined) {
        data = res.data.data.data
    }

    return (
        <>
            <table>
                {
                    data.map((item, index) => (
                        <tr>
                            <td>
                                <span><input checked={item.isExecuted} value={item.id} onChange={handleChange} type="checkbox" /></span>
                                <span> </span>
                                <span>{item.title}</span>

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