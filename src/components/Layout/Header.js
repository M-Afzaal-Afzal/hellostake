import React from 'react';

import {Box, Container, HStack, IconButton, Spacer, useDisclosure, VStack} from "@chakra-ui/react"
import HeaderButton from "../Buttons/HeaderButton";
import HeaderButtonFilled from "../Buttons/HeaderButtonFilled";
import {FaBars} from 'react-icons/fa'
import {useMediaQuery} from "@chakra-ui/react"
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react"

const Header = () => {

    const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

    const {isOpen, onOpen, onClose} = useDisclosure()

    return (
        <Box
            display={'flex'}
            pos={'sticky'}
            top={0}
            zIndex={1201}
            as={'header'}
            height={'64px'}
            color={'white'}
        >
            <Box
                // bg={'brand.400'}
                position={'absolute'}
                height={'100%'}
                width={'100%'}
            />
            <Container
                w={'100%'}
                h={'100%'}
                zIndex={1}
                display={'flex'}
                flex={'1 1 100%'}
                maxW={'container.xl'}
            >
                <Box
                    as={'nav'}
                    display={'flex'}
                    flex={'1 1 100%'}
                    alignItems={'center'}
                >

                    <Box mr={8} fontSize={'1.5rem'} gridColumn={'1/auto'}>
                        Logo
                    </Box>


                    {/* left side of nav*/}
                    <HStack justifySelf={'start'} display={['none',null,null,null,'flex']} spacing={8}>
                        <HeaderButton>
                            Pricing
                        </HeaderButton>

                        <HeaderButton>
                            Blog
                        </HeaderButton>

                        <HeaderButton>
                            Carrer
                        </HeaderButton>
                        <HeaderButton>
                            Support
                        </HeaderButton>

                    </HStack>


                    <Spacer/>

                    {/*right side of nav*/}
                    {
                        isLargerThan768 ? (
                            <HStack spacing={8}>
                                <HeaderButton>
                                    Carrer
                                </HeaderButton>
                                <HeaderButtonFilled>
                                    Support
                                </HeaderButtonFilled>

                                {/*mobile nav icon*/}
                                <Box display={'none'}>

                                </Box>

                            </HStack>
                        ) : (
                            <>
                                <IconButton
                                    onClick={onOpen}
                                    bg={'transparent'}
                                    borderRadius={'50%'}
                                    aria-label={''}
                                    _hover={{
                                        background: 'rgba(219,219,219,0.42)'
                                    }}
                                >
                                    <FaBars size={20}/>
                                </IconButton>
                            </>
                        )
                    }


                </Box>
            </Container>

            {/*    drawer is there*/}

            <Drawer placement={'right'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay/>
                <DrawerContent bg={'rgb(20, 20, 20)'} color={'#fff'}>
                    <DrawerCloseButton/>
                    <DrawerHeader height={'64px'}>
                        &nbsp;
                    </DrawerHeader>
                    <DrawerBody
                        display={'flex'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDirection={'column'}
                    >
                        <VStack alignItems={'flex-start'}>
                            <HeaderButton fontSize={'14px'}>
                                Pricing
                            </HeaderButton>

                            <HeaderButton fontSize={'14px'}>
                                Blog
                            </HeaderButton>

                            <HeaderButton fontSize={'14px'}>
                                Carrer
                            </HeaderButton>

                            <HeaderButton fontSize={'14px'}>
                                Support
                            </HeaderButton>

                            <Box pt={12}>
                                <HeaderButton>
                                    Login
                                </HeaderButton>
                            </Box>

                            <Box pt={1}/>

                            <Box fontSize={'14'} fontWeight={'300'}>
                                DOWNLOAD STAKE
                            </Box>

                            <HeaderButtonFilled>
                                APP STORE
                            </HeaderButtonFilled>

                            <HeaderButtonFilled>
                                GOOGLE PLAY
                            </HeaderButtonFilled>

                        </VStack>


                    </DrawerBody>
                    <DrawerFooter border={0}/>
                </DrawerContent>
            </Drawer>

        </Box>
    );
};

export default Header;
