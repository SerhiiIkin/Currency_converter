import {
    ACTION_GET_DATA,
    ACTION_SET_ERROR,
    ACTION_SET_INPUTONE,
    ACTION_SET_INPUTTWO,
    ACTION_SET_SELECTONE,
    ACTION_SET_SELECTTWO,
} from "../actions/converter";

const initialState = {
    data: [],
    firstInputValue: 1 || "",
    secondInputValue: 1 || "",
    firstselectValue: 1 || "",
    secondselectValue: 1 || "",
    inputError: false,
};

function converterReducer(state = initialState, { type, payload }) {
    switch (type) {
        case ACTION_GET_DATA:
            return {
                ...state,
                data: payload,
            };
        case ACTION_SET_INPUTONE:
            return { ...state, firstInputValue: payload };
        case ACTION_SET_INPUTTWO:
            return { ...state, secondInputValue: payload };
        case ACTION_SET_SELECTONE:
            return { ...state, firstselectValue: payload };
        case ACTION_SET_SELECTTWO:
            return { ...state, secondselectValue: payload };
        case ACTION_SET_ERROR:
            return { ...state, inputError: payload };

        default:
            return state;
    }
}

export default converterReducer;
