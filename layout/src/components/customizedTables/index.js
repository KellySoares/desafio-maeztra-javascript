import * as React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.scss';


const CustomizedTables = (props) => {

  return (
    <TableContainer component={Paper} className='table'>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.headerTable.map((item, index) => {
              return (
                <TableCell key={index}>
                  {item}
                </TableCell>)
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.children}

          {props.footerTable}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CustomizedTables;