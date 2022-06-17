// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { json } from "express/lib/response"

export default function handler(req, res) {
  if(req.method == "GET"){
    handlerGet(req,res)
  } else{
    res.status(405).send()
  }
  
}


function handlerGet(req, res){
   res.status(200).json({
      name: 'Teste API',
      metodo: req.method,
      nome: req.query.nome,
      idade: req.query.idade
      


   })

}
