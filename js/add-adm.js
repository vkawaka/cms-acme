'use strict'

import { postAdm } from "./adm.js";

const botao = document.getElementById('add')


async function cadastrar() {
    
    const nomeI = document.getElementById('nome')
    const usuarioI = document.getElementById('usuario')
    const emailI = document.getElementById('email')
    const senhaI = document.getElementById('senha')
    const chefeI = document.getElementById('chefe')





    const nomeE = nomeI.value
    const usuarioE = usuarioI.value
    const emailE = emailI.value
    const senhaE = senhaI.value
    const chefeE = chefeI.checked

    // let valueToSend = chefeE ? 'true' : 'false';
   
                let  novoAdm = {
                      usuario: usuarioE,
                      nome: nomeE,
                      senha: senhaE,
                      email: emailE,
                      chefe: chefeE
                  }
        
   await postAdm(novoAdm)
        
}


botao.addEventListener('click', cadastrar);