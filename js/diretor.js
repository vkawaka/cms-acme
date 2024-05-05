'use strict'

export async function getDiretores(){
    const url = 'http://localhost:8080/v2/acmefilmes/diretor'
    const response = await fetch(url)
    const data = await response.json()
    return data.diretores
}

export async function getDiretor(id){
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.diretor[0]
}

export async function postDiretor(diretor){
    const url = 'http://localhost:8080/v2/acmefilmes/diretor'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putDiretor(id, diretor){

    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteDiretor(id){
    const url = `http://localhost:8080/v2/acmefilmes/diretor/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}