import React from 'react';
import {Box, Heading, Text} from "@chakra-ui/react";

const OpportunityCard = ({heading,desc,icon}) => {
    return (
        <Box
            cursor={'pointer'}
            transition={'all .3s'}
            _hover={{
            boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        }} bg={'white'} borderRadius={'lg'} py={'2rem'} px={'1rem'}>
            {/*icon container*/}
            <Box display={'flex'} justifyContent={'center'} alignItems={'center'}>
                {icon}
            </Box>

            {/* Card Heading container*/}
            <Box textAlign={'center'} color={'brand.400'} mt={'1.5rem'}>
                <Heading as={'h3'} fontSize={'1.2rem'}>
                    {heading}
                </Heading>
            </Box>

            {/*    Card Description container*/}

            <Box>
                <Text textAlign={'center'} fontSize={'14px'} mt={'10px'} color={'brand.400'}>
                    {desc}
                </Text>
            </Box>

        </Box>
    );
};

export default OpportunityCard;