'use strict'

import { getAdms, getAdm, putAdm, deleteAdm } from "./adm.js";
const ulMain = document.getElementById('ul-tls')
const adm = localStorage.getItem('chefe')

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

const createSpace = (adm) =>{
    const admE = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = adm.id

    const nome = document.createElement('td')
    nome.textContent = adm.nome
    nome.classList.add('text-center')

    const usuario = document.createElement('td')
    usuario.textContent = adm.usuario
    usuario.classList.add('text-center')

    const email = document.createElement('td')
    email.textContent = adm.email
    email.classList.add('text-center')


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

    admE.append(id, nome, usuario, email, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteAdm(adm.id)
        location.reload();
    })
    editBtn.addEventListener('click', function() {
        editar(adm.id)
    })

    console.log(admE);

    return admE
    
}

const editar = async(id) =>{
    console.log(id);
    const dados = await getAdm(id)
    console.log(dados);

    const close = document.getElementById('close')

    const form = document.getElementById('form')
    form.classList.remove('hidden')
    
    const botao = document.getElementById('editar')
    const nomeI = document.getElementById('nome')
    const usuarioI = document.getElementById('usuario')
    const emailI = document.getElementById('email')
    const senhaI = document.getElementById('senha')
    const chefeI = document.getElementById('chefe')




    nomeI.value = dados.nome
    usuarioI.value = dados.usuario
    emailI.value = dados.email
    senhaI.value = dados.senha
    chefeI.value = dados.chefe



    let novoAdm

    botao.addEventListener('click', async()=>{


            const nomeE = nomeI.value
            const usuarioE = usuarioI.value
            const emailE = emailI.value
            const senhaE = senhaI.value
            const chefeE = chefeI.checked
        
                  novoAdm = {
                      usuario: usuarioE,
                      nome: nomeE,
                      senha: senhaE,
                      email: emailE,
                      chefe: chefeE
                  }
        
                await putAdm(id, novoAdm)
        
    })
    close.addEventListener('click', function() {
        form.classList.add('hidden')
    })
}   

async function preencherTela(){
    const table = document.getElementById('table')

    const filmes = await getAdms()
    
    filmes.forEach(element => {
        const card = createSpace(element)
        table.append(card)
    })
}

preencherTela()