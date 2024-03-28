'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

const createSpace = (filme) =>{
    const filmeE = document.createElement('div')
    filmeE.classList.add('w-52', 'flex')
    const nome = document.createElement('p')
    nome.textContent = filme.nome
    console.log(filme.nome);
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const editI = document.createElement('img')
    editI.src = './edit.png'
    editI.classList.add('min-w-7', 'max-w-10')
    editBtn.id = `edit${filme.id}`
    const deleteI = document.createElement('img')
    deleteI.src = './trash.png'
    deleteI.classList.add('min-w-7', 'max-w-10')
    deleteBtn.id = `trash${filme.id}`
    deleteBtn.append(deleteI)
    editBtn.append(editI)


    filmeE.append(nome, deleteBtn, editBtn)

    return filmeE
    
}

async function preencherTela(){
    const container = document.getElementById('cont')

    const filmes = await getFilmes()
    
    filmes.forEach(element => {
        const card = createSpace(element)
        container.append(card)
    })
}

preencherTela()