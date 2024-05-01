'use strict'

export async function getGeneros(){
    const url = 'http://localhost:8080/v2/acmefilmes/genero'
    const response = await fetch(url)
    const data = await response.json()
    
    return data.generos
}

export async function getGenero(id){
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.genero[0]
}

export async function postGenero(filme){
    const url = 'http://localhost:8080/v2/acmefilmes/genero'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putGenero(id, genero){

    console.log(id, genero);
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteGenero(id){
    const url = `http://localhost:8080/v2/acmefilmes/genero/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}