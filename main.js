'use strict'

import { getFilmes, getFilme, postFilme, deleteFilme } from "./filmes.js"

const createSpace = async(id) =>{
    const container = document.getElementById('cont')

    const filme = document.createElement('div')
    const nome = document.createElement('p')
    const editBtn = document.createElement('button')
    const deleteBtn = document.createElement('button')
    const editI = document.createElement('img')
    editI.src = './edit.png'
    editBtn.id = `edit${id}`
    const deleteI = document.createElement('img')
    deleteI.src = './trash.png'
    deleteBtn.id = `trash${id}`
    
}