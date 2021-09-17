import React from 'react';
import {Box, Container, Heading, Text} from "@chakra-ui/react";
import HeaderButtonFilled from "../Buttons/HeaderButtonFilled";
import {FaGooglePlay, FaApple} from 'react-icons/fa';
import Rate from 'rc-rate';
import {useInView} from "react-intersection-observer";
import {toggleInView} from "../../store/counter/HeroSectionInviewSlice";
import {useDispatch} from "react-redux";


const HeroSection = () => {

    const dispatch = useDispatch();

    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 1,
    });

    if (inView) {
        console.log('in view')
        dispatch(toggleInView({inView: true}))
    } else {
        console.log('not in view')
        dispatch(toggleInView({inView: false}))
    }


    return (
        <Box ref={ref} as={'section'} h={'calc(100vh - 64px)'}>

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

                <Box h={'calc(100vh)'}
                     zIndex={'-5'} w={'100%'}
                     pos={'relative'} opacity={1} bg={'brand.400'}
                >
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
                            src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631624240/DJI_0002_2__2_rou1gq.mp4"
                            type="video/webm"
                        />
                        <source src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631624240/DJI_0002_2__2_rou1gq.mp4"
                                type="video/mp4"
                        />
                    </Box>

                    {/* Video overlay*/}
                    <Box pos={'absolute'}
                         w={'100%'}
                         blur={true}
                         height={'100%'}
                         bg={'rgba(0,0,0,0.5)'}
                    />
                </Box>

            </Box>

            {/*   text with image section*/}
            <Container maxW={'container.xl'} zIndex={1} pt={8}>
                <Box
                    display={'grid'}
                     gridGap={['16px', null, null, null, null, '24px']}
                     gridTemplateRows={'auto'}
                     gridTemplateColumns={['repeat(8,1fr)', null, null, null, null, 'repeat(12,1fr)']}
                     zIndex={1}
                >
                    <Box gridColumn={['1/span 8', null, null, '2/span 4']} color={'#fff'}>
                        <Heading as={'h2'}
                                 fontSize={'clamp(38px, 6vw, 60px)'}
                                 fontWeight={'900'}
                                 letterSpacing={'-0.5px'}
                                 lineHeight={'clamp(35px, 6vw, 56px)'}
                                 textTransform={'uppercase'}
                                 fontStyle={'italic'}
                                 whiteSpace={'break-spaces'}
                                 textAlign={['center',null,null,'left']}
                        >
                            Putting Equity in the Hands
                            of the People
                        </Heading>
                    </Box>

                    {/*<Box color={'white'}*/}
                    {/*     fontWeight={'600'}*/}
                    {/*     letterSpacing={'1px'}*/}
                    {/*     lineHeight={'1rem'}*/}
                    {/*     fontStyle={'italic'}*/}
                    {/*     gridColumn={['1/span 8', null, null, '2/span 4']}*/}
                    {/*     textAlign={['center',null,null,'left']}*/}
                    {/*>*/}
                    {/*    STAKE LETS YOU TRADE THE US MARKET WITH $0 BROKERAGE FEES.*/}
                    {/*</Box>*/}

                    <Box
                        display={'flex'} flexDirection={'column'} alignItems={'flex-start'}
                        gridColumn={['1/span 8', null, null, '2/span 3']}
                    >
                        <Box display={'flex'} justifySelf={'flex-start'} alignItems={'center'} flexDirection={'column'}>
                            <HeaderButtonFilled w={'12rem'}>
                                <FaApple/> &nbsp;   APP STORE
                            </HeaderButtonFilled>
                            <Box my={2} display={'flex'} alignItems={'center'}>
                                <Text pr={3} color={'#fff'}>4.7</Text>
                            <Rate disabled allowHalf={true} value={4.7}/>
                            </Box>

                            <HeaderButtonFilled w={'12rem'} mt={2}>
                                <FaGooglePlay/> &nbsp; GOOGLE PLAY
                            </HeaderButtonFilled>

                            <Box my={2} display={'flex'} alignItems={'center'}>
                                <Text pr={3} color={'#fff'}>4.7</Text>
                                <Rate disabled allowHalf={true} value={4.7}/>
                            </Box>
                        </Box>


                        <Box
                            color={'#ACAFB2'}
                            textTransform={'uppercase'}
                            fontWeight={'700'}
                            letterSpacing={'1px'}
                            // whiteSpace={'nowrap'}
                            fontStyle={'normal'}
                            pt={'24px'}
                            fontSize={'12px'}
                            textAlign={['center',null,null,'left']}
                        >
                            Making it simple for both beginners and experienced investors to build and grow wealth.
                        </Box>

                    </Box>

                    <Box display={'flex'} alignItems={'flex-end'} gridColumn={['1/span 1', null, null, '2/span 1']}>
                        <img src="https://hellostake.com/uk/_next/image?url=%2Fimages%2Farrow-down.svg&w=48&q=75"
                             alt="arrow"
                        />
                    </Box>

                    <Box gridColumn={['3/span 4', null, null, '7/span 4']} gridRow={['4', null, null, '1/span 5']}>

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
                                        alt="Phone"
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