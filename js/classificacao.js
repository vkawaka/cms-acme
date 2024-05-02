'use strict'

export async function getClassificacoes(){
    const url = 'http://localhost:8080/v2/acmefilmes/classificacao'
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data);
    return data.classificacao
}

export async function getClassificacao(id){
    const url = `http://localhost:8080/v2/acmefilmes/classificacao/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.adm[0]
}

export async function postClassificacao(classificacao){
    const url = 'http://localhost:8080/v2/acmefilmes/clasificacao'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacao)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putClassificacao(id, classificacao){

    console.log(id, adm);
    const url = `http://localhost:8080/v2/acmefilmes/classificacao/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(classificacao)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteClassificacao(id){
    const url = `http://localhost:8080/v2/acmefilmes/classificacao/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}