'use strict'

import { postGenero } from "./genero.js";

const botao = document.getElementById('add')


async function cadastrar() {
    

    const nomeI = document.getElementById('nome')
    const descricaoI = document.getElementById('descricao')

    let novoGenero

            const nomeE = nomeI.value
            const descricapE = descricaoI.value
        
                  novoGenero = {
                      nome: nomeE,
                      descricao: descricapE,
                  }
        
                console.log(novoGenero)

                const teste = await postGenero(novoGenero)
                console.log(teste);
        
}

botao.addEventListener('click', cadastrar);