'use strict'

import { getFilmes, deleteFilme, putFilme, getFilme} from "./filmes.js"

const createSpace = (filme) =>{
    const filmeE = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = filme.id

    const nome = document.createElement('td')
    nome.textContent = filme.nome
    nome.classList.add('text-center')

    const preco = document.createElement('td')
    preco.textContent = `R$ ${filme.valor_unitario.toFixed(2)}`
    preco.classList.add('text-center')

    const editT = document.createElement('td')

    const deleteT = document.createElement('td')

    const editBtn = document.createElement('button')

    const deleteBtn = document.createElement('button')

    const editI = document.createElement('img')
    editI.src = './edit.png'

    editI.classList.add('min-w-7', 'max-w-10')
    editBtn.classList.add('w-full', 'text-center')

    const deleteI = document.createElement('img')
    deleteI.src = './trash.png'

    deleteI.classList.add('min-w-7', 'max-w-10')
    deleteBtn.classList.add('w-full')
    
    deleteBtn.append(deleteI)
    editBtn.append(editI)
    editT.append(editBtn)
    deleteT.append(deleteBtn)

    filmeE.append(id, nome, preco, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteFilme(filme.id)
        location.reload();
    })
    editBtn.addEventListener('click', function() {
        editarFilme(filme.id)
    })

    console.log(filmeE);

    return filmeE
    
}

const editarFilme = async(id) =>{

    const dadosFilme = await getFilme(id)
    console.log(dadosFilme);

    const form = document.getElementById('form')
    form.classList.remove('hidden')
    const nomeI = document.getElementById('nome')
    const sinopseI = document.getElementById('sinopse')
    const duracaoI = document.getElementById('duracao')
    const lanca = document.getElementById('lancamento')
    const relanca = document.getElementById('relancamento')
    const fotoI = document.getElementById('foto')
    const midiaI = document.getElementById('midia')
    const valorI = document.getElementById('valor')

    nomeI.value = dadosFilme.nome
    sinopseI.value = dadosFilme.sinopse


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
      window.location.replace('./index.html')


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
          window.location.replace('./index.html')

      }

   } catch (error) {
    console.log(error)
   }
}

async function preencherTela(){
    const table = document.getElementById('table')

    const filmes = await getFilmes()
    
    filmes.forEach(element => {
        const card = createSpace(element)
        table.append(card)
    })
}

preencherTela()