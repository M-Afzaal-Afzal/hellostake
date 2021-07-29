import React from 'react';
import {Box, Container, Heading} from "@chakra-ui/react";
import {FaCodepen, FaCity, FaPhoenixFramework, FaMoneyCheckAlt} from 'react-icons/fa';
import OpportunityCard from "../common/OpportunityCard";

const OpportunitiesSection = () => {
    return (
        <Box bg={'brand.400'} py={32} pt={['11rem',null,null,null,null,'17rem']} zIndex={-1}>
            <Container maxW={'container.xl'}>
                <Heading fontStyle={'italic'} fontSize={'2rem'} color={'white'}>
                    Endless Opportunities
                </Heading>

                <Box mt={'4rem'} gridGap={'1.5rem'} display={'grid'}
                     gridTemplateColumns={['1fr',null,'1fr 1fr',null,null,'1fr 1fr 1fr 1fr']}
                >
                    {/* First element*/}
                    <OpportunityCard heading={'Own Equity'}
                                     desc={'Trade 4,500+ US stocks and Etfs'}
                                     icon={<FaCodepen color={'brand.400'} size={50}/>}
                    />

                    {/* 2nd element*/}
                    <OpportunityCard heading={'Grow your wealth'}
                                     desc={'Investing is one of the best ways to grow your savings over the long term - invest in the world\'s leading brands.'}
                                     icon={<FaMoneyCheckAlt color={'brand.400'} size={50}/>}
                    />

                    {/* 3rd element*/}
                    <OpportunityCard heading={'Start with only 10$'}
                                     desc={'You can buy as little as 0.00001 shares with a minimum of 1$'}
                                     icon={<FaPhoenixFramework color={'brand.400'} size={50}/>}
                    />

                    {/* 4th element*/}
                    <OpportunityCard heading={'Safety you Deserve'}
                                     desc={'Prospuh and its partners are regulated. Your account is protected for up to USD 500,000 by the SIPC'}
                                     icon={<FaCity color={'brand.400'} size={50}/>}
                    />

                </Box>

            </Container>
        </Box>
    );
};

export default OpportunitiesSection;