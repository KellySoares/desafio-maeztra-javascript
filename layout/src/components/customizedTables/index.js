import * as React from 'react';

import { Table, TableRow, TableHead, TableContainer, TableCell, TableBody } from '@mui/material';
import Paper from '@mui/material/Paper';
import './index.scss';


const CustomizedTables = (props) => {

  return (
    <TableContainer component={Paper} className='table' sx={{ height: '100%',overflow: 'auto' }}>
      <Table sx={{ minWidth: 400 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            {props.headerTable.map((item, index) => {
              return (
                <TableCell key={index} align="center">
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