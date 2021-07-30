import React from 'react';
import {Box} from "@chakra-ui/react";
import TextWithVideo from "../common/TextWithVideo";

const TextWithVideoSection = () => {

    const forgetPaperWorkOptions = [
        'A fully-regulated brokerage account in a few clicks.',
        'Digital, automated US tax form completion. No hassle.',
        'Simple reporting to make tax time easy.'
    ];

    const seamLessOptions = [
        '$0 brokerage and no fx fees per trade.',
        'Buy fractional shares easily and commission free.',
        'Have trades executed in seconds.'
    ];

    const superChargeYourInvestingOptions = [
        'Limit and stop orders, also commission free.',
        'Deep dive with full company financials, analyst ratings and price targets.',
        'Trade on unsettled funds with instant buying power.'
    ]

    return (
        <Box paddingTop={'5rem'} bg={'brand.400'}>
            <TextWithVideo
                heading={<Box>FORGET <br/> PAPERWORK</Box>}
                videoUrl={''}
                options={forgetPaperWorkOptions}
                video={
                    <video autoPlay={true}
                           muted
                           playsInline
                           loop
                           disableRemotePlayback
                           preload="none"
                           height="437"
                           width="217"
                           className="css-1vfhcql"
                    >
                        <source src={'https://hellostake.com/uk/videos/home-slide-1.webm'} type="video/webm"/>
                        <source src={'https://hellostake.com/uk/videos/home-slide-1.webm'} type="video/mp4"/>
                    </video>
                }
            />

            <TextWithVideo
                heading={'SEAMLESS'}
                videoUrl={'https://hellostake.com/uk/videos/home-slide-2.webm'}
                video={
                    <video muted
                           autoPlay={true}
                           playsInline
                           loop
                           disableRemotePlayback
                           preload="none" height="273"
                           width="474" className="css-1vfhcql">
                        <source src="https://hellostake.com/uk/videos/home-slide-2.webm" type="video/webm"/>
                        <source src="https://hellostake.com/uk/videos/home-slide-2.webm" type="video/mp4"/>
                    </video>
                }
                rightText={true}
                options={seamLessOptions}
            />

            <TextWithVideo
                heading={'SUPERCHARGE YOUR INVESTING'}
                videoUrl={''}
                options={superChargeYourInvestingOptions}
                video={
                    <video muted playsInline loop disableRemotePlayback preload={'none'} autoPlay={true}
                           height="437"
                           width="217" className="css-1vfhcql"
                    >
                        <source src="https://hellostake.com/uk/videos/home-slide-3.webm" type="video/webm"/>
                        <source src="https://hellostake.com/uk/videos/home-slide-3.mp4" type="video/mp4"/>
                    </video>
                }
            />
        </Box>
    );
};

export default TextWithVideoSection;