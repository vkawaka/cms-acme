'use strict'

import { getFilmes, deleteFilme, putFilme, getFilme} from "./filmes.js"
console.log(await getFilmes());
import { getClassificacoes } from "./classificacao.js";
import { getAtores } from "./ator.js";
import { getDiretores } from "./diretor.js";
import { getGeneros } from "./genero.js";
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

    return filmeE
    
}

const editarFilme = async(id) =>{
    const close = document.getElementById('close')

const classificacoes = await getClassificacoes()
const atores = await getAtores()
const diretores = await getDiretores()
const generos = await getGeneros()

const arrayC = []
const arrayA = []
const arrayD = []
const arrayG = []
const ulC = document.getElementById('ulC')
const ulA = document.getElementById('ulA')
const ulD = document.getElementById('ulD')
const ulG = document.getElementById('ulG')

const dropdownButtonC = document.getElementById('classificacao');
const dropdownMenuC = document.getElementById('classificacao-drop');
  
    dropdownButtonC.addEventListener('click', function() {
      if (dropdownMenuC.classList.contains('hidden')) {
        dropdownMenuC.classList.remove('hidden');
      } else {
        dropdownMenuC.classList.add('hidden');
      }
});
const dropdownButtonA = document.getElementById('ator');
const dropdownMenuA = document.getElementById('ator-drop');
  
    dropdownButtonA.addEventListener('click', function() {
      if (dropdownMenuA.classList.contains('hidden')) {
        dropdownMenuA.classList.remove('hidden');
      } else {
        dropdownMenuA.classList.add('hidden');
      }
});
const dropdownButtonD = document.getElementById('diretor');
const dropdownMenuD = document.getElementById('diretor-drop');
  
    dropdownButtonD.addEventListener('click', function() {
      if (dropdownMenuD.classList.contains('hidden')) {
        dropdownMenuD.classList.remove('hidden');
      } else {
        dropdownMenuD.classList.add('hidden');
      }
});
const dropdownButtonG = document.getElementById('genero');
const dropdownMenuG = document.getElementById('genero-drop');
  
    dropdownButtonG.addEventListener('click', function() {
      if (dropdownMenuG.classList.contains('hidden')) {
        dropdownMenuG.classList.remove('hidden');
      } else {
        dropdownMenuG.classList.add('hidden');
      }
});

classificacoes.forEach(element => {
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
        label.textContent = element.classificacao
    
        div.append(input, label)
        li.append(div)
        ulC.append(li)
});
ulC.addEventListener('change', (event)=>{
    const checkbox = event.target
    const input = checkbox.id
    if (checkbox.type === 'checkbox' && checkbox.checked) {
        arrayC.push(input.split('-')[1])
        console.log(`id add: ${arrayC}`);
    } else {
        const index = arrayC.indexOf(input.split('-'[1]))
        arrayC.splice(index, 1)
        console.log(`id off: ${arrayC}`);
    }
    arrayC.forEach(element => {
        element = Number(element)
        console.log(element);
        console.log(arrayC);
    });
})

atores.forEach(element => {
    const li = document.createElement('li')
    const div = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')

    div.classList.add('flex', 'items-center', 'p-2', 'rounded', 'hover:bg-gray-200')
    input.id = "a-" + element.id
    input.type = "checkbox"
    input.value = ""
    input.classList.add('w-4', 'h-4', 'text-blue-600', 'bg-gray-100', 'border-gray-300', 'rounded', 'focus:ring-blue-500', 'dark:focus:ring-blue-600', 'dark:focus:ring-offset-gray-700', 'focus:ring-2', 'dark:bg-gray-600', 'dark:border-gray-500')
    label.for = element.id
    label.classList.add('w-full', 'ms-2', 'text-sm', 'font-medium', 'text-gray-900', 'rounded', 'dark:text-gray-300')
    label.textContent = element.nome

    div.append(input, label)
    li.append(div)
    ulA.append(li)
});
ulA.addEventListener('change', (event)=>{
    const checkbox = event.target
    const input = checkbox.id
    if (checkbox.type === 'checkbox' && checkbox.checked) {
        arrayA.push(input.split('-')[1])
        console.log(`id add: ${arrayA}`);
        console.log(arrayA);

    } else {
        const index = arrayA.indexOf(input.split('-'[1]))
        arrayA.splice(index, 1)
        console.log(`id off: ${arrayA}`);
        console.log(arrayA);
    }
    arrayA.forEach(element => {
        element = Number(element)
    });
})

diretores.forEach(element => {
    // console.log(element);
    const li = document.createElement('li')
    const div = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')

    div.classList.add('flex', 'items-center', 'p-2', 'rounded', 'hover:bg-gray-200')
    input.id = "d-"+element.id
    input.type = "checkbox"
    input.value = ""
    input.classList.add('w-4', 'h-4', 'text-blue-600', 'bg-gray-100', 'border-gray-300', 'rounded', 'focus:ring-blue-500', 'dark:focus:ring-blue-600', 'dark:focus:ring-offset-gray-700', 'focus:ring-2', 'dark:bg-gray-600', 'dark:border-gray-500')
    label.for = "d-"+element.id
    label.classList.add('w-full', 'ms-2', 'text-sm', 'font-medium', 'text-gray-900', 'rounded', 'dark:text-gray-300')
    label.textContent = element.nome

    div.append(input, label)
    li.append(div)
    ulD.append(li)
});
ulD.addEventListener('change', (event)=>{
    const checkbox = event.target
    const input = checkbox.id
    if (checkbox.type === 'checkbox' && checkbox.checked) {
        arrayD.push(input.split('-')[1])
        console.log(`id add: ${arrayD}`);
    } else {
        const index = arrayD.indexOf(input.split('-'[1]))
        arrayD.splice(index, 1)
        console.log(`id off: ${arrayD}`);
    }
    arrayD.forEach(element => {
        element = Number(element)
    });
})
generos.forEach(element => {
    // console.log(element);
    const li = document.createElement('li')
    const div = document.createElement('div')
    const input = document.createElement('input')
    const label = document.createElement('label')

    div.classList.add('flex', 'items-center', 'p-2', 'rounded', 'hover:bg-gray-200')
    input.id = "g-"+element.id
    input.type = "checkbox"
    input.value = ""
    input.classList.add('w-4', 'h-4', 'text-blue-600', 'bg-gray-100', 'border-gray-300', 'rounded', 'focus:ring-blue-500', 'dark:focus:ring-blue-600', 'dark:focus:ring-offset-gray-700', 'focus:ring-2', 'dark:bg-gray-600', 'dark:border-gray-500')
    label.for = element.id
    label.classList.add('w-full', 'ms-2', 'text-sm', 'font-medium', 'text-gray-900', 'rounded', 'dark:text-gray-300')
    label.textContent = element.nome

    div.append(input, label)
    li.append(div)
    ulG.append(li)
});
ulG.addEventListener('change', (event)=>{
    const checkbox = event.target
    const input = checkbox.id
    if (checkbox.type === 'checkbox' && checkbox.checked) {
        arrayG.push(input.split('-')[1])
        console.log(`id add: ${arrayG}`);
    } else {
        const index = arrayG.indexOf(input.split('-'[1]))
        arrayG.splice(index, 1)
        console.log(`id off: ${arrayG}`);
    }
    arrayG.forEach(element => {
        element = Number(element)
    });
})


    const dadosFilme = await getFilme(id)
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
        
            if(relancaE != '' && relancaE != null && relancaE != undefined){  
                novoFilme = {
                nome: nomeE,
                sinopse: sinopseE,
                duracao: duracaoE,
                data_lancamento: lancaE,
                data_relancamento: relancaE,
                foto_capa: fotoE,
                midia_fundo: midiaE,
                valor_unitario: valorE,
                genero: arrayG,
                ator: arrayA,
                diretor: arrayD,
                id_classificacao: arrayC
                }

                const teste = await putFilme(id, novoFilme)
                console.log(teste);
              }else{
                  novoFilme = {
                    nome: nomeE,
                    sinopse: sinopseE,
                    duracao: duracaoE,
                    data_lancamento: lancaE,
                    data_relancamento: null,
                    foto_capa: fotoE,
                    midia_fundo: midiaE,
                    valor_unitario: valorE,
                    genero: arrayG,
                    ator: arrayA,
                    diretor: arrayD,
                    id_classificacao: arrayC
                      }
        
                console.log(novoFilme)

                const teste = await putFilme(id, novoFilme)
                    console.log(teste);
        
              }
        
    })
    close.addEventListener('click', function() {
        form.classList.add('hidden')
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