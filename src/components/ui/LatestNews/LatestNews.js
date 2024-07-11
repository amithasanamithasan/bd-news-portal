import { Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import image from'@/assets/Capture.PNG'
import Image from "next/image";

const LatestNews = () => {
    return(
    <Box className="my-5">
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


        {/* new grid  */}
        <Grid  className="mt-4" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
  <Card>
            <CardActionArea>
                <CardMedia>
                    <Image src={image} width={800} alt='top news' ></Image>
                </CardMedia>
               <p className="w-[100px] bg-green-600 text-white px-2 my-5 rounded">Sports</p>
                <CardContent>
                    <Typography gutterBottom >
                    GM Zias son to represent Bangladesh in Chess Olympiad
                    </Typography>
                    <Typography gutterBottom  className="my-3">
                        By Amit Hasan Faysal - jun 12 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    FIDE Master Tahsin Tajwar Zia, the only son of deceased Grandmaster Ziaur Rahman, will represent Bangladesh in the upcoming 45th Chess Olympiad after winning a tie-breaker to finish fifth in the 48th National Chess Championship at the Bangladesh Chess Federation hall room today.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
            <CardActionArea>
                <CardMedia>
                    <Image src={image} width={800} alt='top news' ></Image>
                </CardMedia>
               <p className="w-[100px] bg-pink-950 text-white px-2 my-5 rounded">Political</p>
                <CardContent>
                    <Typography gutterBottom >
                    BNP wants to turn the anti-quota protests into anti-government agitations. If anyone tries to give the protests a political shape, well face it politically.
                    </Typography>
                    <Typography gutterBottom  className="my-3">
                        By Amit Hasan Faysal - jun 12 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    BNP wants to turn the anti-quota protests into anti-government agitations. If anyone tries to give the protests a political shape, well face it politically.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
            <CardActionArea>
                <CardMedia>
                    <Image src={image} width={400} alt='top news' ></Image>
                </CardMedia>
               <p className="w-[100px] bg-red-600 text-white px-2 my-5 rounded">Agitation</p>
                <CardContent>
                    <Typography gutterBottom >
                    Quota protests heat up as govt mulls hard line
                    </Typography>
                    <Typography gutterBottom  className="my-3">
                        By Amit Hasan Faysal - jun 12 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    Students break through a police barricade in the capitals Shahbagh around 5:30pm yesterday during a demonstration demanding reforms of the quota system in government jobs. Students from different public universities and colleges have been staging protests across the country since July 1. Photo: Palash Khan
                    Ignoring calls to step back and police warnings, anti-quota protesters yesterday broke barricades on roads and went ahead with their Bangla Blockade leading to a face-off with law enforcers.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  </Grid>
  <Grid item xs={6}>
  <Card>
            <CardActionArea>
                <CardMedia>
                    <Image src={image} width={800} alt='top news' ></Image>
                </CardMedia>
               <p className="w-[100px] bg-cyan-700 text-white px-2 my-5 rounded">Flooded</p>
                <CardContent>
                    <Typography gutterBottom >
                    Flood situation worsens in Kurigram
                    </Typography>
                    <Typography gutterBottom  className="my-3">
                        By Amit Hasan Faysal - jun 12 2024
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                    The ongoing flood situation in Kurigram has deteriorated further as the water levels of Brahmaputra, 
                    Dudhkumar, and Dharla rivers started rising again in 12 hours till yesterday morning.According to Bangladesh Water Development Board sources, Brahmaputras 
                    water has risen by 10cm since Wednesday evening 
                    and was flowing 46cm above danger level at Chilmari Point yesterday morning.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
  </Grid>
  
</Grid>
    </Box>
    );
};

export default LatestNews;