import {Chakra} from "../theme/Chakra";
import Layout from '../components/Layout/Layout';
import 'focus-visible/dist/focus-visible'
import {Provider} from 'react-redux'
import store from "../store/store";
import 'rc-rate/assets/index.css';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

function MyApp({Component, pageProps}) {

    return (
        <Provider store={store}>
            <Chakra cookies={pageProps.cookies}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Chakra>
        </Provider>
    )
}

export default MyApp
