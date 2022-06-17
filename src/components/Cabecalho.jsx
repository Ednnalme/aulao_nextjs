export default function Cabecalho(props){
   //console.log(props.titulo)
   //props é somente de leitura, não pode ser alterado
  return(
     <header>
         <h1>{props.titulo}</h1>
     </header>

  )

}