import {ENABLE_OR_DISABLE_LOADING} from "./loading-spinner-actionType"

const initialState = {
    isLoading: false,
    msg: 'Please wait...'
}
const spinnerReducer = function loading(state= initialState, action) {
    switch (action.type) {
        case ENABLE_OR_DISABLE_LOADING:
            return action.payload;
        default:
            return state;
    }
}
export default spinnerReducer;