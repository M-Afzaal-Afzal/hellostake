import React from 'react';
import {Box, Container, Heading,VStack} from "@chakra-ui/react";
import TextWithTick from "./TextWithTick";

const TextWithVideo = ({rightText,options,heading,video}) => {
    return (
        <Box bg={'brand.400'}>
            <Container py={['3rem','4rem',null,null,'7rem']} maxW={'container.xl'}>

                <Box display={'grid'}
                     gridRowGap={'4rem'}
                     gridColumnGap={'2rem'}
                     gridTemplateColumns={['1fr', null, null,null, '1fr 1fr']}
                     color={'white'}
                     justifyItems={'center'}
                >
                    {/* First Section*/}
                    <Box order={[0,null,null,null,(rightText && 5)]}>

                        <Heading fontStyle={'italic'} lineHeight={1} color={'white'}
                                 fontSize={'clamp(36px, 5vw, 50px)'}>
                            {heading}
                        </Heading>

                        <Box mt={'1.5rem'}>

                            <VStack alignItems={'flex-start'} spacing={6}>

                                {
                                    options.map(opt => (
                                        <TextWithTick>
                                            {opt}
                                        </TextWithTick>
                                    ))
                                }

                            </VStack>

                        </Box>

                    </Box>

                    {/* Second Section*/}
                    <Box display={'flex'} justifyContent={'center'}>
                        {video}
                    </Box>

                </Box>

            </Container>
        </Box>
    );
};

export default TextWithVideo;