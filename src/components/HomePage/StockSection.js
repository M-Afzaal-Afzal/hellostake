import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
import HeaderButtonFilled from "../Buttons/HeaderButtonFilled";

const StockSection = () => {
    return (
        <Box bg={'brand.400'}>
            <Container
                maxW={'container.xl'}
                py={'7rem'}
            >

                <Box
                    display={'grid'}
                    gridTemplateColumns=
                        {['repeat(8,1fr)', null, null, null, null, 'repeat(12,1fr)']}
                    pos={'relative'}
                >

                    <Box height={'35rem'} bgGradient={'linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)'}
                         gridColumn={['1/-1', null, null, null, '2/12']}>

                    </Box>


                    <Box pos={'absolute'}
                         w={'100%'}
                         mx={'auto'}
                         top={'50%'}
                         left={'50%'}
                         transform={'translate(-50%, -50%)'}
                    >

                        <Container maxW={'container.xl'}>

                            <Box
                                display={'grid'}
                                gridTemplateColumns=
                                    {['repeat(8,1fr)', null, null, null, null, 'repeat(12,1fr)']}
                            >

                                <Box bg={'brand.400'}
                                     gridColumn={['2/8', null, null, null, null, '4/10']}
                                     color={'white'}
                                    // height={'20rem'}

                                >

                                    <Box minHeight={'340px'} p={'32px'}>
                                        <Heading
                                            fontSize={'clamp(36px, 5vw, 50px)'}
                                            fontWeight={'900'}
                                            lineHeight={'clamp(31px, 5vw, 46px)'}
                                            fontStyle={'italic'}
                                        >
                                            YOUR FIRST
                                            STOCK ON US
                                        </Heading>

                                        <Heading
                                            fontSize={'14px'}
                                            fontWeight={'500'}
                                            letterSpacing={'0.5px'}
                                            paddingTop={'24px'}
                                            lineHeight={'18px'}
                                        >
                                            Start ahead of the game. Get a free stock up to $150 USD in value when you
                                            fund your account within 24 hours.
                                        </Heading>

                                        <HeaderButtonFilled background={'rgba(165,255,64,0.71)'}
                                        color={'white'} fontWeight={'bold'} py={2} px={6}
                                                            mt={'4rem'}
                                        >
                                            Get Free Stock
                                        </HeaderButtonFilled>

                                    </Box>



                                </Box>

                            </Box>

                        </Container>

                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default StockSection;