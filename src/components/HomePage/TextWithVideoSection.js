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
    ];

    return (
        <Box paddingTop={'5rem'} bg={'rgb(1 0 1)'}>
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
                           height="auto"
                           width="100%"
                           className="css-1vfhcql"
                    >
                        <source src={'https://res.cloudinary.com/dskmoyzft/video/upload/v1631625016/3_Screens_Animated_1_b3is3t.mp4'} type="video/webm"/>
                        <source src={'https://res.cloudinary.com/dskmoyzft/video/upload/v1631625016/3_Screens_Animated_1_b3is3t.mp4'} type="video/mp4"/>
                    </video>
                }
            />

            <TextWithVideo
                heading={'SEAMLESS'}
                videoUrl={'https://res.cloudinary.com/dskmoyzft/video/upload/v1631625016/3_Screens_Animated_3_uxkfm6.mp4'}
                video={
                    <video muted
                           autoPlay={true}
                           playsInline
                           loop
                           disableRemotePlayback
                           preload="none" height="auto"
                           width="100%" className="css-1vfhcql">
                        <source src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631625016/3_Screens_Animated_3_uxkfm6.mp4" type="video/webm"/>
                        <source src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631625016/3_Screens_Animated_3_uxkfm6.mp4" type="video/mp4"/>
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
                           height="auto"
                           width="100%" className="css-1vfhcql"
                    >
                        <source src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631625014/3_Screens_Animated_qy6rqp.mp4" type="video/webm"/>
                        <source src="https://res.cloudinary.com/dskmoyzft/video/upload/v1631625014/3_Screens_Animated_qy6rqp.mp4" type="video/mp4"/>
                    </video>
                }
            />
        </Box>
    );
};

export default TextWithVideoSection;