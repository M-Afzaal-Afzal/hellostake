import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
import Image from 'next/image'
import HeaderButtonFilled from "../Buttons/HeaderButtonFilled";

const CtaSection = () => {
    return (
        <Box bg={'brand.400'} py={'7rem'}>
            <Container maxW={'container.xl'}>

                <Box display={'grid'}
                     gridTemplateColumns={['repeat(8,1fr)', null, null, null, null, 'repeat(12,1fr)']}
                >

                    <Box
                        gridColumn={['2/span 6', null, null, '4/span 5', null, '5/span 7']}
                        gridRow={['1/auto', null, null, '1/ span 2', null, '1/span 2']}
                    >

                        <Image
                            src={'https://hellostake.com/uk/_next/image?url=%2Fimages%2Fstreet-image.jpg&q=75&w=1920'}
                            width={679}
                            layout={'intrinsic'}
                            height={617}
                        />

                    </Box>

                    <Box
                        gridColumn={['1/span 6', null, null, '1/span 4', null, '2/span 5']}
                        gridRow={['1/auto', null, null, '1/auto', null, '1/auto']}
                        zIndex={5}
                        color={'white'}
                    >

                        <Heading
                            as={'h2'} pt={'40px'}
                            fontSize={'clamp(45px,6vw, 56px)'}
                            lineHeight={'clamp(36px, 6vw, 56px)'}
                            fontStyle={'italic'}
                            fontWeight={900}
                        >
                            WALL ST’S KNOCKING
                            AND OPPORTUNITY DOESN'T KNOCK TWICE.
                        </Heading>

                        <Box mt={'2.5rem'}>
                            <HeaderButtonFilled py={2} px={6}>
                                SIGN UP
                            </HeaderButtonFilled>
                        </Box>
                    </Box>


                </Box>

            </Container>
        </Box>
    );
};

export default CtaSection;