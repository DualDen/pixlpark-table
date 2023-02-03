import {AppDispatch} from "../../store";
import axios from "axios";
import {FetchActionTypes} from "../../../types/types";


export const fetchActionCreators = {
fetchRequest: () => async (dispatch: AppDispatch) => {
    try {
        await  axios.get("http://localhost:8080/https://api.pixlpark.com/oauth/requesttoken").then(req =>
        dispatch({type: FetchActionTypes.FETCH_REQUEST_TOKEN, payload: req.data.RequestToken})
        )
    }
    catch  {
        throw new Error("Ошибка при получении данных");
    }
},
fetchOrders: (requestToken:string,publicKey:string,password:string) => async (dispatch: AppDispatch) => {
    try {
        await axios.get(`http://localhost:8080/https://api.pixlpark.com/oauth/accesstoken?oauth_token=${requestToken}&grant_type=api&username=${publicKey}&password=${password}`)
            .then(async res => await axios.get(`http://localhost:8080/https://api.pixlpark.com/orders?oauth_token=${res.data.AccessToken}`))
            .then(response => dispatch({type: FetchActionTypes.FETCH_ORDERS, payload: response.data.Result}))
    }
    catch {
        throw new Error("Ошибка при получении данных")
    }
},
setIsLoading: (payload: boolean) => ({type: FetchActionTypes.SET_IS_LOADING, payload: payload}),

}