import { Box, Container, Typography } from "@mui/material";
import headingImage from '@/assets/logo.png';
import Image from "next/image";
import moment from 'moment';
import { useEffect, useState } from "react";

const Header = () => {
    const [currentTime, setCurrentTime] = useState("");

    useEffect(() => {
        setCurrentTime(moment().format("dddd, MMMM Do YYYY, h:mm:ss a"));
    }, []);
    return (
        <Box className=" w-full my-4  ">
            <Container>
                <Image className="mx-auto rounded-3xl" src={headingImage} width={150} hight={200} alt="logo"></Image>
                {/* <Typography className=" text-center my-2 "> {moment().format("dddd, MMMM Do YYYY, h:mm:ss ")}</Typography> */}
                <Typography className="text-center text-emerald-600 font-light font-semibold my-2">
                    {currentTime || "Loading..."}
                </Typography>
                <Typography className=" text-center text-slate-950 ">@2024 The BD NEWS DESIGN BY: Amit Hasan Faysal</Typography>

            </Container>
        </Box>
    );
};

export default Header;