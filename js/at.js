'use strict'

import { getAtores, getAtor, deleteAtor, putAtor, getNacionalidades } from "./ator.js"
const nacionalidades = await getNacionalidades()
const arrayN = []
const sexo = []
const ulN = document.getElementById('ulN')
const ulS = document.getElementById('ulS')

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

const createSpace = (ator) =>{
    const atorE = document.createElement('tr')

    const id = document.createElement('td')
    id.textContent = ator.id

    const nome = document.createElement('td')
    nome.textContent = ator.nome
    nome.classList.add('text-center')

    const sexo = document.createElement('td')
    sexo.textContent = ator.sexo[0].sigla
    sexo.classList.add('text-center')

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

    atorE.append(id, nome, sexo, editT, deleteT)

    deleteBtn.addEventListener('click', function() {
        deleteAtor(ator.id)
        location.reload();
    })
    editBtn.addEventListener('click', function() {
        editar(ator.id)
    })

    console.log(atorE);

    return atorE
    
}

const editar = async(id) =>{
    const dados = await getAtor(id)

    const form = document.getElementById('ue')
    const close = document.getElementById('close')

    form.classList.remove('hidden')
    const botao = document.getElementById('editar')
    const nomeI = document.getElementById('nome')
    const biografiaI = document.getElementById('biografia')
    const dataI = document.getElementById('data')

    
const dropdownButtonN = document.getElementById('nacionalidade');
const dropdownMenuN = document.getElementById('nacionalidade-drop');
  
    dropdownButtonN.addEventListener('click', function() {
      if (dropdownMenuN.classList.contains('hidden')) {
        dropdownMenuN.classList.remove('hidden');
      } else {
        dropdownMenuN.classList.add('hidden');
      }
});
const dropdownButtonS = document.getElementById('sexo');
const dropdownMenuS = document.getElementById('sexo-drop');
  
    dropdownButtonS.addEventListener('click', function() {
      if (dropdownMenuS.classList.contains('hidden')) {
        dropdownMenuS.classList.remove('hidden');
      } else {
        dropdownMenuS.classList.add('hidden');
      }
});
nacionalidades.forEach(element => {
    // console.log(element);
    const li = document.createElement('li')
    const div = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')

    div.classList.add('flex', 'items-center', 'p-2', 'rounded', 'hover:bg-gray-200')
    input.id = `c-${element.id}`
    input.type = "checkbox"
    input.value = ""
    input.classList.add('w-4', 'h-4', 'text-blue-600', 'bg-gray-100', 'border-gray-300', 'rounded', 'focus:ring-blue-500', 'dark:focus:ring-blue-600', 'dark:focus:ring-offset-gray-700', 'focus:ring-2', 'dark:bg-gray-600', 'dark:border-gray-500')
    label.for = element.id
    label.classList.add('w-full', 'ms-2', 'text-sm', 'font-medium', 'text-gray-900', 'rounded', 'dark:text-gray-300')
    label.textContent = element.nome

    div.append(input, label)
    li.append(div)
    ulN.append(li)
});
ulN.addEventListener('change', (event)=>{
const checkbox = event.target
const input = checkbox.id
if (checkbox.type === 'checkbox' && checkbox.checked) {
    arrayN.push(input.split('-')[1])
    console.log(`id add: ${arrayN}`);
} else {
    const index = arrayN.indexOf(input.split('-'[1]))
    arrayN.splice(index, 1)
    console.log(`id off: ${arrayN}`);
}
})
ulS.addEventListener('change', (event)=>{
    const checkbox = event.target
    const input = checkbox.id
    if (checkbox.type === 'checkbox' && checkbox.checked) {
        sexo.push(input.split('-')[1])
        console.log(`id add: ${sexo}`);
    } else {
        const index = sexo.indexOf(input.split('-'[1]))
        sexo.splice(index, 1)
        console.log(`id off: ${sexo}`);
    }
    })
let data = dados.data_nascimento.split('T')

    nomeI.value = dados.nome
    biografiaI.value = dados.biografia
    dataI.value = data[0]

    let ator = {}

    botao.addEventListener('click', async()=>{


            const nomeE = nomeI.value
            const biografiaE = biografiaI.value
            const dataE = dataI.value
        
                  ator = {
                      nome: nomeE,
                      data_nascimento: dataE,
                      biografia: biografiaE,
                      nacionalidade: arrayN,
                      id_sexo: sexo
                  }
        

                const teste = await putAtor(id, ator)
                console.log(teste);
        
    })

    close.addEventListener('click', function() {
        form.classList.add('hidden')
    })
}   

async function preencherTela(){
    const table = document.getElementById('table')

    const filmes = await getAtores()
    
    filmes.forEach(element => {
        const card = createSpace(element)
        table.append(card)
    })
}

preencherTela()