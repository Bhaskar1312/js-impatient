'use strict'
const loadImage = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        const callback = () => {
            if (request.status === 200) {
                const blob = new Blob([request.response], {type: 'image/png'})
                const img = document.createElement('img')
                img.src = URL.createObjectURL(blob)
                resolve(img)
            } else {
                reject(Error(`${request.status}: ${request.statusText}`))
            }
        }

        request.open('GET', url)
        request.responseType = 'blob'
        request.addEventListener('load', callback)
        request.addEventListener('error', event => reject(Error('Network error')));
        request.send()
    })
}

const getCatImageURL = async () => {
    const result = await fetch('https://aws.random.cat/meow')
    const imageJSON = await result.json()
    return imageJSON.file
}
// getCatImageURL()
//     .then(url=>loadImage(url))
//     .then(img => imgdiv.appendChild(img))

document.addEventListener('DOMContentLoaded', () => {
    const div = n => document.getElementById(`images${n}`)
    // Two calls to await
    const step1 = async () => {
        const result = await fetch('https://dog.ceo/api/breeds/image/random')
        const imageJSON = await result.json()
        div(1).appendChild(document.createTextNode(JSON.stringify(imageJSON)))
    }
    step1()
})