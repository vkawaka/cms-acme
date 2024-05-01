'use strict'

export async function getAdms(){
    const url = 'http://localhost:8080/v2/acmefilmes/adm'
    const response = await fetch(url)
    const data = await response.json()
    return data.administrador
}

export async function getAdm(id){
    const url = `http://localhost:8080/v2/acmefilmes/adm/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.adm[0]
}

export async function postAdm(adm){
    const url = 'http://localhost:8080/v2/acmefilmes/adm'
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(adm)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function putAdm(id, adm){

    console.log(id, adm);
    const url = `http://localhost:8080/v2/acmefilmes/adm/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }
    const response = await fetch(url, options)
    return response.ok
}

export async function deleteAdm(id){
    const url = `http://localhost:8080/v2/acmefilmes/adm/${id}`
    const options = {
        method: 'DELETE'
    }
    let response = await fetch(url, options)

    return response.ok
}