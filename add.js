'use strict'

import {postFilme} from "./filmes.js"


function cadastrar(){
    const nomeI = document.getElementById('nome').value
    const sinopseI = document.getElementById('sinopse').value
    const duracaoI = document.getElementById('duracao').value
    const lanca = document.getElementById('lancamento').value
    const relanca = document.getElementById('relancamento').value
    const fotoI = document.getElementById('foto').value
    const midiaI = document.getElementById('midia').value
    const valorI = document.getElementById('valor').value

    // const lancaC = transformarData(lanca)
    // const relancaC = transformarData(relanca)


    let novoFilme
   try {
    if(relanca == '' || relanca == null || relanca == undefined){  
        novoFilme = {
          nome: nomeI,
          sinopse: sinopseI,
          duracao: duracaoI,
          data_lancamento: lanca,
          data_relancamento: null,
          foto_capa: fotoI,
          midia_fundo: midiaI,
          valor_unitario: valorI
        }
  
        postFilme(novoFilme)
      console.log(novoFilme)
      window.location.href = './index.html'

      }else{
          novoFilme = {
              nome: nomeI,
              sinopse: sinopseI,
              duracao: duracaoI,
              data_lancamento: lanca,
              data_relancamento: relanca,
              foto_capa: fotoI,
              midia_fundo: midiaI,
              valor_unitario: valorI
            }
      
            postFilme(novoFilme)
          console.log(novoFilme)
          window.location.href = './index.html'

      }

   } catch (error) {
    console.log(error)
   }
}

const botao = document.getElementById('criar')

botao.addEventListener('click', cadastrar)

// const transformarData = (data) =>{
//     let dataR = data

//     let dataArray = dataR.split('/')

//     let dataC = `${dataArray[2]}-${dataArray[1]}-${dataArray[0]}`

//     return dataC
// }

// window.location.href = '../login/index.html'