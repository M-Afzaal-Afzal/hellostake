import {Box, Button} from "@chakra-ui/react";
import {DarkModeSwitch} from "../src/components/Buttons/DarkModeSwitch";

const Home = () => {
    return (
        <Box>
            <Button colorScheme={'blue'}>testing</Button>
            main page
            <Box>
                <DarkModeSwitch/>
            </Box>
        </Box>
    )
}

export {getServerSideProps} from "../src/theme/Chakra";

export default Home;