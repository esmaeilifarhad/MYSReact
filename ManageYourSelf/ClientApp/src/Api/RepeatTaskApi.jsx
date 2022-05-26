import http from "../Services/httpService";
import config from '../Services/config.json'
import { useQuery, useMutation, useQueryClient, queryCache, QueryClient } from "react-query"

const RepeatTaskApi = async (typeTask) => {

    const data = await http.post(`${config.localapi}/RepeatTask/GetTasks?typeTask=${typeTask}`);

    return data
}

const InsertToDetailApi = async (obj) => {

    const data = await http.post(`${config.localapi}/RepeatTask/InsertToDetail`, { ids: obj.ids, typeTask: obj.typeTask });

    return data
}

const ListRepeatTaskApi = async (obj) => {
    const data = await http.post(`${config.localapi}/RepeatTask/_Pagination`, obj);
    return data
}


const ListRepeatTaskQuery = (obj) => {

    var res = useQuery(["ListRepeatTaskManage", obj], async () => await ListRepeatTaskApi(obj))

    return res
}

const CallApiAll =async (address, type, obj) => {
    if (type == "post" || type == "Post") {
        const data = await http.post(`${config.localapi}/${address}`, obj);
        return data
    }
    else {
        const data = await http.get(`${config.localapi}/${address}?id=${obj}`);
        return data
    }
}


export {
    RepeatTaskApi,
    InsertToDetailApi,
    ListRepeatTaskApi,
    ListRepeatTaskQuery,
    CallApiAll
}