'use strict'

import { getGeneros, getGenero, putGenero, postGenero, deleteGenero } from "./genero.js"
const ulMain = document.getElementById('ul-tls')
const adm = localStorage.getItem('chefe')
console.log(adm);

if (adm == 1) {
    const li = document.createElement('li')
    const button = document.createElement('button')
    const a = document.createElement('a')
    a.href = '../html/adms-tl.html'
    button.classList.add('a')
    a.textContent = "Administradores"
    button.append(a)
    li.append(button)

    ulMain.append(li)
}

const createSpace = (genero) =>{
    const close = document.getElementById('close')

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
    console.log(id);
    const close = document.getElementById('close')

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
    close.addEventListener('click', function() {
        form.classList.add('hidden')
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