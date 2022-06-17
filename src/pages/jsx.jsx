import Layout from "../components/Layout"
export default function Jsx() {
    const a = 4
    const b = 3
    const titulo = <h1>JSX é um conceito Central!</h1>
    function subtitulo() {
        return <h2>Este framework é muito legal</h2>
    }
    return (
        <Layout titulo="Entendendo o JSX">
            <div>
                {titulo}
                {subtitulo()}
                {"O valor da multiplicação é " + a * b}
            </div>
        </Layout>
    )
}