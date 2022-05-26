import http from "../Services/httpService";
import config from '../Services/config.json'

const UpdateDutyApi = async (obj) => {
    debugger
    const { data } = await http.post(`${config.localapi}/Duty/UpdateDuty`, obj);
    return data
};

const getDuty = async (skip, take, search) => {

    const { data } = await http.get(`${config.localapi}/Duty/GetDuty?skip=${skip}&take=${take}&search=${search}`);
    return data
};

export {
    getDuty,
    CreateDuty,
    GetDutyNotExecuted,
    UpdateDutyApi,
    GetDutyExecutedTodayApi,
    GetDutyAllApi
}