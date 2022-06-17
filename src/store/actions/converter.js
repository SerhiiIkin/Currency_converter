import ConverterApi from "./ConverterApi";

export const ACTION_GET_DATA = "ACTION_GET_DATA";
export const ACTION_SET_INPUTONE = "ACTION_SET_INPUTONE";
export const ACTION_SET_INPUTTWO = "ACTION_SET_INPUTTWO";
export const ACTION_SET_SELECTONE = "ACTION_SET_SELECTONE";
export const ACTION_SET_SELECTTWO = "ACTION_SET_SELECTTWO";
export const ACTION_SET_ERROR = "ACTION_SET_ERROR";

export function getData() {
    return (dispatch) => {
        ConverterApi.getData().then((data) =>
            dispatch({ type: ACTION_GET_DATA, payload: data })
        );
    };
}

export function setInputOne(value) {
    return { type: ACTION_SET_INPUTONE, payload: value };
}
export function setInputTwo(value) {
    return { type: ACTION_SET_INPUTTWO, payload: value };
}
export function setSelectOne(value) {
    return { type: ACTION_SET_SELECTONE, payload: value };
}
export function setSelectTwo(value) {
    return { type: ACTION_SET_SELECTTWO, payload: value };
}
export function setInputError(value) {
    return { type:  ACTION_SET_ERROR, payload: value };
}