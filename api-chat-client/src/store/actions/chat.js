import * as actionTypes from "../types";

export const getSocketID = (id) => {
    return {
        type: actionTypes.GET__SOCKETID,
        id
    }
}