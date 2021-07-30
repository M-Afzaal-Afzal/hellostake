import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {FaQuoteLeft} from 'react-icons/fa';

import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import {Avatar, Box, Text} from "@chakra-ui/react";

SwiperCore.use([Pagination,Navigation]);

const TestimonialsSection = () => {
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

                <SwiperSlide style={{maxWidth: '35rem'}}>

                    <Box borderRadius={'xl'} maxW={'35rem'} bg={'#C1CFDA'} pb={'2rem'}>

                        <Box display={'flex'} alignItems={'center'}
                             justifyContent={'center'} py={'3rem'}
                             flexDirection={'column'}
                        >
                            <Avatar name={'Test'} src={'https://bit.ly/dan-abramov'}
                                    size={'lg'}
                            />
                            <Text mt={2} fontWeight={'bold'}>
                                M Afzaal Afzal
                            </Text>
                        </Box>

                        <Box mt={'-2rem'}>
                            <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi aspernatur, earum esse, ipsam labore molestiae obcaecati, praesentium quaerat quasi sequi vitae. Architecto beatae libero quidem rem sapiente vel!
                                <Box top={0} left={'2rem'} pos={'absolute'}>
                                    <FaQuoteLeft/>
                                </Box>
                            </Text>
                        </Box>

                    </Box>

                </SwiperSlide>

                <SwiperSlide style={{maxWidth: '35rem'}}>

                    <Box borderRadius={'xl'} maxW={'35rem'} bg={'#C1CFDA'} pb={'2rem'}>

                        <Box display={'flex'} alignItems={'center'}
                             justifyContent={'center'} py={'3rem'}
                             flexDirection={'column'}
                        >
                            <Avatar name={'Test'} src={'https://bit.ly/dan-abramov'}
                                    size={'lg'}
                            />
                            <Text mt={2} fontWeight={'bold'}>
                                M Afzaal Afzal
                            </Text>
                        </Box>

                        <Box mt={'-2rem'}>
                            <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi aspernatur, earum esse, ipsam labore molestiae obcaecati, praesentium quaerat quasi sequi vitae. Architecto beatae libero quidem rem sapiente vel!
                                <Box top={0} left={['1rem',null,null,null,'2rem']} pos={'absolute'}>
                                    <FaQuoteLeft/>
                                </Box>
                            </Text>
                        </Box>

                    </Box>

                </SwiperSlide>

                <SwiperSlide style={{maxWidth: '35rem'}}>

                    <Box borderRadius={'xl'} maxW={'35rem'} bg={'#C1CFDA'} pb={'2rem'}>

                        <Box display={'flex'} alignItems={'center'}
                             justifyContent={'center'} py={'3rem'}
                             flexDirection={'column'}
                        >
                            <Avatar name={'Test'} src={'https://bit.ly/dan-abramov'}
                                    size={'lg'}
                            />
                            <Text mt={2} fontWeight={'bold'}>
                                M Afzaal Afzal
                            </Text>
                        </Box>

                        <Box mt={'-2rem'}>
                            <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi aspernatur, earum esse, ipsam labore molestiae obcaecati, praesentium quaerat quasi sequi vitae. Architecto beatae libero quidem rem sapiente vel!
                                <Box top={0} left={['1rem',null,null,null,'2rem']} pos={'absolute'}>
                                    <FaQuoteLeft/>
                                </Box>
                            </Text>
                        </Box>

                    </Box>

                </SwiperSlide>

                <SwiperSlide style={{maxWidth: '35rem'}}>

                    <Box borderRadius={'xl'} maxW={'35rem'} bg={'#C1CFDA'} pb={'2rem'}>

                        <Box display={'flex'} alignItems={'center'}
                             justifyContent={'center'} py={'3rem'}
                             flexDirection={'column'}
                        >
                            <Avatar name={'Test'} src={'https://bit.ly/dan-abramov'}
                                    size={'lg'}
                            />
                            <Text mt={2} fontWeight={'bold'}>
                                M Afzaal Afzal
                            </Text>
                        </Box>

                        <Box mt={'-2rem'}>
                            <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi aspernatur, earum esse, ipsam labore molestiae obcaecati, praesentium quaerat quasi sequi vitae. Architecto beatae libero quidem rem sapiente vel!
                                <Box top={0} left={['1rem',null,null,null,'2rem']} pos={'absolute'}>
                                    <FaQuoteLeft/>
                                </Box>
                            </Text>
                        </Box>

                    </Box>

                </SwiperSlide>

                <SwiperSlide style={{maxWidth: '35rem'}}>

                    <Box borderRadius={'xl'} maxW={'35rem'} bg={'#C1CFDA'} pb={'2rem'}>

                        <Box display={'flex'} alignItems={'center'}
                             justifyContent={'center'} py={'3rem'}
                             flexDirection={'column'}
                        >
                            <Avatar name={'Test'} src={'https://bit.ly/dan-abramov'}
                                    size={'lg'}
                            />
                            <Text mt={2} fontWeight={'bold'}>
                                M Afzaal Afzal
                            </Text>
                        </Box>

                        <Box mt={'-2rem'}>
                            <Text pos={'relative'} textAlign={'center'} px={['1rem','1.5rem','2rem',null,'3rem']} fontWeight={'normal'}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad amet animi aspernatur, earum esse, ipsam labore molestiae obcaecati, praesentium quaerat quasi sequi vitae. Architecto beatae libero quidem rem sapiente vel!
                                <Box top={0} left={['1rem',null,null,null,'2rem']} pos={'absolute'}>
                                    <FaQuoteLeft/>
                                </Box>
                            </Text>
                        </Box>

                    </Box>

                </SwiperSlide>

            </Swiper>
        </Box>
    );
};

export default TestimonialsSection;