import { Box, Button, Container, IconButton, Stack, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import Link from "next/link";

const Footer = () => {
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
        route:"News",
        pathname:'/news',
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
    return (
    <Box className='bg-fuchsia-800 px-2 py-10'>
        <Container>
        <Box  className="w-full text-center"
         sx={{
            "& svg":{
              color:"white",
            },
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
     
          </Box>
          <Box className="w-full text-center">
            {Navitems.map((item) => (
            <Link key={item} href={item.pathname}>
              <Button className='text-amber-500 '>
                {item.route}
              </Button>
            </Link>
            ))}

          </Box>
          <Typography variant="body2" color='white '  className=" text-center">@2024 The BD NEWS DESIGN BY: Amit Hasan Faysal</Typography>
        </Container>
    </Box>
    );
};

export default Footer;