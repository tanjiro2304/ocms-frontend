import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { request, setAuthHeader } from '../service/AxiosHelper';



const Orderpage = () => {

    const [rows,setRows] = useState([])


    useEffect(() =>{
        request(
            "GET",
            "/item/fetchAll").then(
                (response) => {
                    setRows(response.data)
                }).catch(
                    (error) => {
                        setAuthHeader(null);
                    }
                );

    },[rows])
    


    return (
        <div style={{
            backgroundColor: 'white', color: 'black', width: '90%', height: '80%',
            borderRadius: '20px', margin: 'auto', padding: '30px'
        }}>
            <h2>Order Menu</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Item Id</TableCell>
                            <TableCell align="center">Item Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.itemId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell align="right">{row.itemId}</TableCell>
                                <TableCell align="right">{row.itemName}</TableCell>
                                <TableCell align="right">{row.itemPrice}</TableCell>
                                <TableCell align="right">{row.itemQuantity}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Orderpage