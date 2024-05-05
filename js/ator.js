'use strict'

export async function getAtores(){
    const url = 'http://localhost:8080/v2/acmefilmes/ator'
    const response = await fetch(url)
    const data = await response.json()
    return data.ator
}
export async function getNacionalidades(){
    const url = 'http://localhost:8080/v2/acmefilmes/nacionalidade'
    const response = await fetch(url)
    const data = await response.json()
    return data.nacionalidades
}

export async function getAtor(id){
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.ator[0]
}

export async function postAtor(ator){
    const url = 'http://localhost:8080/v2/acmefilmes/ator'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putAtor(id, ator){

    console.log(id, ator);
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteAtor(id){
    const url = `http://localhost:8080/v2/acmefilmes/ator/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}