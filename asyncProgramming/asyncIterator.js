'use strict'

// const loadImage = url => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest()
//         const callback = () => {
//             if (request.status === 200) {
//                 const blob = new Blob([request.response], {type: 'image/png'})
//                 const img = document.createElement('img')
//                 img.src = URL.createObjectURL(blob)
//                 resolve(img)
//             } else {
//                 reject(Error(`${request.status}: ${request.statusText}`))
//             }
//         }
//
//         request.open('GET', url)
//         request.responseType = 'blob'
//         request.addEventListener('load', callback)
//         request.addEventListener('error', event => reject(Error('Network error')));
//         request.send()
//     })
// }
//
// async function* loadImages(urls) {
//     for(const url of urls) {
//         yield await loadImage(url)
//     }
// }
//
// for await(let img of loadImages(urls)) {
//     document.getElementById('images').appendChild(img)
// }

function produceAfterDelay(what, when) {
    return new Promise((resolve, reject) => {
        setTimeout(()=> resolve(what), when)
    })
}

class TimedRange {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    async *[Symbol.asyncIterator]() {
        for (let current = this.from; current < this.to; current++) {
            yield await produceAfterDelay(current, 1000)
        }
    }
}

let r = new TimedRange(1, 5);
for await (const e of r) {
    console.log(e)
}
// in node console or browser