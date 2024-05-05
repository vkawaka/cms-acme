'use strict'

import { getNacionalidades} from "./ator.js"
import { postDiretor } from "./diretor.js"
const nacionalidades = await getNacionalidades()

const arrayN = []
const sexo = []
const ulN = document.getElementById('ulN')
const ulS = document.getElementById('ulS')

const dropdownButtonN = document.getElementById('ue');
const dropdownMenuN = document.getElementById('ue-drop');  
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

const botao = document.getElementById('add')


async function cadastrar() {

    const nomeI = document.getElementById('nome')
    const biografiaI = document.getElementById('biografia')
    const dataI = document.getElementById('data')

    let diretor = {}

    const nomeE = nomeI.value
    const biografiaE = biografiaI.value
    const dataE = dataI.value
        
    diretor = {
        nome: nomeE,
        data_nascimento: dataE,
        biografia: biografiaE,
        nacionalidade: arrayN,
        id_sexo: sexo
        }
        
                
    await postDiretor(diretor)
    location.href = '../html/diretor-tl.html'
}

botao.addEventListener('click', cadastrar);