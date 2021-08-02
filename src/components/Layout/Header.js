import React from 'react';

import {Box, Container, HStack, IconButton, Image, Spacer, useDisclosure, VStack} from "@chakra-ui/react"
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
import {FaGooglePlay,FaApple} from 'react-icons/fa';
import {useSelector} from "react-redux";
import {selectInViewVale} from "../../store/counter/HeroSectionInviewSlice";

const Header = () => {

    const [isLargerThan900] = useMediaQuery("(min-width: 900px)");

    const {isOpen, onOpen, onClose} = useDisclosure();

    const inView = useSelector(selectInViewVale);

    console.log('inview from header is ', inView)

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
                bg={!inView ? 'brand.400' : 'transparent'}
                transition={'all .3s'}
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
                    justifyContent={'space-between'}
                >

                    <Box mr={8} fontSize={'1.5rem'} gridColumn={'1/auto'}>
                       <Image width={'10rem'} src={'/Prospuh_Logo_White.png'} alt={'Logo'}/>
                    </Box>


                    {/* left side of nav*/}
                    {
                        isLargerThan900 ? (
                            <HStack justifySelf={'start'} display={['none',null,null,null,'flex']} spacing={8}>
                                <HeaderButton>
                                    Pricing
                                </HeaderButton>

                                <HeaderButton>
                                    Free Education
                                </HeaderButton>

                                <HeaderButton>
                                    Podcast
                                </HeaderButton>
                                <HeaderButton>
                                    Support
                                </HeaderButton>

                            </HStack>

                        ) : null
                    }


                    {/*<Spacer/>*/}

                    {/*right side of nav*/}
                    {
                        isLargerThan900 ? (
                            <HStack spacing={8}>
                                {/*<HeaderButton>*/}
                                {/*   */}
                                {/*</HeaderButton>*/}
                                <HeaderButtonFilled>
                                    Download Now
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
                                Free Education
                            </HeaderButton>

                            <HeaderButton fontSize={'14px'}>
                                Podcast
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
                               Download Prospuh
                            </Box>

                            <HeaderButtonFilled w={'12rem'}>
                             <FaApple/> &nbsp;   APP STORE
                            </HeaderButtonFilled>

                            <HeaderButtonFilled w={'12rem'}>
                             <FaGooglePlay/> &nbsp; GOOGLE PLAY
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
