'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

const createSpace = async(filme) =>{
    const filmeE = document.createElement('div')
    const nome = document.createElement('p')
    nome.textContent = filme.nome
    console.log(filme.nome);
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const editI = document.createElement('img')
    editI.src = './edit.png'
    // editBtn.id = `edit${id}`
    const deleteI = document.createElement('img')
    deleteI.src = './trash.png'
    // deleteBtn.id = `trash${id}`
    deleteBtn.append(deleteI)
    editBtn.append(editI)


    filmeE.append(nome)

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