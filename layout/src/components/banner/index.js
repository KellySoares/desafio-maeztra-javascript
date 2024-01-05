import React from "react";
import { Box } from "@mui/material";

import './index.scss';


const box = {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between'

}
const boxText = {
    gap: 2,
    textAlign: 'left',
    width: '100%',
    paddingRight: { xs: 0, md: 5 },
    paddingBottom: { xs: 5, md: 0 }
}
const Banner = ({ info }) => {

    return (
        <>
            <Box sx={box} className="banner">
                <Box sx={boxText}>
                    <Box sx={{ fontSize: 24, fontWeight: 700, lineHeight: '37px' }} >
                        {info.title}
                    </Box>
                    <Box sx={{ lineHeight: '21px' }}>
                        {info.description}
                    </Box>
                </Box>
                <div className="banner-image">
                    <img src={info.image} alt={info.title} />
                </div>
            </Box>
        </>
    )
}

export default Banner;