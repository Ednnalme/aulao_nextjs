import Cabecalho from "../components/Cabecalho";
import Layout from '../components/Layout'
export default function Exemplo() {

    return(
        <Layout>
            <>
                <Cabecalho titulo="Aprendendo Next.js" />
                <Cabecalho titulo="Java Script" />
                <Cabecalho titulo="Back End"/>

            </>

        </Layout>
        
    )
}