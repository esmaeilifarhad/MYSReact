import http from "../Services/httpService";
import config from '../Services/config.json'

const PublicApi = async (type, address, obj) => {
    if (type == "get" || type == "Get") {
        const { data } = await http.get(`${config.localapi}/${address}`);
        return data
    }
    if (type == "post" || type == "Post") {
        const { data } = await http.post(`${config.localapi}/${address}`, obj);
        return data
    }
    if (type == "delete" || type == "Delete") {
        const { data } = await http.delete(`${config.localapi}/${address}`);
        return data
    }
}

export {
    PublicApi
}