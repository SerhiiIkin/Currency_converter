import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../../store/actions/converter";
import InputCurrency from "../components/Input";
import SelectAutoWidth from "../components/Select";
import BasicTable from "../components/BasicTable";
import useConverter from "../hooks/useConverter";

function Converter() {
    const dispatch = useDispatch();
    const { changeInput, changeSelectTwo, changeSelectOne } = useConverter();

    useEffect(() => {
        dispatch(getData());
    }, []);

    return (
        <>
            <BasicTable />
            <InputCurrency id="1" input={{ changeInput }} />
            <SelectAutoWidth select={{ changeSelectOne }} />
            <InputCurrency id="2" input={{ changeInput }} />
            <SelectAutoWidth select={{ changeSelectTwo }} />
        </>
    );
}

export default Converter;
