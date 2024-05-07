'use strict'

import { postClassificacao } from "./classificacao.js";

const botao = document.getElementById('add')


async function cadastrar() {
    

    const caraI = document.getElementById('caracteristica')
    const classI = document.getElementById('classificacao')
    const faixaI = document.getElementById('faixa')
    const iconI = document.getElementById('icone')

    const ca = caraI.value
    const cla = classI.value
    const fa = faixaI.value
    const icon = iconI.value
    let novo = {
        caracteristica: ca,
        classificacao: cla,
        faixa_etaria: fa,
        icone: icon
    }
        
    console.log(novo)

    const teste = await postClassificacao(novo)
    console.log(teste);
        
    // location.pathname = '/html/classificacao-tl.html'
}

botao.addEventListener('click', cadastrar);