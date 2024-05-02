'use strict'

import {postFilme} from "./filmes.js"
import { getClassificacoes } from "./classificacao.js";
import { getAtores } from "./ator.js";
import { getDiretores } from "./diretor.js";
import { getGeneros } from "./genero.js";

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
    console.log(arrayA);
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


async function cadastrar() {
    const nomeI = document.getElementById('nome').value;
    const sinopseI = document.getElementById('sinopse').value;
    const duracaoI = document.getElementById('duracao').value;
    const lanca = document.getElementById('lancamento').value;
    const relanca = document.getElementById('relancamento').value;
    const fotoI = document.getElementById('foto').value;
    const midiaI = document.getElementById('midia').value;
    const valorI = document.getElementById('valor').value;
   

    let novoFilme;

    try {
        if (relanca == '' || relanca == null || relanca == undefined) {
            novoFilme = {
                nome: nomeI,
                sinopse: sinopseI,
                duracao: duracaoI,
                data_lancamento: lanca,
                data_relancamento: null,
                foto_capa: fotoI,
                midia_fundo: midiaI,
                valor_unitario: valorI,
                genero: arrayG,
                ator: arrayA,
                diretor: arrayD,
                id_classificacao: arrayC
            };
        } else {
            novoFilme = {
                nome: nomeI,
                sinopse: sinopseI,
                duracao: duracaoI,
                data_lancamento: lanca,
                data_relancamento: relanca,
                foto_capa: fotoI,
                midia_fundo: midiaI,
                valor_unitario: valorI,
                genero: arrayG,
                ator: arrayA,
                diretor: arrayD,
                id_classificacao: arrayC
            };

           
        }
        console.log(novoFilme);
        await postFilme(novoFilme); 
    } catch (error) {
        alert("Erro ao cadastrar filme: " + error);
    }
}

const botao = document.getElementById('criar');
botao.addEventListener('click', cadastrar);