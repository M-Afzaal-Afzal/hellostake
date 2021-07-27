import React from 'react';
import {Box} from "@chakra-ui/react";

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

                <Box height={'100vh'} w={'100%'} pos={'relative'}>
                    <Box  as={'video'}
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
            <Box>

            </Box>

        </Box>
    );
};

export default HeroSection;