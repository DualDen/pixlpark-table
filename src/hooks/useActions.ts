import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchActionCreators} from "../store/action-creators/fetch/fetch-action-creators";


export const useActions = () => {
    const dispatch = useDispatch();
    return bindActionCreators(fetchActionCreators, dispatch);
}