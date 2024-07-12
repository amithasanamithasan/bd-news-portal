
"use client";

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
// icon import mui
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from '@/assets/logo.png';
import Image from 'next/image';
import { Drawer, Hidden, IconButton, List, ListItem, ListItemText, Menu, Stack } from '@mui/material';

import Link from 'next/link';
import Header from './Header';
import DashboardTopNav from './Darkmode';
import { ThemeContext } from '@/context/TheamProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';


const Navitems = [
  { route: "Home", pathname: '/' },
  { route: "Pages", pathname: '/pages' },
  { route: "Category", pathname: '/categories/news' },
  { route: "News", pathname: '/news' },
  { route: "About", pathname: '/about' },
  { route: "Contact", pathname: '/contact' }
];



function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const handleThemeToggle = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Image src={logo} width={70} height={60} className='rounded-3xl' alt="logo" />
      <List>
        {Navitems.map((item) => (
          <ListItem button key={item.route}>
            <Link href={item.pathname}>
              <ListItemText primary={item.route} />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
    <Header />
    <AppBar position="static" className={`${theme ? "bg-white text-black" : "bg-[#172437]"}`}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={70} height={60} className='rounded-3xl' alt="logo" />
          
          <Hidden smDown>
            <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
              {Navitems.map((item) => (
                <Link key={item.route} href={item.pathname}>
                  <Button className={`${theme ? "text-black" : "text-white"}`}>
                    {item.route}
                  </Button>
                </Link>
              ))}
            </Box>
          </Hidden>

          <Box>
            {theme ?
              <MdOutlineDarkMode className="cursor-pointer" onClick={handleThemeToggle} size={24} /> :
              <MdOutlineLightMode className="cursor-pointer" onClick={handleThemeToggle} size={24} />
            }
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
            <Stack direction="row" spacing={1}>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <FacebookIcon />
              </IconButton>
            </Stack>
          </Box>

          <Hidden mdUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ ml: 2 }}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
    </AppBar>

    <Drawer
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
      }}
    >
      {drawer}
    </Drawer>
  </>
);
}
export default Navbar;
