import React, {forwardRef} from 'react';
import {Box} from "@chakra-ui/react";

const HeaderButtonFilled = forwardRef (({children,...props},ref) => {
    return (
        <Box display={'inline-flex'}
             justifyContent={'center'}
             alignItems={'center'}
            // padding={'1rem'}
             py={'2px'}
             cursor={'pointer'}
             px={'16px'}
             ref={ref}
             fontSize={'16px'}
             color={'gray.900'}
            bg={'white'}
             {...props}
            letterSpacing={'1px'}
        >
            {children}
        </Box>
    );
}) ;

export default HeaderButtonFilled;