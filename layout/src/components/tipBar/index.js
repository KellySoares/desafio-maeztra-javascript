import React from 'react';
import { Box } from '@mui/material';

import './index.scss';

const TipBar = (props) => {
    return (
        <>
            <Box sx={{ gap: 2, display: 'flex', flexDirection: 'column', margin: '2em 0'}}>
                <Box sx={props.style} >{props.title}</Box>
                <Box sx={{ gap: 3, display: '-webkit-inline-box', overflowY: 'auto', paddingBottom: 1 }} className="tipbar">
                    {props.children}
                </Box>
            </Box>

        </>


    )
}

export default TipBar;