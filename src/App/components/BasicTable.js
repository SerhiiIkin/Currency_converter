import React from "react";
import {Table} from "@mui/material";
import {TableBody} from "@mui/material";
import {TableCell} from "@mui/material";
import {TableContainer} from "@mui/material";
import {TableHead} from "@mui/material";
import {TableRow} from "@mui/material";
import {Paper} from "@mui/material";
import { useSelector } from "react-redux";

function BasicTable() {
    const data = useSelector((state) => state.converter.data);
    return (
        <TableContainer sx={{ marginBottom: "30px" }} component={Paper}>
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Валюта</TableCell>
                        <TableCell align="right">Продажа</TableCell>
                        <TableCell align="right">Покупка</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => {
                        const sale = +row.sale;
                        const buy = +row.buy;
                        return (
                            <TableRow
                                key={row.ccy}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}>
                                <TableCell component="th" scope="row">
                                    {row.ccy}
                                </TableCell>
                                <TableCell align="right">
                                    {sale.toFixed(2)}
                                </TableCell>
                                <TableCell align="right">
                                    {buy.toFixed(2)}
                                </TableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default BasicTable;
