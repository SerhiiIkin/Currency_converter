import React from "react";
import { InputLabel } from "@mui/material";
import { MenuItem } from "@mui/material";
import { FormControl } from "@mui/material";
import { Select } from "@mui/material";
import { useSelector } from "react-redux";

function SelectAutoWidth({ select }) {
    const data = useSelector((state) => state.converter.data);
    const firstselectValue = useSelector(
        (state) => state.converter.firstselectValue
    );
    const secondselectValue = useSelector(
        (state) => state.converter.secondselectValue
    );
    let selectValue = select.changeSelectOne
        ? firstselectValue
        : secondselectValue;

    function selectHandle(e) {
        const value = e.target.value;
        if (select.changeSelectOne) {
            select.changeSelectOne(value);
        } else if (select.changeSelectTwo) {
            select.changeSelectTwo(value);
        }
    }

    return (
        <FormControl sx={{ m: 1, minWidth: 80 }}>
            <InputLabel id="demo-simple-select-autowidth-label">
                Валюта
            </InputLabel>
            <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectValue}
                onChange={selectHandle}
                autoWidth
                label="Currency">
                <MenuItem value={1}>UAH</MenuItem>
                {data.map((el, index) => {
                    const value = +el.buy;
                    return (
                        <MenuItem key={index} value={value.toFixed(2)}>
                            {el.ccy}
                        </MenuItem>
                    );
                })}
            </Select>
        </FormControl>
    );
}

export default SelectAutoWidth;
