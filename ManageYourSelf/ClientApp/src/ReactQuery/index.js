import { useQuery, useMutation, queryCache } from "react-query"
import * as api from "../Api/DutyApi"
import * as apiMenu from "../Api/MenuApi"

const ListDuty = (skip, take, search) => {

    var res = useQuery(["ListDuty", skip, take, search], async () => await api.getDuty(skip, take, search))

    return res
}
export {
    ListDuty,
}