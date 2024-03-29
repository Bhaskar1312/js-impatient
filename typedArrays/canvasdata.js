'use strict'
document.addEventListener('DOMContentLoaded', function () {
    const img = new Image();
    img.src = 'canvaspic.png';
    img.addEventListener('load', ()=>{
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        let rgba = imgData.data; // Uint8ClampedArray

        canvas.addEventListener('click', event=>{
            for (let i = 0; i < rgba.length; i++) {
                if(i%4 !==3) rgba[i] = 255 - rgba[i];
            }
            ctx.putImageData(imgData, 0, 0);
        })
    })
})