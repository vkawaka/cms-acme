'use strict'

import { getClassificacoes, getClassificacao, putClassificacao, deleteClassificacao } from "../js/classificacao.js";
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

const createSpace = (classi) =>{
    const classE = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = classi.id

    const classificacao = document.createElement('td')
    classificacao.textContent = classi.classificacao
    classificacao.classList.add('text-center')

    const iconT = document.createElement('td')
    const icon = document.createElement('img')
    icon.src = classi.icone
    icon.classList.add('min-w-7', 'max-w-10')

    iconT.append(icon)

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

    classE.append(id, classificacao, iconT, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteClassificacao(classi.id)
        location.reload();
    })
    editBtn.addEventListener('click', function() {
        editar(classi.id)
    })

    console.log(classE);

    return classE
    
}

const editar = async(id) =>{
    const close = document.getElementById('close')

    const dados = await getClassificacao(id)

    const form = document.getElementById('form')
    form.classList.remove('hidden')
    const botao = document.getElementById('editar')
    const caraI = document.getElementById('caracteristica')
    const classI = document.getElementById('classificacao')
    const faixaI = document.getElementById('faixa')
    const iconI = document.getElementById('icone')



    caraI.value = dados.caracteristica
    classI.value = dados.classificacao
    faixaI.value = dados.faixa_etaria
    iconI.value = dados.icone

    let novo

    botao.addEventListener('click', async()=>{
        
        const ca = caraI.value
        const cla = classI.value
        const fa = faixaI.value
        const icon = iconI.value
                  novo = {
                      caracteristica: ca,
                      classificacao: cla,
                      faixa_etaria: fa,
                      icone: icon
                  }
        
                console.log(novo)

                const teste = await putClassificacao(id, novo)
                console.log(teste);
        
    })
    close.addEventListener('click', function() {
        form.classList.add('hidden')
    })
}   

async function preencherTela(){
    const table = document.getElementById('table')

    const filmes = await getClassificacoes()
    console.log(filmes);
    
    filmes.forEach(element => {
        const card = createSpace(element)
        table.append(card)
    })
}

preencherTela()