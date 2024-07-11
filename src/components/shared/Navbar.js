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
import { IconButton } from '@mui/material';
import { patchFetch } from 'next/dist/server/app-render/entry-base';
import Link from 'next/link';


const Navitems = [
  {
  route:"Home",
  pathname:'/',
},
  {
  route:"Pages",
  pathname:'/pages',
},
  {
  route:"Category",
  pathname:'/category',
},
  {
  route:"About",
  pathname:'/about',
},
{
  route:"Contact",
  pathname:'/contat',
}
];


function Navbar() {



  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} width={70} hight={60} className='rounded-3xl' alt="logo"></Image>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {Navitems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className='text-white'>
                {item.route}
              </Button>
            </Link>
            ))}

          </Box>
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
          <Box>

          </Box>


        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
