import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';

import Button from '@mui/material/Button';

import MenuItem from '@mui/material/MenuItem';

import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const pages = [{ label: 'Home', path: "/" }, { label: 'Estudiantes', path: "/list-students" }, { label: 'Nuevo estudiante', path: "/create-student" }];


export const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const navigate = useNavigate();

    const location = useLocation();
    const path = location.pathname;



    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    // verificar si la ruta es activa o no
    const isActive = (currentPath, targetPath) => {
        if (targetPath === '/') {
            return currentPath === '/';
        }
        return currentPath.startsWith(targetPath);
    };
    return (
        <AppBar position="static">
            <Container maxWidth="2xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {pages.map((page) => (
                                <Link key={page.path} to={page.path} className='flex flex-col items-center justify-center'>
                                    <MenuItem onClick={handleCloseNavMenu}>
                                        <Typography sx={{ textAlign: 'center' }}>{page.label}</Typography>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Box>
                    <div>

                    </div>
                    <img onClick={() => navigate("/")} className='rounded-full cursor-pointer hidden md:block md:w-[80px] md:h-[80px]     p-2' src="./fi-unju.png" alt="" />
                    <div className='hidden   md:flex'>
                        {pages.map((page) => (
                            <Link key={page.path} to={page.path}>
                                <Button
                                    variant={isActive(path, page.path) ? 'contained' : 'outlined'}
                                    size="small"
                                    color={isActive(path, page.path) ? 'secondary' : 'primary'}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, mx: 1, fontWeight: 500, color: 'white', display: 'block' }}
                                >
                                    {page.label}
                                </Button>
                            </Link>
                        ))}

                    </div>

                    <Box sx={{ flexGrow: 0 }}>
                        <img onClick={() => navigate("/")} className='rounded-full cursor-pointer block w-[70px] h-[70px]  md:hidden   p-2' src="./fi-unju.png" alt="" />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
