import http from "../Services/httpService";
import config from '../Services/config.json'


const getDuty = async (skip, take, search) => {

    const { data } = await http.get(`${config.localapi}/Duty/GetDuty?skip=${skip}&take=${take}&search=${search}`);
    return data
};

const GetDutyNotExecuted = async () => {

    const { data } = await http.get(`${config.localapi}/Duty/GetDutyNotExecuted`);
    return data
};

const CreateDuty = async (obj) => {
    const { data } = await http.post(`${config.localapi}/Duty/CreateDuty`, obj);
    return data
};

const UpdateDutyApi = async (obj) => {
    
    const { data } = await http.post(`${config.localapi}/Duty/UpdateDuty`, obj);
    return data
};
//GET  ==>  /api/Duty / GetDutyExecutedToday
const GetDutyExecutedTodayApi = async () => {

    const { data } = await http.get(`${config.localapi}/Duty/GetDutyExecutedToday`);
    return data
};
const GetDutyAllApi = async () => {

    const { data } = await http.get(`${config.localapi}/Duty/GetAllDuty`);
    
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