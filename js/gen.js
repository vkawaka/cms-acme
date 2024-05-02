'use strict'

import { getGeneros, getGenero, putGenero, postGenero, deleteGenero } from "./genero.js"

const createSpace = (genero) =>{
    const generoE = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = genero.id

    const nome = document.createElement('td')
    nome.textContent = genero.nome
    nome.classList.add('text-center')

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

    generoE.append(id, nome, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteGenero(genero.id)
        location.reload();
    })
    editBtn.addEventListener('click', function() {
        editar(genero.id)
    })

    console.log(generoE);

    return generoE
    
}

const editar = async(id) =>{

    const dadosFilme = await getGenero(id)

    const form = document.getElementById('form')
    form.classList.remove('hidden')
    const botao = document.getElementById('editar')
    const nomeI = document.getElementById('nome')
    const descricaoI = document.getElementById('descricao')


    nomeI.value = dadosFilme.nome
    descricaoI.value = dadosFilme.descricao

    let novoGenero

    botao.addEventListener('click', async()=>{


            const nomeE = nomeI.value
            const descricapE = descricaoI.value
        
                  novoGenero = {
                      nome: nomeE,
                      descricao: descricapE,
                  }
        
                console.log(novoGenero)

                const teste = await putGenero(id, novoGenero)
                console.log(teste);
        
    })
}   

async function preencherTela(){
    const table = document.getElementById('table')

    const filmes = await getGeneros()
    
    filmes.forEach(element => {
        const card = createSpace(element)
        table.append(card)
    })
}

preencherTela()