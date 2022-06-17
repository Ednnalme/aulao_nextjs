import Navegador from '../components/Navegador'

export default function Inicio() {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexWrap: 'wrap',
            height: '100vh'
        }}>
            <Navegador cor="crimson"texto="Estiloso" destino="/estiloso"/>
            <Navegador cor="#9400d3"texto="Exemplo" destino="/exemplo"/>
            <Navegador cor="crimson"texto="JSX" destino="/jsx"/>
            <Navegador cor="green"texto="Navegação #01" destino="/navegacao"/>
            <Navegador cor="blue"texto="Navegação #02" destino="/cliente/sp/123"/>
            <Navegador cor="pink"texto="Componente com Estado" destino="/estado"/>
            <Navegador cor="red"texto="Integração com API #01" destino="/integracao_1"/>
            <Navegador cor="orange"texto="Conteúdo Estático" destino="/estatico"/>

        </div>
    )
}