import http from "../Services/httpService";
import config from '../Services/config.json'


const getMenu = async () => {

    const { data } = await http.get(`${config.localapi}/Menu/GetMenu`);

    return data
};

const GetMenuPagination = async (skip, take, search) => {

    const { data } = await http.get(`${config.localapi}/Menu/GetMenuPagination?skip=${skip}&take=${take}&search=${search}`);

    return data
};

const getItemById = async (id) => {

    const { data } = await http.get(`${config.localapi}/Menu/GetItemById?id=${id}`);

    return data
};

const createUpdateMenu = async (obj) => {
    
    const { data } = await http.post(`${config.localapi}/Menu/CreateUpdate`, obj);
    return data
};

const deleteMenu = async (id) => {

    const data = await http.get(`${config.localapi}/Menu/DeleteMenu?id=${id}`);
    return data
}


export {
    getMenu,
    getItemById,
    createUpdateMenu,
    GetMenuPagination,
    deleteMenu
}