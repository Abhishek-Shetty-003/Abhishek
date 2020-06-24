import {ENABLE_OR_DISABLE_LOADING} from "./loading-spinner-actionType"

export function enableOrDisableLoading (value = true, msg='Loading your content') {
    return {
        type: ENABLE_OR_DISABLE_LOADING,
        payload:
         {
        isLoading: value,
         msg: msg
        }
    };
}