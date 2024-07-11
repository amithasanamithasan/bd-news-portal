import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import image from'@/assets/news1.png'

// small grid

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
import ButtonBase from '@mui/material/ButtonBase';

// const Img = styled('img')({
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   });

const Sidebar = () => {
    return (
        <Box className="py-5">
              <Card>
            <CardActionArea>
                <CardMedia>
                    <Image src={image} width={800} alt='top news' ></Image>
                </CardMedia>
               <p className="w-[100px] bg-red-600 text-white px-2 my-5 rounded">Alarming</p>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    MAYHEM IN NARAIL, BANGLADESH: MUSLIM MOBS ATTACK HINDUS AND PILLAGE THEIR HOMES, TEMPLES AND VILLAGES
                    </Typography>
                    <Typography gutterBottom  className="my-3">
                        By Amit Hasan Faysal - jun 12 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Muslim mobs attacked Hindus, pillaged their homes, businesses and temples over alleged posts by a 18 year old Hindu boy which according to them insults religious sentiments of the Muslims. On July 15th, Muslims mobs swooped on the minority communities after the Jumma Namaz and went on a brutal rampage destroying temples, grocery stores and
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>

        {/* small card news */}

        <Box className="py-7">
        <Paper
    //   sx={{
    //     p: 2,
    //     margin: 'auto',
    //     maxWidth: 500,
    //     flexGrow: 1,
    //     backgroundColor: (theme) =>
    //       theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    //   }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            {/* <Img alt="complex" src="/static/images/grid/complex.jpg" /> */}
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography gutterBottom variant="subtitle1" component="div">
                Standard license
              </Typography>
             
              <Typography variant="body2" color="text.secondary">
                ID: 1030114
              </Typography>
            </Grid>
           
          </Grid>
         
        </Grid>
      </Grid>
    </Paper>
        </Box>

        </Box>
    );
};

export default Sidebar;