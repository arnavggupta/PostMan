
import React from 'react';
import AddRow from './AddRow';
import { Table, TableRow, TableCell, TableHead, TableBody, TableContainer, Paper } from '@mui/material';
import './PostmanTableStyles.css';
import { useState } from 'react';
export default function CreateTable({data,setData}) {

  const [rows,addRows]= useState([0]);
  return (
    <TableContainer className="table-container">
      <Table className="postman-table" aria-label="postman style table">
        <TableHead>
          <TableRow  >
            <TableCell></TableCell>
            <TableCell align="left">Key</TableCell>
            <TableCell align="left">Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>


          {
            //  Yaha curly braces not use yaha parametheshis use boss 
            rows.map((row,index)=>(
              <AddRow 
              addRows={addRows}
              rowId={index}
              key={index}
              data={data}
              setData={setData}/>
            ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  );
}
