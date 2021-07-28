import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
import HeaderButtonFilled from "./Buttons/HeaderButtonFilled";

const HeroSection = () => {
    return (
        <Box as={'section'} h={'calc(100vh - 64px)'}>

            {/*Video section*/}
            <Box h={'100vh'}
                 w={'100%'}
                 display={'flex'}
                 justifySelf={'center'}
                 alignItems={'flex-end'}
                 overflow={'hidden'}
                 pos={'absolute'}
                 top={0}
                 left={0}
            >

                <Box height={'100vh'} zIndex={'-5'} w={'100%'} pos={'relative'} opacity={1} bg={'brand.400'}>
                    <Box as={'video'}
                         autoPlay={true}
                         objectFit={'cover'}
                         position={'absolute'}
                         muted
                         playsInline
                         loop={true}
                         disableRemotePlayback
                         height="100%"
                         width="100%"
                         preload="metadata"
                    >
                        <source
                            src="https://hellostake.com/uk/videos/hero-vid.webm"
                            type="video/webm"
                        />
                        <source src="https://hellostake.com/uk/videos/hero-vid.mp4"
                                type="video/mp4"
                        />
                    </Box>
                </Box>

            </Box>

            {/*   text with image section*/}
            <Container maxW={'container.xl'} zIndex={1} pt={8}>
                <Box display={'grid'} gridGap={['16px', null, null, null, null, '24px']}
                     gridTemplateRows={['auto auto auto 1fr 1fr', null, null, null, null, 'auto']}
                     gridTemplateColumns={['repeat(8,1fr)', null, null, null, null, 'repeat(12,1fr)']}
                     zIndex={1}
                >
                    <Box gridColumn={['1/span 7', null, null, '2/span 4']} color={'#fff'}>
                        <Heading as={'h2'}
                                 fontSize={'clamp(38px, 6vw, 60px)'}
                                 fontWeight={'900'}
                                 letterSpacing={'-0.5px'}
                                 lineHeight={'clamp(35px, 6vw, 56px)'}
                                 textTransform={'uppercase'}
                                 fontStyle={'italic'}
                                 whiteSpace={'break-spaces'}
                        >
                            STILL PAYING
                            TO TRADE
                            THE US?
                            WE CALL BULL.
                        </Heading>
                    </Box>

                    <Box color={'white'}
                         fontWeight={'600'}
                         letterSpacing={'1px'}
                         lineHeight={'1rem'}
                         fontStyle={'italic'}
                         gridColumn={['1/span 6', null, null, '2/span 4']}
                    >
                        STAKE LETS YOU TRADE THE US MARKET WITH $0 BROKERAGE FEES.
                    </Box>

                    <Box
                        gridColumn={['1/span 4', null, null, '2/span 3']}
                    >

                        <HeaderButtonFilled width={'100%'} py={2} cursor={'pointer'} _hover={{cursor: 'pointer'}}>
                            SIGN UP
                        </HeaderButtonFilled>

                        <Box
                            color={'#ACAFB2'}
                            textTransform={'uppercase'}
                            fontWeight={'700'}
                            letterSpacing={'1px'}
                            whiteSpace={'nowrap'}
                            fontStyle={'normal'}
                            pt={'24px'}
                            fontSize={'12px'}
                        >
                            WHEN YOU INVEST, YOUR CAPITAL IS AT RISK.
                        </Box>

                    </Box>

                    <Box gridColumn={['1/span 1', null, null, '2/span 1']}>
                        <img src="https://hellostake.com/uk/_next/image?url=%2Fimages%2Farrow-down.svg&w=48&q=75"
                             alt="arrow"
                        />
                    </Box>

                    <Box gridColumn={['4/span 4', null, null, '7/span 4']} gridRow={['4', null, null, '1/span 5']}>

                        <Box height={['40vh', null, null, '50vh']} marginTop={[0, null, null, '-20px']}>

                            <Box pos={'relative'} height={'100%'} display={'grid'}>
                                {/*display: inline-block;*/}
                                {/*max-width: 100%;*/}
                                {/*overflow: hidden;*/}
                                {/*position: relative;*/}
                                {/*box-sizing: border-box;*/}
                                {/*margin: 0;*/}
                                <Box
                                    display={'inline-block'}
                                    maxW={'100%'}
                                    overflow={'hidden'}
                                    pos={'relative'}
                                    margin={0}
                                    height={'100%'}
                                >
                                    <Box>

                                    </Box>

                                    <img
                                        style={{
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            bottom: 0,
                                            right: 0,
                                            padding: 0,
                                            margin: 0,
                                            width: 0,
                                            height: 0,
                                            maxWidth: '100%',
                                            minWidth: '100%',
                                            minHeight: '100%',
                                            maxHeight: '100%',
                                            objectFit: 'contain',
                                        }}
                                        src="https://hellostake.com/uk/_next/image?url=%2Fimages%2Fen%2Fhero-phone.webp&w=828&q=75"
                                        alt=""
                                    />
                                </Box>

                            </Box>

                        </Box>

                    </Box>


                </Box>
            </Container>

        </Box>
    );
};

export default HeroSection;