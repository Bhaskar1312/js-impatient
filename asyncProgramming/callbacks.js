'use strict'
const addImage = (url, element) => {
    const request = new XMLHttpRequest()
    request.open('GET', url)
    request.responseType = 'blob'

    request.addEventListener('load', () => {
        if (request.status === 200) {
            const blob = new Blob([request.response], { type: 'image/png' })
            const img = document.createElement('img')
            img.src = URL.createObjectURL(blob)
            element.appendChild(img)
        } else {
            console.log(`${request.status}: ${request.statusText}`)
        }
    })
    request.addEventListener('error', event => console.log('Network error'));
    request.send()
}


document.addEventListener('DOMContentLoaded', () => {
    const imgdiv = document.getElementById('images')
    addImage('1.png', imgdiv)
    addImage('2.png', imgdiv)
    addImage('3.png', imgdiv)
    addImage('9.png', imgdiv)

})


