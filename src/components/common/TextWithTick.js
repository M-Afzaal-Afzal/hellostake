import React from 'react';
import {FaCheck} from "react-icons/fa";
import {Box} from "@chakra-ui/react";

const TextWithTick = ({children}) => {
    return (
        <Box display={'flex'} alignItems={'center'}>
            <FaCheck color={'gray.400'} style={{display: 'inline-block', marginRight: '1rem'}} size={'15'} m={0}/>
            <Box color={'gray.400'}>
                {children}
            </Box>
        </Box>
    );
};

export default TextWithTick;