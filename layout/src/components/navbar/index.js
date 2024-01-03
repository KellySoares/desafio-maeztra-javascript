import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { Nav } from 'react-bootstrap';

import ButtonComp from '../button';
import Cart from '../cart';
import Search from '../search';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import logo from "../../assets/images/header/logo-maeztra-novo.svg";

import './index.scss';

const pages = [{ 'name': 'Minha Conta', 'icon': <PermIdentityIcon /> },
{ 'name': 'Minha Conta', 'icon': <FavoriteBorderOutlinedIcon /> }];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar className='AppBar'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>

                    <Typography variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <img width="140px" src={logo} alt="Logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            className='AppBar_IconButton'
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}>
                        <img width="140px" src={logo} alt="Logo" />
                    </Typography>

                    <Search />
                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: "center" }} gap={1} className="AppBar_box-desktop">

                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} gap={1}>
                            
                            {pages.map((page, index) => (
                                <ButtonComp key={index}
                                onClick={handleCloseNavMenu}
                                style={{ my: 1, color: 'white', display: 'flex', borderRadius: '8px' }}
                                icons={page.icon} name={page.name} classname="header" />
                            ))}
                        </Box>
                        <Nav>

                            <Cart />
                        </Nav>

                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;