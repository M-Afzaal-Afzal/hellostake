import {Box} from "@chakra-ui/react";
// import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";
// import {useDispatch, useSelector} from "react-redux";
// import {decrement, increment,selectCounterVale} from "../store/counter/counterSlice";
import HeroSection from "../components/HeroSection";

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
        <Box as={'main'} display={'flex'} flex={'1 1 100%'} flexDirection={'column'}>
            <HeroSection/>
        </Box>
    )
}

export {getServerSideProps} from "../theme/Chakra";

export default Home;