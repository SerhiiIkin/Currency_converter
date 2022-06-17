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
        const formula = (firstInputValue * firstselectValue) / value;

        dispatch(setSelectOne(value));

        if (value === secondselectValue) {
            dispatch(setInputOne(secondInputValue));
        } else {
            dispatch(setInputOne(formula));
        }
    }

    function changeSelectTwo(value) {
        const formula = (firstInputValue * firstselectValue) / value;

        dispatch(setSelectTwo(value));

        if (value === firstselectValue) {
            dispatch(setInputTwo(firstInputValue));
        } else {
            dispatch(setInputTwo(formula));
        }
    }

    function changeInput(e) {
        let value = e.target.value;
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
                                secondselectValue,
                                firstselectValue
                            )
                        )
                    );
                }

                if (inputId === 2) {
                    dispatch(setInputTwo(+value));
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

        function calculateAnotherInput(inputOne, inputTwo, selectValue) {
            return (inputOne * inputTwo) / selectValue;
        }
    }

    return {
        changeInput,
        changeSelectOne,
        changeSelectTwo,
    };
}

export default useConverter;
