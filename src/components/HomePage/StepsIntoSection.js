import React from 'react';
import {Box, Container,Image, Heading, Text} from "@chakra-ui/react";
// import Image from 'next/image'

const StepsIntoSection = () => {
    return (
        <Box background={'linear-gradient(to right bottom, rgba(0,0,0,.5),rgba(0,0,0,.5)), url(/bg/1.jpg) center/cover'} py={['5rem']}>
            <Container color={'#fff'} maxW={'container.xl'}>

                <Heading color={'white'} as={'h1'} fontSize={'50px'}>
                    STEP INTO THE WORLD'S <br/>
                    BIGGEST MARKET
                </Heading>

                <Text fontSize={'1rem'} mt={'2rem'}>
                    PUT YOUR MONEY TO WORK WHERE THE WORLD TRADES.
                </Text>

                <Box mt={6} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                    <Image
                        priority
                        src={'/3Phones.png'}
                        layout={'intrinsic'}
                        width={750}
                    />

                </Box>

            </Container>
        </Box>
    );
};

export default StepsIntoSection;