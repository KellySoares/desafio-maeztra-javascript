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

import ButtonComp from '../button';
import Cart from '../cart';
import Search from '../search';

import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import logo from "../../assets/images/header/logo-maeztra-novo.svg";
import icons from "../../assets/images/icons/dress.svg";

import './index.scss';

const pages = [{ 'name': 'Minha Conta', 'icon': <PermIdentityIcon /> },
{ 'name': 'Favoritos', 'icon': <FavoriteBorderOutlinedIcon /> }];

const category = [
    { 'name': 'Novidades', 'link': '', 'icon': icons, 'principal': true },
    { 'name': 'Vestidos', 'link': '', 'icon': '', 'principal': false },
    { 'name': 'Roupas', 'link': '', 'icon': '', 'principal': false },
    { 'name': 'Sapatos', 'link': '', 'icon': '', 'principal': false },
    { 'name': 'Lingerie', 'link': '', 'icon': '', 'principal': false },
    { 'name': 'Acessórios', 'link': '', 'icon': '', 'principal': false },
    { 'name': 'OUTLET', 'link': '', 'icon': '', 'principal': false }
];

function NavBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <><AppBar className='AppBar'>
            <Box
                
                sx={{
                    mr: 0,
                    display: 'flex',
                    fontSize: '12px',
                    color: '#FFFFFF',
                    justifyContent: 'center',
                    backgroundColor: '#353535'
                }}>
                Acompanhe as melhores promoções disponíveis aqui na Maeztra.
            </Box>
            <Container maxWidth="xl">

                <Toolbar disableGutters>

                    <Typography
                        
                        component="a"
                        href="#"
                        sx={{
                            mr: 0,
                            display: { xs: 'none', md: 'flex' },
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
                            <Typography textAlign="center">Categorias</Typography>
                            {category.map((page, index) => (
                                <MenuItem key={index} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        
                        component="a"
                        href="#"
                        sx={{
                            mr: 0,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            textDecoration: 'none',
                        }}>
                        <img width="140px" src={logo} alt="Logo" />
                    </Typography>


                    <Box sx={{ flexGrow: 1, display: 'flex', alignItems: "center", justifyContent: 'right' }} gap={1} className="AppBar_box-desktop">
                        <Search />
                        <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }} gap={1}>

                            {pages.map((page, index) => (
                                <ButtonComp key={index}
                                    onClick={handleCloseNavMenu}
                                    style={{ color: 'white', display: 'flex', borderRadius: '8px' }}
                                    icons={page.icon} name={page.name} classname="header" />
                            ))}
                        </Box>


                        <Cart />


                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} gap='3em' className="menu-category">

                {category.map((category, index) => (
                    category.principal ?
                        <ButtonComp key={index}
                            style={{ color: 'white', borderRadius: '8px' }}
                            icons={
                                <img alt={category.name} src={category.icon} />
                            }
                            name={category.name}
                            classname="menu-category_link-active" />
                        : <ButtonComp key={index}
                            style={{ color: 'white', borderRadius: '8px' }}

                            name={category.name}
                            classname="menu-category_link" />

                ))}
            </Box>
        </>

    );
}
export default NavBar;