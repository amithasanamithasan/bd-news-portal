
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
import { IconButton, Stack } from '@mui/material';

import Link from 'next/link';
import Header from './Header';
import DashboardTopNav from './Darkmode';
import { ThemeContext } from '@/context/TheamProvider';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';


const Navitems = [
  {
    route: "Home",
    pathname: '/',
  },
  {
    route: "Pages",
    pathname: '/pages',
  },
  {
    route: "Category",
    pathname: '/category',
  },
  {
    route: "News",
    pathname: '/news',
  },
  {
    route: "About",
    pathname: '/about',
  },
  {
    route: "Contact",
    pathname: '/contat',
  }
];


function Navbar() {
  const { theme, setTheme } = React.useContext(ThemeContext);
  const handleThemeToggle = () => {
    localStorage.setItem("theme", !theme);
    setTheme(!theme);
  };

  return (
    <>
      <Header></Header>


      <AppBar position="static" className={`${theme ? "bg-white text-black" : "bg-[#172437]"}`}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Image src={logo} width={70} hight={60} className='rounded-3xl' alt="logo"></Image>

            <Box className="w-full text-center">
              {Navitems.map((item) => (
                <Link key={item} href={item.pathname}>
                  <Button className={`${theme?"text-black":"text-white"}`}>
                    {item.route}
                  </Button>
                </Link>
              ))}

            </Box>
            {/* icon navbar */}
            <Box>
              {
                theme ?
                  <MdOutlineDarkMode className="cursor-pointer" onClick={handleThemeToggle} size={24} /> :
                  <MdOutlineLightMode className="cursor-pointer" onClick={handleThemeToggle} size={24} />
              }
            </Box>
            <Box>
              <Stack direction="row" sx={{
                "& svg": {
                  color: "white",
                }
              }}>

                <IconButton>
                  <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                  <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                  <FacebookIcon></FacebookIcon>
                </IconButton>
                <IconButton>
                  <FacebookIcon></FacebookIcon>
                </IconButton>
              </Stack>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <DashboardTopNav></DashboardTopNav> */}
    </>
  );
}
export default Navbar;
