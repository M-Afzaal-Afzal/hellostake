import {Chakra} from "../src/theme/Chakra";
import Layout from '../src/components/Layout/Layout';
import 'focus-visible/dist/focus-visible'

function MyApp({Component, pageProps}) {

    return (
        <Chakra cookies={pageProps.cookies}>
            <Layout>
                <Component {...pageProps} />
             </Layout>
         </Chakra>
    )
}

export default MyApp
