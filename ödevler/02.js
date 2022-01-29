// Foksiyonlar ile her arttırmaya veya eksiltemeye tıklandığında arttırsın azaltsın

let artıBtn = document.querySelector('#arttırma')
let eksiBtn = document.querySelector('#azaltma')
let number = document.querySelector('#sayılar')


function arttırma() {
    let sayı = number.innerHTML
    
    sayı = parseInt(sayı)

    sayı = sayı + 1

    number.innerHTML = sayı
}


function azaltma() {
    let sayı = number.innerHTML
    
    sayı = parseInt(sayı)

    sayı = sayı - 1

    number.innerHTML = sayı

    if(sayı == -1) {
        alert("0 Sayısının altına inemezsin")
        location.reload()
    }
}


artıBtn.addEventListener('click',arttırma)
eksiBtn.addEventListener('click',azaltma)