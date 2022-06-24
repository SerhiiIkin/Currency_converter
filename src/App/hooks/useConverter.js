import { useSelector, useDispatch } from "react-redux";
import {
    setInputError,
    setInputOne,
    setInputTwo,
    setSelectOne,
    setSelectTwo,
} from "../../store/actions/converter";

function useConverter() {
    const dispatch = useDispatch();

    const firstInputValue = useSelector(
        (state) => state.converter.firstInputValue
    );
    const firstselectValue = useSelector(
        (state) => state.converter.firstselectValue
    );
    const secondInputValue = useSelector(
        (state) => state.converter.secondInputValue
    );
    const secondselectValue = useSelector(
        (state) => state.converter.secondselectValue
    );

    function changeSelectOne(value) {
        const formula = (
            (secondInputValue * secondselectValue) /
            value
        ).toString();
        const inputOneValue = sliceString(formula);
        const inputTwoValue = sliceString(secondInputValue.toString());
        const currentValue = sliceString(value.toString());

        dispatch(setSelectOne(currentValue));

        if (value === secondselectValue) {
            dispatch(setInputOne(inputTwoValue));
        } else {
            dispatch(setInputOne(inputOneValue));
        }
    }

    function changeSelectTwo(value) {
        const formula = (
            (firstInputValue * firstselectValue) /
            value
        ).toString();

        const inputOneValue = sliceString(firstInputValue.toString());
        const inputTwoValue = sliceString(formula);
        const currentValue = sliceString(value.toString());

        dispatch(setSelectTwo(currentValue));

        if (value === firstselectValue) {
            dispatch(setInputTwo(inputOneValue));
        } else {
            dispatch(setInputTwo(inputTwoValue));
        }
    }

    function changeInput(e) {
        let value = sliceString(e.target.value);
        const inputId = +e.target.id;
        const regex = /^(([0-9]){0,16}|(\d+\.{0,1}\d*))$/;

        if (regex.test(value)) {
            dispatch(setInputError(false));
            if (value.length > 16) {
                dispatch(setInputError(true));
            } else {
                if (inputId === 1) {
                    dispatch(setInputOne(value));
                    dispatch(
                        setInputTwo(
                            calculateAnotherInput(
                                value,
                                firstselectValue,
                                secondselectValue
                            )
                        )
                    );
                }

                if (inputId === 2) {
                    dispatch(setInputTwo(value));
                    dispatch(
                        setInputOne(
                            calculateAnotherInput(
                                value,
                                secondselectValue,
                                firstselectValue
                            )
                        )
                    );
                }
            }
        } else {
            dispatch(setInputError(true));
        }

        function calculateAnotherInput(thisInput, thisSelect, anotherSelect) {
            const result = sliceString(
                ((thisInput * thisSelect) / anotherSelect).toString()
            );
            return result !== "0" ? result : "";
        }
    }

    function sliceString(str) {
        return str?.indexOf(".") !== -1
            ? str.slice(0, str.indexOf(".") + 3)
            : str;
    }

    return {
        changeInput,
        changeSelectOne,
        changeSelectTwo,
    };
}

export default useConverter;
