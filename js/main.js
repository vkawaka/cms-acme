'use strict'

import { getFilmes, deleteFilme, putFilme, getFilme, postFilme} from "./filmes.js"

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
    editI.src = '../edit.png'

    editI.classList.add('min-w-7', 'max-w-10')
    editBtn.classList.add('w-full', 'text-center')

    const deleteI = document.createElement('img')
    deleteI.src = '../trash.png'

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
    const body = document.querySelector('body')
    body.classList.add('relative')

    const form = document.getElementById('form')
    form.classList.remove('hidden')
    const botao = document.getElementById('editar')
    const nomeI = document.getElementById('nome')
    const sinopseI = document.getElementById('sinopse')
    const duracaoI = document.getElementById('duracao')
    const lanca = document.getElementById('lancamento')
    const relanca = document.getElementById('relancamento')
    const fotoI = document.getElementById('foto')
    const midiaI = document.getElementById('midia')
    const valorI = document.getElementById('valor')

    const duracao = dadosFilme.duracao.split('T')
    nomeI.value = dadosFilme.nome
    sinopseI.value = dadosFilme.sinopse
    duracaoI.value = duracao[1].substring(0, 8)
    lanca.value = dadosFilme.data_lancamento
    relanca.value = dadosFilme.data_relancamento
    fotoI.value =  dadosFilme.foto_capa
    midiaI.value = dadosFilme.midia_fundo
    valorI.value = dadosFilme.valor_unitario


    let novoFilme

    botao.addEventListener('click', async()=>{


            const nomeE = nomeI.value
            const sinopseE = sinopseI.value
            const duracaoE = duracaoI.value
            const lancaE = lanca.value
            const relancaE = relanca.value
            const fotoE = fotoI.value
            const midiaE = midiaI.value
            const valorE = valorI.value
        
            if(relancaE == '' || relancaE == null || relancaE == undefined){  
                novoFilme = {
                  nome: nomeE,
                  sinopse: sinopseE,
                  duracao: duracaoE,
                  data_lancamento: lancaE,
                  data_relancamento: null,
                  foto_capa: fotoE,
                  midia_fundo: midiaE,
                  valor_unitario: valorE
                }
                console.log(novoFilme)

                const teste = await putFilme(id, novoFilme)
                    console.log(teste);
                
                
              }else{
                  novoFilme = {
                      nome: nomeE,
                      sinopse: sinopseE,
                      duracao: duracaoE,
                      data_lancamento: lancaE,
                      data_relancamento: relancaE,
                      foto_capa: fotoE,
                      midia_fundo: midiaE,
                      valor_unitario: valorE
                    }
        
                console.log(novoFilme)

                const teste = await putFilme(id, novoFilme)
                    console.log(teste);
        
              }
        
    })
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