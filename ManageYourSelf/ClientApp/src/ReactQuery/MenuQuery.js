import * as apiMenu from "../Api/MenuApi"
import { useQuery, useMutation, useQueryClient, queryCache, QueryClient } from "react-query"



const ListMenu = (skip, take, search) => {

    var res = useQuery(["ListMenuPagination", skip, take, search], async () => await apiMenu.GetMenuPagination(skip, take, search))

    return res
}


const useQueryMenuList = () => {

    var res = useQuery(["ListMenu"], async () => await apiMenu.getMenu())

    return res
}






const useDeleteMenu = () => {
    const queryClient = useQueryClient()
    return useMutation(apiMenu.deleteMenu, {

        onSuccess: (response, id) => {

            debugger
            //queryCache.refetchQueries("ListMenu")
            //queryCache.refetchQueries("ListMenuPagination")
            queryClient.invalidateQueries('ListMenu')
            queryClient.invalidateQueries('ListMenuPagination')
        },
        onError: (error) => {
            debugger
            console.log(error.response.data);
            console.log(error.response.status);
        },
    })
}



export {
    useQueryMenuList,
    ListMenu,
    useDeleteMenu
}