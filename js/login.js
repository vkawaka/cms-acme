'use strict'

import { getAdms } from "./adm.js"

const button = document.getElementById('button')

button.addEventListener('click', async function() {
    const user = document.getElementById('email').value
    const senha = document.getElementById('password').value

    const teste = await getAdms()
    teste.forEach(element => {
        if (element.email == user || element.usuario == user && element.senha == senha) {
            document.location.href = '../html/filme-tl.html'
        }
    });
})

console.log(await getAdms());
