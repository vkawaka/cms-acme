'use strict'

import { getFilmes, getFilme, deleteFilme } from "./filmes.js"

const createSpace = (filme) =>{
    const filmeE = document.createElement('tr')
    const id = document.createElement('td')
    id.textContent = filme.id
    const nome = document.createElement('td')
    nome.textContent = filme.nome
    console.log(filme.nome);
    const preco = document.createElement('td')
    preco.textContent = `R$ ${filme.valor_unitario}`
    const editT = document.createElement('td')
    const deleteT = document.createElement('td')
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const editI = document.createElement('img')
    editI.src = './edit.png'
    editI.classList.add('min-w-7', 'max-w-10')
    editBtn.id = `edit${filme.id}`
    const deleteI = document.createElement('img')
    deleteI.src = './trash.png'
    deleteI.classList.add('min-w-7', 'max-w-10')
    deleteBtn.classList.add('w-full')
    deleteBtn.id = `trash${filme.id}`
    deleteBtn.append(deleteI)
    editBtn.append(editI)
    editT.append(editBtn)
    deleteT.append(deleteBtn)

    filmeE.append(id, nome, preco, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteFilme(filme.id)
        location.reload();
    })

    console.log(filmeE);

    return filmeE
    
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