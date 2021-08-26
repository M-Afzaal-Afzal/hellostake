import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {FaQuoteLeft} from 'react-icons/fa';

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import {Avatar, Box, Text} from "@chakra-ui/react";

SwiperCore.use([Pagination,Navigation]);

const TestimonialsSection = () => {

    const testimonials = [
        {
            name: `Melissa Smith`,
            message: `Being from a Caribbean country, it's amazing to know that I can invest in US stocks. Prospuh made the process simple and easy for me to do so`,
            photoUrl: '',
        },{
            name: `Michael Dunn`,
            message: `As a full time day trader in the Caribbean region, it's an upgrade to finally have a platform that is based within the region, but still allows me to invest in US and other foreign stocks and ETF's`,
            photoUrl: '',
        },{
            name: `James Perez`,
            message: `Coming from a country that is not as advanced in technology, Prospuh created the best house warming for me to make my digital debut into the world of investing. All of the information was at my fingertips and the app was easy to navigate`,
            photoUrl: '',
        },{
            name: `Danielle Russell`,
            message: `I always thought I had to make a living for myself in the US to be able to invest in US stocks and other ETF's, but Prospuh allowed me to do all these things and more from the comfort of my own couch in my country.`,
            photoUrl: '',
        },{
            name: `Joshua Knowles`,
            message: `From living a life of being a day trader, I wanted to begin to invest in more stocks and ETF's to make life easier for me. Prospuh made that completely possible for me and other investors in the Caribbean`,
            photoUrl: '',
        },
    ]

    return (
        <Box bg={'dark.400'}>
            <Swiper
                style={{background: '#141414',padding: '4rem 0'}}
                slidesPerView={'auto'}
                spaceBetween={30}
                // slidesPerGroup={'auto'}
                loop={true}
                // loopFillGroupWithBlank={true}
                pagination={{
                "clickable": true
            }}
                 className="mySwiper"
            >

                {
                    testimonials.map(({name,message,photoUrl},index) => (
                        <SwiperSlide key={index} style={{maxWidth: '35rem',minHeight: '20rem'}}>

                            <Box borderRadius={'xl'} h={'20rem'} maxW={'35rem'} bg={'#ffffff'} pb={'2rem'}>

                                <Box display={'flex'} alignItems={'center'}
                                     justifyContent={'center'} py={'3rem'}
                                     flexDirection={'column'}
                                     color={'gray.500'}
                                >
                                    <Avatar name={name} src={photoUrl}
                                            size={'lg'}
                                    />
                                    <Text mt={2} fontWeight={'bold'}>
                                        {name}
                                    </Text>
                                </Box>

                                <Box mt={'-2rem'}>
                                    <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                        {message}
                                        <Box top={0} left={['1rem',null,null,null,'2rem']} pos={'absolute'}>
                                            <FaQuoteLeft/>
                                        </Box>
                                    </Text>
                                </Box>

                            </Box>

                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </Box>
    );
};

export default TestimonialsSection;