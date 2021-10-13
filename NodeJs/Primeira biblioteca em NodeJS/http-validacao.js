const fetch = require('node-fetch')

async function checaStatus(arrayUrls){
    const arrayStatus = await Promise.all(arrayUrls.map(async url =>{
        const res = await fetch(url)
        return res
    }))
    return arrayStatus
}

function geraArrayDeUrls(arrayLinks){
    const links = []
    for(elem of arrayLinks){
        links.push(Object.values(elem))
    }
    return links
}

async function validaUrls(arrayLinks){
    const links = geraArrayDeUrls(arrayLinks)
    const statusLinks = await checaStatus(links)
    return statusLinks
}

module.exports = validaUrls