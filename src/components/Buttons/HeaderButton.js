import React, {forwardRef} from 'react';
import {Box} from "@chakra-ui/react";

const HeaderButton = forwardRef (({children,...props},ref) => {
    return (
        <Box display={'inline-flex'}
             as={'button'}
             justifyContent={'center'}
             alignItems={'center'}
             // padding={'1rem'}
             py={'.2rem'}
             cursor={'pointer'}
             letterSpacing={'1px'}
             px={0}
             ref={ref}
             fontSize={'1rem'}
             color={'#f9f9f9'}
             borderBottom={'1px solid transparent'}
             _hover={{
                 borderBottom: '1px solid #f9f9f9'
             }}
             {...props}
        >
            {children}
        </Box>
    );
}) ;

export default HeaderButton;