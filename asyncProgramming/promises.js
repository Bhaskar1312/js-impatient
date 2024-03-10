'use strict'

// Promise is an object to compute a value eventually
// Easier to chain completion and error actions than with callbacks(blocked calls called with callback)
// const myPromise = new Promise((resolve, reject) => {
//     const callback = (args) => {
//         if(success) resolve(result)
//         else reject(reason)
//     }
//     invokeTask(callback)
// })

const loadImage = url => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest()
        const callback = () => {
            if (request.status === 200) {
                const blob = new Blob([request.response], { type: 'image/png' })
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

function produceAfterDelay(what, when) {
    return new Promise((resolve, reject) => {
        const callback= () => resolve(what)
        setTimeout(callback, when)
    })
}
const promise2 = produceAfterDelay(42, 1000)
console.log(promise2) // in pending state
promise2.then(console.log)