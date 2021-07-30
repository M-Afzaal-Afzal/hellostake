import {Box} from "@chakra-ui/react";
// import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment,selectCounterVale} from "../store/counter/counterSlice";
import HeroSection from "../components/HomePage/HeroSection";
import OpportunitiesSection from "../components/HomePage/OpportunitiesSection";
import StepsIntoSection from "../components/HomePage/StepsIntoSection";
import React from "react";
import TextWithVideoSection from "../components/HomePage/TextWithVideoSection";

const Home = () => {

    // const dispatch = useDispatch();
    //
    // const value = useSelector(selectCounterVale);
    // console.log(value);
    //
    // const incrementHandler = () => {
    //     dispatch(increment());
    // }
    //
    // const decrementHandler = () => {
    //     dispatch(decrement());
    // }

    return (
        <Box as={'main'}>
            <HeroSection/>
            <OpportunitiesSection/>
            <StepsIntoSection/>
            <TextWithVideoSection/>

        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;