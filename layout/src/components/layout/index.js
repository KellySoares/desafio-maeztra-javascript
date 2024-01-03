import * as React from 'react';
import { useSelector } from "react-redux";

import NavBar from "../navbar";
import { Container } from 'react-bootstrap';

import { Box, Link } from "@mui/material";

import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import CustomExpandIcon from '../customExpandIcon';

import './index.scss';
const Layout = ({ children }) => {

    const footericons = useSelector(state => state.footerContent[0])
    const footerinfo = useSelector(state => state.footerContent[1])

    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (<>
        <NavBar />
        
        <Container className="Container" >{children}</Container>

        <footer >
            <div className="footer-info">
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        justifyContent: 'space-evenly',
                        padding: '2em 30px 2em'

                    }}
                >
                    {footerinfo.map((item, index) => {
                        return (
                            <div className="footer-info-content" key={index}>
                                <Box className="footer-info-content_title" >
                                    {item.name}
                                </Box>

                                {item.conteudo.map((info, index) => {
                                    return (
                                        <Link href={info.link} key={index}
                                            underline="none"
                                            className="footer-info-content_link">
                                            {info.name}
                                        </Link>
                                    )
                                })}

                            </div>
                        )
                    })}
                </Box>
                <Box
                    sx={{
                        display: { xs: 'flex', md: 'none' },
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'stretch',
                        justifyContent: 'space-evenly',
                        margin: { xs: '0 30px', lg: '0 80px' },
                        padding: '2em 0',
                        height: { xs: '0', md: '291px' }

                    }}
                >
                    {footerinfo.map((item, index) => {
                        return (
                            <div className="footer-info-content" key={index}>
                                <Accordion expanded={expanded === item.name} onChange={handleChange(item.name)} className="accordion">
                                    <AccordionSummary
                                        expandIcon={<CustomExpandIcon />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Box className="accordion_title" >
                                            {item.name}
                                        </Box>
                                    </AccordionSummary>

                                    {item.conteudo.map((info, index) => {
                                        return (
                                            <AccordionDetails key={index}>
                                                <Link href={info.link}
                                                    underline="none"
                                                    className="accordion_link">
                                                    {info.name}
                                                </Link>
                                            </AccordionDetails>

                                        )
                                    })}
                                </Accordion>
                            </div>
                        )
                    })}
                </Box>
            </div >
            <div className="footer-icon">
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        justifyContent: { xs: 'space-evenly', md: 'space-between' },
                        margin: { xs: '0 30px', lg: '0 80px' },
                        height: { xs: '233px', md: '85px' },
                        clear: 'both'

                    }}
                >

                    {Object.entries(footericons).map((item, index) => {
                        return (
                            <div className="footer-icon-content" key={index}>
                                {item[1].map((icons, index) => {
                                    return (
                                        <div className="footer-icon-content_icons" key={index}>
                                            {icons.text ? <Box sx={{ fontSize: 10, lineHeight: '13.62px', marginBottom: '0.6em' }} >
                                                {icons.text}
                                            </Box> : ''}
                                            <Link href={icons.link}>
                                                <img src={icons.image} alt={icons.title} />
                                            </Link>

                                        </div>
                                    )
                                })}

                            </div>
                        )
                    })}
                </Box>
            </div>

        </footer >
    </>

    )
}

export default Layout;