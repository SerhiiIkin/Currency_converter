import React from "react";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

function InputCurrency({ input, id }) {
    const firstInputValue = useSelector(
        (state) => state.converter.firstInputValue
    );
    const secondInputValue = useSelector(
        (state) => state.converter.secondInputValue
    );
    const inputError = useSelector((state) => state.converter.inputError);

    let inputValue =
        id === "1" ? firstInputValue || "" : secondInputValue || "";
    inputValue =
        typeof inputValue === "number"
            ? inputValue.toString().slice(0, 17)
            : inputValue.slice(0, 17);

    return (
        <TextField
            id={id}
            value={inputValue}
            helperText={
                inputError
                    ? "numbers length < 16 or numbers  with one point only!"
                    : ""
            }
            onChange={input.changeInput}
            placeholder="Ведите количество валюты"
            error={inputError}
            variant="standard"
            sx={{ minWidth: "350px", m: 1 }}
        />
    );
}

export default InputCurrency;
